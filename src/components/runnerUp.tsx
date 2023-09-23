import Image from "next/image";

export default function RunnerUp() {
  return (
    <div className="flex w-full flex-col items-center pt-16">
      <h2 className="pb-4 text-3xl font-bold text-purple-400 mob:text-4xl">
        Runner Ups
      </h2>
      <div className="flex w-11/12 flex-wrap justify-center gap-4">
        <div className="flex h-40 w-fit flex-col items-center gap-2 sm:border-r-2 sm:pr-8">
          <p>zackrawrr</p>
          <Image
            src="/teccy.png"
            height={80}
            width={80}
            alt="ava"
            className="rounded-full border-4"
          />
          <p>votes: 99,999</p>
          <p className="text-red-600">not live</p>
        </div>
        <div className="flex h-40 w-fit flex-col items-center gap-2 sm:border-r-2 sm:pl-8 sm:pr-8">
          <p>zackrawrr</p>
          <Image
            src="/teccy.png"
            height={80}
            width={80}
            alt="ava"
            className="rounded-full border-4"
          />
          <p>votes: 99,999</p>
          <p className="text-red-600">not live</p>
        </div>
        <div className="flex h-40 w-fit flex-col items-center gap-2 sm:border-r-2 sm:pl-8 sm:pr-8">
          <p>zackrawrr</p>
          <Image
            src="/teccy.png"
            height={80}
            width={80}
            alt="ava"
            className="rounded-full border-4"
          />
          <p>votes: 99,999</p>
          <p className="text-red-600">not live</p>
        </div>
        <div className="flex h-40 w-fit flex-col items-center gap-2 sm:pl-8">
          <p>zackrawrr</p>
          <Image
            src="/teccy.png"
            height={80}
            width={80}
            alt="ava"
            className="rounded-full border-4"
          />
          <p>votes: 99,999</p>
          <p className="text-red-600">not live</p>
        </div>
      </div>
    </div>
  );
}
