import { useInfiniteQuery } from "@tanstack/react-query";
import { QueryObject } from "../App";
import { FetchResponse, getAll } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (queryObject: QueryObject) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", queryObject],
    queryFn: ({ pageParam = 1 }) =>
      getAll<Game>("/games", {
        params: {
          genres: queryObject.genreId,
          parent_platforms: queryObject.platformId,
          ordering: queryObject.sortOrder,
          search: queryObject.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useGames;
