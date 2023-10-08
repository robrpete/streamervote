import { useStore, searchedStore } from "~/utils/zusState";

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

export default function Results() {
  const votes = useStore((state) => state.votes);
  const { searched } = searchedStore();
  const arr = Array.from(searched);

  return (
    <div>
      results {votes}
      <button className="rounded-lg bg-blue-600 p-1">test</button>
      search:
      {arr.map((r: sss) => (
        <div key={r.r.id}>
          {r.r.display_name}, {r.r.title}
        </div>
      ))}
    </div>
  );
}
