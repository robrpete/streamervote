import Image from "next/image";

export default function SidePanel() {
  return (
    <div className="flex w-full items-center justify-between border-b-[1px] px-2 py-2 md:w-16 md:flex-col md:justify-start md:border-b-0 md:border-r-[1px]">
      <div className="rounded-full">
        <Image src="/teccy.png" height={30} width={30} alt="ava" />
      </div>
      <div className="h-2"></div>
      <div className="rounded-full">
        <Image src="/teccy.png" height={30} width={30} alt="ava" />
      </div>
      <div className="h-2"></div>
      <div className="rounded-full">
        <Image src="/teccy.png" height={30} width={30} alt="ava" />
      </div>
      <div className="h-2"></div>
      <div className="rounded-full">
        <Image src="/teccy.png" height={30} width={30} alt="ava" />
      </div>
    </div>
  );
}
