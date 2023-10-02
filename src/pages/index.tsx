import TopStreamer from "~/components/topStreamer";
import RunnerUp from "~/components/runnerUp";
import { useElementSize, useMouse } from "@mantine/hooks";
import { useState } from "react";
// import { api } from "~/utils/api";

export default function Home() {
  // const { data } = api.stream.hello.useQuery();

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

  // if (!data) return <div>no data</div>;
  return (
    <>
      <h2 className="inline-block bg-gradient-to-b from-purple-700 to-white bg-clip-text pb-4 text-4xl font-bold text-transparent mob:text-5xl">
        Top Streamer
      </h2>
      <div>
        <div
          ref={cardEl}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative z-10 h-fit w-fit overflow-hidden rounded-lg border-[1px] border-white/20 bg-black shadow-md shadow-white/20"
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
      </div>
      <RunnerUp />
    </>
  );
}
