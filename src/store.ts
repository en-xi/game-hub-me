import { create } from "zustand";

type GameQuery = {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
};

type Query = {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGameQuery: (gameQuery: GameQuery) => void;
};

const useGameQuery = create<Query>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) =>
    set((store) => ({ gameQuery: { searchText } })),
  setGameQuery: (gameQuery) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, ...gameQuery } })),
}));

export default useGameQuery;
