import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import { getAll } from "../services/api-client";
import { Platform } from "./useGames";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () => getAll<Platform>("/platforms/lists/parents"),
    staleTime: ms("24h"),
    initialData: platforms,
  });

export default usePlatforms;
