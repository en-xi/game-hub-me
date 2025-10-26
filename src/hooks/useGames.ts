import { useQuery } from "@tanstack/react-query";
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
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", queryObject],
    queryFn: () =>
      getAll<Game>("/games", {
        params: {
          genres: queryObject.genre?.id,
          parent_platforms: queryObject.platform?.id,
          ordering: queryObject.sortOrder,
          search: queryObject.searchText,
        },
      }),
  });

export default useGames;
