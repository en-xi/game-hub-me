import { useQuery } from "@tanstack/react-query";
import { getScreenshots } from "../services/api-client";

const useScreenshots = (gameId: number) =>
  useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: () => getScreenshots(gameId),
  });

export default useScreenshots;
