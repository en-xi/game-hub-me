import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import { getAll } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () => getAll<Genre>("/genres"),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, results: genres, next: null },
  });

export default useGenres;
