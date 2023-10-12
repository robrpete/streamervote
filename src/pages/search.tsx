import Link from "next/link";
import Image from "next/image";
import { searchedStore } from "~/utils/zusState";

export default function Results() {
  const { searched } = searchedStore();
  const arr = Array.from(searched);
  console.log(arr);
  return (
    <div className="grid grid-cols-1 items-center md:grid-cols-2">
      {arr.map((a) => (
        <div key={a.r.id} className="flex w-full p-2">
          <div className=" pr-1">
            <Image
              className="rounded-full"
              src={a.r.thumbnail_url}
              width={60}
              height={60}
              alt={a.r.display_name}
            />
          </div>
          <div className="w-3/4">
            <div className="flex w-full justify-between">
              <Link
                href={`/${a.r.display_name}`}
                className="hover:text-purple-400"
              >
                {a.r.display_name}
              </Link>
              <button className="rounded-lg bg-[#9147FF] px-2">Vote</button>
            </div>
            <p className="text-left">Last seen: {a.r.game_name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
