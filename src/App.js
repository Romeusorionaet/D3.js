import { SmilingFace } from "./components/smiling-face";
import { range } from "d3";
function App() {
  const width = 480;
  const height = 250;
  const centerX = width / 2;
  const centerY = height / 2;
  const strokeWidth = 10;
  const eyeOffsetX = 45;
  const eyeOffsetY = 50;
  const eyeBallOffsetX = 45;
  const eyeBallOffsetY = 45;
  const eyeRadius = 25;
  const mouthWidth = 70;
  const mouthRadius = 40;
  const randomValue = Math.random() * 10;

  return (
    <main>
      <h1>Data Visualization with D3.js, Javascript, React - Full Course</h1>

      <h2>First step to understand the basics.</h2>
      <p>A smiling face SVG was created.</p>

      {range(2).map((_, index) => (
        <SmilingFace
          key={index}
          width={width}
          height={height}
          centerX={centerX}
          centerY={centerY}
          strokeWidth={strokeWidth}
          eyeOffsetX={eyeOffsetX + randomValue}
          eyeOffsetY={eyeOffsetY + randomValue}
          eyeBallOffsetX={eyeBallOffsetX}
          eyeBallOffsetY={eyeBallOffsetY}
          eyeRadius={eyeRadius + randomValue}
          mouthWidth={mouthWidth + randomValue}
          mouthRadius={mouthRadius}
        />
      ))}
    </main>
  );
}

export default App;
