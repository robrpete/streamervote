import Image from "next/image";
import { useElementSize, useMouse } from "@mantine/hooks";
import { useState } from "react";

export default function RunnerUp() {
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
    <div className="flex w-full flex-col items-center pt-16">
      <h2 className="pb-4 text-3xl font-bold text-purple-400 mob:text-4xl">
        Runner Ups
      </h2>
    </div>
  );
}
