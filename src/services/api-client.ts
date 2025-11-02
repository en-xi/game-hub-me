import axios, { AxiosRequestConfig } from "axios";
import { Game } from "../entities/Game";
import { Trailer } from "../entities/Trailer";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
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

export const getGame = (id: number | string) =>
  axiosInstance.get<Game>("/games/" + id).then((res) => res.data);

export const getTrailer = (gameId: number) =>
  axiosInstance
    .get<FetchResponse<Trailer>>(`/games/${gameId}/movies`)
    .then((res) => res.data);
