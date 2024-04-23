import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

function usePaginatedQuery(
  key, //캐싱 키값
  fetchingFunc, //패칭 함수
  initialPage = 0, //페이지 초기값
  size = 10, //사이즈 초기값
  initialParameters = {}, //파라미터 초기값
  searchParams = {}, //검색 파라미터 값
  resetFunc = () => {}, //초기화시 사용할 함수
) {
  const [page, setPage] = useState(initialPage);
  const [parameters, setParameters] = useState(initialParameters);

  //데이터 조회
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [key, { page, size, ...parameters }], //[key,options] options의 내용이 바뀔때 useQuery호출됨
    queryFn: () => fetchingFunc({ page, size, ...parameters }),
    keepPreviousData: true, //이전데이터 저장
    staleTime: 5000, // 5초 동안 신선도 유지
    cacheTime: 600000, // 캐시 유지시간 600초
  });

  //초기화
  const clear = () => {
    setPage(initialPage);
    setParameters(initialParameters); //api 콜하는 params
    resetFunc(); //초기화와 같이 사용될 함수
  };

  const handleSearch = () => {
    setPage(0); // 검색 시 항상 첫 페이지로 초기화
    setParameters(searchParams);
  };

  return {
    data,
    isLoading,
    isError,
    error,
    clear,
    handleSearch,
    page,
    setPage,
  };
}

export default usePaginatedQuery;
