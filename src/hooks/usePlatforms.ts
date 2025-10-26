import { useQuery } from "@tanstack/react-query";
import { getAll } from "../services/api-client";
import { Platform } from "./useGames";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () => getAll<Platform>("/platforms/lists/parents"),
    staleTime: 24 * 60 * 60 * 1000,
    // initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
