import { create } from "zustand";

interface voteI {
  votes: number;
  increaseVote: (by: number) => void;
}

export const useStore = create<voteI>()((set) => ({
  votes: 0,
  increaseVote: (by) => set((state) => ({ votes: state.votes + by })),
}));

type ss = {
  broadcaster_language: string;
  broadcaster_login: string;
  display_name: string;
  game_id: string;
  id: string;
  is_live: boolean;
  started_at: string;
  tag_ids: string[];
  tags: string[];
  thumbnail_url: string;
  title: string;
};

type sss = { r: ss };

type St = { searched: Set<sss> };

export const searchedStore = create<St>(() => ({ searched: new Set<sss>() }));
