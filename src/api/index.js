import axios from 'axios';
import qs from 'qs';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // NProgress 스타일을 불러옵니다

const { VITE_API_HOST } = import.meta.env;

// axios 인스턴스 생성 및 기본 URL 설정
export const apiClient = axios.create({
  baseURL: VITE_API_HOST,
  paramsSerializer: (params) => {
    return qs.stringify(params);
  },
});

NProgress.configure({ showSpinner: false });

// 값이 비어 있거나 null 또는 undefined인 매개변수를 제외하는 함수
const filterEmptyParams = (params) => {
  const filteredParams = {};
  for (const key in params) {
    const value = params[key];
    if (value !== '' && value !== null && value !== undefined) {
      filteredParams[key] = value;
    }
  }
  return filteredParams;
};

// 요청시 parameter 처리
apiClient.interceptors.request.use(
  (config) => {
    NProgress.start(); // 프로그래스바 시작

    // 요청을 보내기 전에 매개변수 필터링
    if (config.params) {
      config.params = filterEmptyParams(config.params);
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  function (response) {
    NProgress.done(); // 요청이 성공적으로 완료되면 NProgress 종료
    return response;
  },
  async function (error) {
    NProgress.done(); // 요청이 성공적으로 완료되면 NProgress 종료

    return Promise.reject(error);
  },
);
