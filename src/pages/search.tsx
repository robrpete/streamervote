import Link from "next/link";
import Image from "next/image";
import { searchedStore } from "~/utils/zusState";
import { useRouter } from "next/router";

export default function Results() {
  const router = useRouter();
  const streamer = router.query.term as string;
  const { searched } = searchedStore();
  const arr = Array.from(searched);
  const match = arr.find((a) => {
    return a.r.display_name.toLowerCase() === streamer.toLowerCase();
  });

  return (
    <div>
      <div key={match.r.id} className="flex w-full justify-center p-4">
        <div className=" pr-1">
          <Image
            className="rounded-full"
            src={match.r.thumbnail_url}
            width={120}
            height={120}
            alt={match.r.display_name}
          />
        </div>
        <div className="p-2">
          <div className="flex w-full flex-col text-left">
            <Link
              href={`/${match.r.display_name}`}
              className="hover:text-purple-400"
            >
              {match.r.display_name}
            </Link>
            <p>tba Followers</p>
          </div>
          {match.r.is_live && (
            <p className="text-left text-green-600">
              Live: {match.r.game_name}
            </p>
          )}
          {!match.r.is_live && (
            <p className="text-left text-red-600">
              Last seen: {match.r.game_name}
            </p>
          )}
        </div>
        <div className="pt-2">
          <button className="w-16 rounded-lg bg-[#9147FF] px-2">Vote</button>
          <div className="h-2"></div>
          <button className="w-16 rounded-lg px-2 text-[#9147FF]">
            Follow
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 items-center md:grid-cols-2">
        {arr.map((a) => {
          if (a.r.display_name.toLowerCase() === streamer.toLowerCase()) {
            return null;
          } else {
            return (
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
                  </div>
                  {a.r.is_live && (
                    <p className="text-left text-green-600">
                      Live: {a.r.game_name}
                    </p>
                  )}
                  {!a.r.is_live && (
                    <p className="text-left text-red-600">
                      Last seen: {a.r.game_name}
                    </p>
                  )}
                </div>
                <div>
                  <button className="w-16 rounded-lg bg-[#9147FF] px-2">
                    Vote
                  </button>
                  <div className="h-2"></div>
                  <button className="w-16 rounded-lg px-2 text-[#9147FF]">
                    Follow
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
