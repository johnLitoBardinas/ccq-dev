import axios, { AxiosRequestConfig } from 'axios';

// export interface FetchCCQResponse<T> {
//   count: number;
//   results: T[];
//   status: string;
//   message: string;
// }

const axiosInstance = axios.create({
  // baseURL: import.meta.env.VITE_API_BASE_URL,
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

class APCLient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return axiosInstance.get<T[]>(this.endpoint).then(response => response.data);
  };

  getAllWithConfig = (config: AxiosRequestConfig) => {
    return axiosInstance.get<T[]>(this.endpoint, config).then(response => response.data);
  };

  post = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then(response => response.data);
  };
}

export default APCLient;
