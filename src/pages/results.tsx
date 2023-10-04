import { useStore, searchedStore } from "~/utils/zusState";

export default function Results() {
  const votes = useStore((state) => state.votes);
  const searched = searchedStore((state) => state.searched);

  return (
    <div>
      results {votes}
      <button className="rounded-lg bg-blue-600 p-1">test</button>
      search:
    </div>
  );
}
