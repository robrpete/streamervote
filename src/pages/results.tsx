import { useStore } from "~/utils/zusState";

export default function Results() {
  const votes = useStore((state) => state.votes);
  return <div>results {votes}</div>;
}
