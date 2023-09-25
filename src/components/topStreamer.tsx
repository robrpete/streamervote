import Image from "next/image";

export default function TopStreamer() {
  return (
    <div className="rounded-lg">
      <div className="group relative flex h-fit w-56 flex-col items-center rounded-lg px-2 py-2">
        <span className="ease absolute left-0 top-0 h-0 w-0 rounded-lg border-t-2 border-[#eab308] transition-all duration-200 group-hover:w-full "></span>
        <span className="ease absolute right-0 top-0 h-0 w-0 rounded-lg border-r-2 border-[#eab308] transition-all duration-200 group-hover:h-full"></span>
        <span className="ease absolute bottom-0 right-0 h-0 w-0 rounded-lg border-b-2 border-[#eab308] transition-all duration-200 group-hover:w-full"></span>
        <span className="ease absolute bottom-0 left-0 h-0 w-0 rounded-lg border-l-2 border-[#eab308] transition-all duration-200 group-hover:h-full"></span>
        <p className="pb-4 text-3xl font-semibold">zackrawrr</p>
        <Image
          src="/rawrr.png"
          height={150}
          width={150}
          alt="ava"
          className="rounded-full border-4"
        />

        <p className="pt-2">votes: 99,999</p>
        <p className="pb-1 text-red-600">not live</p>
        <div className="flex w-full flex-col gap-2">
          <button className=" rounded-lg bg-purple-700 py-1 text-xl font-semibold">
            Vote
          </button>
        </div>
      </div>
    </div>
  );
}
