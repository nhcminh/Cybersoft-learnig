import axios from 'axios';

export const request = ({ url, body, params, method }) => {
  const variables = {
    url,
    data: body,
    params,
    method,
  };
  return axios(variables);
};

axios.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem('token'));
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    config.headers['Access-Control-Allow-Origin'] = '*';
    // config.headers['Content-Type'] = 'application/json';
    // console.log(config);
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log("RESPONSE:", response.body);
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // console.log(error.response);
    return Promise.reject(error);
  }
);
