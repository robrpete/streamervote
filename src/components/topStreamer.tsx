import Image from "next/image";

export default function TopStreamer() {
  return (
    <div>
      <div className="flex h-fit w-56 flex-col items-center px-2 py-2">
        <p className="pb-4 text-3xl font-semibold">zackrawrr</p>
        <Image
          src="/rawrr.png"
          height={150}
          width={150}
          alt="ava"
          className="rounded-full border-4"
        />

        <p className="pt-2">votes: 99,999</p>
        <p className="text-red-600">not live</p>
        <div className="flex w-full flex-col gap-2 text-black">
          <button className=" rounded-lg bg-yellow-400 px-2 py-1">vote</button>
        </div>
      </div>
    </div>
  );
}
