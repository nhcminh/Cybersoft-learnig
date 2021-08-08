import { request } from './config';

const userManagementDomain =
  'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/';

export const AxiosGet = (endPoint, params = '') => {
  return request({
    url: `${userManagementDomain}${endPoint}${params}`,
    method: 'GET',
    params: params,
  });
};

export const AxiosPost = (endPoint, body = {}, params = '') => {
  return request({
    url: `${userManagementDomain}${endPoint}${params}`,
    method: 'POST',
    body: body,
    params: params,
  });
};
export const AxiosPut = (endPoint, body = {}, params = '') => {
  return request({
    url: `${userManagementDomain}${endPoint}${params}`,
    method: 'PUT',
    body: body,
    params: params,
  });
};

export const AxiosDelete = (endPoint, body = {}, params = '') => {
  return request({
    url: `${userManagementDomain}${endPoint}${params}`,
    method: 'DELETE',
    body: body,
    params: params,
  });
};
