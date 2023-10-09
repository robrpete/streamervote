import Link from "next/link";
import Image from "next/image";
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
        <div key={a.r.id}>
          <Image
            src={a.r.thumbnail_url}
            width={40}
            height={40}
            alt={a.r.display_name}
          />
          <Link href="/" className="hover:text-purple-400">
            {a.r.display_name}
          </Link>
        </div>
      ))}
    </div>
  );
}
