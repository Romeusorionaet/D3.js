import { arc } from "d3";

function App() {
  const width = 960;
  const height = 500;
  const centerX = width / 2;
  const centerY = height / 2;
  const strokeWidth = 20;
  const eyeOffsetX = 90;
  const eyeOffsetY = 100;
  const eyeBallOffsetX = 90;
  const eyeBallOffsetY = 90;
  const eyeRadius = 50;
  const mouthWidth = 140;
  const mouthRadius = 80;

  const mouthArc = arc()
    .innerRadius(mouthWidth)
    .outerRadius(mouthRadius + mouthRadius)
    .startAngle(Math.PI / 2)
    .endAngle((Math.PI * 3) / 2);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX},${centerY})`}>
        <title>face</title>
        <circle
          r={centerY - strokeWidth / 2}
          fill="yellow"
          stroke="black"
          strokeWidth={strokeWidth}
        />
        <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
        <circle cx={eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
        <circle
          cx={-eyeBallOffsetX}
          cy={-eyeOffsetY}
          r={eyeRadius / 2}
          fill="white"
        />
        <circle
          cx={eyeBallOffsetY}
          cy={-eyeOffsetY}
          r={eyeRadius / 2}
          fill="white"
        />

        <path d={mouthArc()} />
      </g>
    </svg>
  );
}

export default App;
