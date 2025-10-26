import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1b28856b48f94f9b92b85fc23fa339b3",
  },
});

export const getAll = <T>(endpoint: string, config?: AxiosRequestConfig) =>
  axiosInstance.get<FetchResponse<T>>(endpoint, config).then((res) => res.data);
