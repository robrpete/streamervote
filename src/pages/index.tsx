import Head from "next/head";
import Nav from "~/components/nav";
import SidePanel from "~/components/sidePanel";
import TopStreamer from "~/components/topStreamer";
import RunnerUp from "~/components/runnerUp";
import { useElementSize, useMouse } from "@mantine/hooks";
import { useState } from "react";
// import { api } from "~/utils/api";

export default function Home() {
  // const { data } = api.stream.hello.useQuery();
  // if (!data) return <div>no data</div>;
  const { ref: circleEl, width, height } = useElementSize();
  const { ref: cardEl, x, y } = useMouse();

  const [position, setPosition] = useState({ left: -100, top: -100 });
  const [opacity, setOpacity] = useState(0);

  function handleMouseMove() {
    setOpacity(1);
    setPosition({ left: x - width / 2, top: y - height / 2 });
  }
  function handleMouseLeave() {
    setOpacity(0);
  }

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center overflow-auto bg-gradient-to-b from-black to-[#18181B] [&::-webkit-scrollbar]:hidden">
        <Nav />
        <div className="relative z-10 flex h-[calc(100vh-48px)] w-full flex-col overflow-hidden text-white md:flex-row">
          <SidePanel />
          <div className="absolute -z-10 hidden h-40 w-40 scale-[1.5] rounded-full bg-purple-700 blur-3xl transition-opacity duration-300 sm:block"></div>
          <div className="flex w-full flex-col items-center text-center md:pt-2">
            <h2 className="py-4 text-3xl font-bold mob:pt-2 mob:text-4xl">
              Top Streamer
            </h2>
            <div
              ref={cardEl}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative z-10 h-fit overflow-hidden rounded-lg border-[1px] border-white/20"
            >
              <div
                ref={circleEl}
                style={{
                  left: position.left,
                  top: position.top,
                  opacity: opacity,
                }}
                className="absolute -z-10 hidden h-20 w-20 scale-[1.2] bg-[#eab308] blur-3xl transition-opacity duration-300 sm:block"
              ></div>
              <TopStreamer />
            </div>
            <RunnerUp />
          </div>
        </div>
      </main>
    </>
  );
}
