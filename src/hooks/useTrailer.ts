import { useQuery } from "@tanstack/react-query";
import { getTrailer } from "../services/api-client";

const useTrailer = (gameId: number) =>
  useQuery({
    queryKey: ["trailer", gameId],
    queryFn: () => getTrailer(gameId),
  });

export default useTrailer;
