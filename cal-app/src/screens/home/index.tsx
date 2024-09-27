import { useRef, useState } from "react";

export default function Home() {
  const canvas = useRef<HTMLCanvasElement>(null);

  const [isDrawaing, setIsDrwaing] = useState(false);

  return (
    <canvas
      ref={canvas}
      id="canvas"
      className="absolute top-0 left-0 w-full h-full"
    />
  );
}
