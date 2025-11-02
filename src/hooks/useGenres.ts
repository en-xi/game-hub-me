import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import { getAll } from "../services/api-client";
import { Genre } from "../entities/Genre";

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () => getAll<Genre>("/genres"),
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;
