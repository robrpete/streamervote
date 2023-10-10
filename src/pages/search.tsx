import Link from "next/link";
import Image from "next/image";
import { useStore, searchedStore } from "~/utils/zusState";

export default function Results() {
  const votes = useStore((state) => state.votes);
  const { searched } = searchedStore();
  const arr = Array.from(searched);
  console.log(arr);
  return (
    <div>
      results {votes}
      <button className="rounded-lg bg-blue-600 p-1">test</button>
      search:
      {arr.map((a) => (
        <div key={a.r.id} className="flex border-2">
          <div>
            <Image
              src={a.r.thumbnail_url}
              width={40}
              height={40}
              alt={a.r.display_name}
            />
          </div>
          <div>
            <Link href="/" className="hover:text-purple-400">
              {a.r.display_name}
            </Link>
            <p>{a.r.game_name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
