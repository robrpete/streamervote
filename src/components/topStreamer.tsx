import Image from "next/image";

export default function TopStreamer() {
  return (
    <div className="flex h-fit w-full flex-col items-center rounded-md px-2 py-2">
      <p className="pb-4 text-3xl font-semibold">zackrawrr</p>
      <Image
        src="/rawrr.png"
        height={150}
        width={150}
        alt="ava"
        priority={true}
        className="rounded-full border-4"
      />

      <p className="pt-2">votes: 99,999</p>
      <p className="pb-1 text-red-600">not live</p>
      <div className="flex w-full flex-col gap-2">
        <button
          onClick={() => {
            console.log("voted");
          }}
          className=" rounded-lg bg-purple-700 py-1 text-xl font-semibold"
        >
          Vote
        </button>
      </div>
    </div>
  );
}
