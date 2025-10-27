import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import { getAll } from "../services/api-client";
import { Platform } from "./useGames";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () => getAll<Platform>("/platforms/lists/parents"),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms,
  });

export default usePlatforms;
