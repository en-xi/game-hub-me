import { useQuery } from "@tanstack/react-query";
import { getGame } from "../services/api-client";

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["game", slug],
    queryFn: () => getGame(slug),
  });

export default useGame;
