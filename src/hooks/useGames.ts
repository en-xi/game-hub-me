import { QueryObject } from "../App";
import useData from "./useData";

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
  useData<Game>(
    "/games",
    {
      params: {
        genres: queryObject.genre?.id,
        platforms: queryObject.platform?.id,
        ordering: queryObject.sortOrder,
        search: queryObject.searchText,
      },
    },
    [queryObject]
  );

export default useGames;
