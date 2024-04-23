import usePaginatedQuery from '@src/hooks/usePaginator'; // 커스텀 훅 임포트
import { getEvent } from '@src/services/test/TestService';
import { useState } from 'react';
import PaginationButton from '../core/PaginationButton';
import Loading from '@common/Loading';

function PaginationTest() {
  const initParmas = { numberType: 0, stringType: '' }; //검색 초기값

  const [nowParams, setNowParams] = useState(initParmas); //화면에보이는 검색 값

  const {
    data,
    isLoading,
    isError,
    error,
    clear, //초기화
    setParameters, //페이지 검색 트리거
    page, //현재페이지
    setPage,
    totalCount,
    totalPages,
  } = usePaginatedQuery('event', getEvent, 0, 10, initParmas, setNowParams);

  if (isLoading) return <Loading />;
  if (isError) return <div>Error: {error.message}</div>;

  //현재 화면값 update
  const handleUpdate = (event, key) => {
    const value = event.target.value;
    setNowParams((prev) => ({ ...prev, [key]: value }));
  };

  //검색 클릭시 페이지 조회
  const handleSearch = (event) => {
    event.preventDefault();
    setPage(0); // 검색 시 항상 첫 페이지로 초기화
    setParameters(nowParams);
  };

  return (
    <div>
      <h1>Projects</h1>
      <input
        type="number"
        placeholder="numberType"
        value={nowParams['numberType']}
        onChange={(e) => handleUpdate(e, 'numberType')}
      />
      <input
        type="text"
        placeholder="stringType"
        value={nowParams['stringType']}
        onChange={(e) => handleUpdate(e, 'stringType')}
      />
      <button onClick={handleSearch}>검색</button>
      <div>totalCount : {totalCount}</div>
      {data.result.content.map((project) => (
        <p key={project.eventSeq}>{project.eventTitle}</p>
      ))}

      <PaginationButton
        currentPage={page}
        setCurrentPage={setPage}
        totalPage={totalPages}
      />

      <button onClick={clear}>초기화</button>
      <div>totalPages : {totalPages}</div>
    </div>
  );
}

export default PaginationTest;
