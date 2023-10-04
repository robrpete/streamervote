import { useStore, searchedStore } from "~/utils/zusState";

export default function Results() {
  const votes = useStore((state) => state.votes);
  const searched = searchedStore((state) => state.searched);

  type kv = Record<string, number>;

  const results: kv[] = [{ one: 1 }, { two: 2 }];
  const k = results.map((r) => Object.keys(r));
  const v = results.map((r) => Object.values(r));

  function handleTest() {
    results.map((r, index) => {
      searchedStore.setState((prev) => ({
        searched: new Map(prev.searched).set(k[index], v[index]),
      }));
    });
  }

  const arr = Array.from(searched);

  return (
    <div>
      results {votes}
      <button onClick={handleTest} className="rounded-lg bg-blue-600 p-1">
        test
      </button>
      search:
    </div>
  );
}
