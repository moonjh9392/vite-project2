import axiosRequest from '@src/api/axiosRequest.js';
import API_ENDPOINTS from '@src/constants/endpoints.js';

const { VITE_SMTP_KEY } = import.meta.env;

export const sendEmail = async (emailData) => {
  return axiosRequest({
    method: 'post',
    url: API_ENDPOINTS.sendEmail,
    data: emailData,
    headers: { 'Access-Key': VITE_SMTP_KEY },
  });
};

export const getEvent = async (params) => {
  return axiosRequest({
    method: 'get',
    url: API_ENDPOINTS.getEvent,
    params,
  });
};
