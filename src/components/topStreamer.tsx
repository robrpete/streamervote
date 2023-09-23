import Image from "next/image";

export default function TopStreamer() {
  return (
    <div>
      <h2 className="pt-4 text-3xl font-bold text-purple-400 mob:pt-2 mob:text-4xl">
        Number One
      </h2>
      <h2 className="pb-4 text-3xl font-bold text-purple-400 mob:text-4xl">
        Streamer
      </h2>
      <div className="flex h-56 w-fit flex-col items-center rounded-xl px-2 py-2">
        <Image
          src="/rawrr.png"
          height={150}
          width={150}
          alt="ava"
          className="rounded-full border-4"
        />
        <p className="text-xl font-semibold text-purple-400">zackrawrr</p>
        <p>votes: 99,999</p>
        <p className="text-red-600">not live</p>
        <div className="flex gap-12 text-black">
          <button className="rounded-lg bg-purple-400 px-2 py-1">vote</button>
          <div className="flex gap-2">
            <button className="rounded-lg bg-blue-600 px-2 py-1">up</button>
            <button className="rounded-lg bg-red-600 px-2 py-1">down</button>
          </div>
        </div>
      </div>
    </div>
  );
}
