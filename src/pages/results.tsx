import { useStore, searchedStore } from "~/utils/zusState";

export default function Results() {
  const votes = useStore((state) => state.votes);
  const { searched } = searchedStore();
  const arr = Array.from(searched);

  return (
    <div>
      results {votes}
      <button className="rounded-lg bg-blue-600 p-1">test</button>
      search:
      {arr.map((a) => (
        <div key={a.r.id}>{a.r.display_name}</div>
      ))}
    </div>
  );
}
