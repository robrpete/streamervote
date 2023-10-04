import { create } from "zustand";

interface voteI {
  votes: number;
  increaseVote: (by: number) => void;
}

export const useStore = create<voteI>()((set) => ({
  votes: 0,
  increaseVote: (by) => set((state) => ({ votes: state.votes + by })),
}));

export const searchedStore = create(() => ({ searched: new Map() }));
