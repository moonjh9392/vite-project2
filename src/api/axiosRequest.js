import { apiClient } from './index.js';

const axiosRequest = async ({
  method,
  url,
  data = {},
  params = {},
  headers = {},
}) => {
  const config = {
    params,
    headers,
    // 추가적으로 필요한 Axios 설정이 있으면 여기에 포함시킬 수 있습니다.
  };

  let response;

  switch (method.toLowerCase()) {
    case 'get':
      response = await apiClient.get(url, config);
      break;
    case 'post':
      response = await apiClient.post(url, data, config);
      break;
    case 'put':
      response = await apiClient.put(url, data, config);
      break;
    case 'patch':
      response = await apiClient.patch(url, data, config);
      break;
    case 'delete':
      response = await apiClient.delete(url, config);
      break;
    default:
      throw new Error(`The HTTP method ${method} is not supported.`);
  }
  return response.data;
};

export default axiosRequest;
