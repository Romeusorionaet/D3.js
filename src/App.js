import { SmilingFaceValues } from "./constants/smiling-face-values";
import { LoadingData } from "./components/csv-data/loading-data";
import { CircleMoving } from "./components/circle-moving";
import { SmilingFace } from "./components/smiling-face";
import { range } from "d3";

export default function App() {
  return (
    <main>
      <h1>Data Visualization with D3.js, Javascript, React - Full Course</h1>

      <h2>1. Understand the basics.</h2>
      <p>A smiling face SVG was created.</p>

      {range(2).map((_, index) => (
        <SmilingFace
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={index}
          width={SmilingFaceValues.width}
          height={SmilingFaceValues.height}
          centerX={SmilingFaceValues.centerX}
          centerY={SmilingFaceValues.centerY}
          strokeWidth={SmilingFaceValues.strokeWidth}
          eyeOffsetY={SmilingFaceValues.eyeOffsetY + Math.random() * 8}
          eyeOffsetX={SmilingFaceValues.eyeOffsetX + Math.random() * 8}
          eyeBallOffsetX={SmilingFaceValues.eyeBallOffsetX}
          eyeBallOffsetY={SmilingFaceValues.eyeBallOffsetY}
          eyeRadius={SmilingFaceValues.eyeRadius + Math.random() * 15}
          mouthWidth={SmilingFaceValues.mouthWidth + Math.random() * 10}
          mouthRadius={SmilingFaceValues.mouthRadius}
        />
      ))}

      <h2>2. Render & Interaction.</h2>
      <p>A program that fallows your mouse with a circle.</p>

      <CircleMoving />

      <h2>3. Loading and Parsing CSV Data.</h2>
      <p>
        A program that loads in some data using 03 utilities, and uses React
        state to keep track of the data.
      </p>

      <LoadingData />
    </main>
  );
}
