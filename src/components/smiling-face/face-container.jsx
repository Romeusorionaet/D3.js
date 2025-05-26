export function FaceContainer({ children, width, height, centerX, centerY }) {
  return (
    <svg width={width} height={height}>
      <title>face</title>

      <g transform={`translate(${centerX},${centerY})`}>{children}</g>
    </svg>
  );
}
