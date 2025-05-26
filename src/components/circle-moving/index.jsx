import { useState, useCallback } from "react";

export function CircleMoving() {
  const width = 480;
  const height = 250;
  const initialPosition = {
    x: width / 2,
    y: height / 2,
  };

  const [mousePosition, setMousePosition] = useState(initialPosition);

  const circleRadius = 30;

  const handleMouseMove = useCallback((event) => {
    const svg = event.currentTarget;
    const rect = svg.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setMousePosition({ x, y });
  }, []);

  return (
    <svg
      width={width}
      height={height}
      onMouseMove={handleMouseMove}
      style={{ border: "1px, red, solid" }}
    >
      <title>circle moving</title>
      <circle cx={mousePosition.x} cy={mousePosition.y} r={circleRadius} />
    </svg>
  );
}
