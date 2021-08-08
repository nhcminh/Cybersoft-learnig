import axios from "axios";

export const request = ({ url, body, params, method }) => {
  const variables = {
    url,
    data: body,
    params,
    method,
  };
  const token = localStorage.getItem("t");
  if (token) {
    variables.headers = {
      Authorization: "Bearer " + token,
    };
  }
  return axios(variables);
};
