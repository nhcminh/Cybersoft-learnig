import { request } from "./config";

const userManagementDomain = "https://movie0706.cybersoft.edu.vn/api/";

export const AxiosGet = (endPoint, params = "") => {
  return request({
    url: `${userManagementDomain}${endPoint}${params}`,
    method: "GET",
    params: params,
  });
};

export const AxiosPost = (endPoint, body = {}, params = "") => {
  return request({
    url: `${userManagementDomain}${endPoint}${params}`,
    method: "POST",
    body: body,
    params: params,
  });
};
