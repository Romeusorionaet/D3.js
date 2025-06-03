import { DataWorldPopulationsProspects } from "./components/csv-data/data-world-populations-prospects";
import { DataMissingMigrantsOnMap } from "./components/csv-data/data-missing-migrants-on-map";
import { DataCssColorsWithD3 } from "./components/csv-data/data-css-colors-with-d3";
import { DataWeekTemperature } from "./components/csv-data/data-week-temperature";
import { DataMissingMigrants } from "./components/csv-data/data-missing-migrants";
import { DataScatterPlot } from "./components/csv-data/data-scatter-plot";
import { DataWorldAtlas } from "./components/csv-data/data-world-atlas";
import { DataCssColors } from "./components/csv-data/data-css-colors";
import { SmilingFaceValues } from "./constants/smiling-face-values";
import { DataIris } from "./components/csv-data/data-iris";
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

      <h2>3. Rendering Data with React.</h2>
      <p>
        A program that loads in some data about CSS named colors and uses React
        to render the data.
      </p>

      <DataCssColors />

      <div style={{ marginTop: "50px" }} />

      <h2>3. Rendering Data with React + D3.</h2>
      <DataCssColorsWithD3 />

      <h2>Making a Bar Chart with React & D3</h2>
      <p>A program that show the United world populations prospects 2050</p>
      <DataWorldPopulationsProspects />

      <h2>Iris</h2>
      <DataIris />

      <h2>Making a line Chart of Week Temperature</h2>
      <DataWeekTemperature />

      <h2>World Map</h2>
      <p>shows the most populous cities</p>
      <DataWorldAtlas />

      <h2>Scatter Plot with Menus (Data Iris)</h2>
      <p>With React & D3</p>

      <DataScatterPlot />

      <h2>Analyzing Missing Migrants</h2>
      <p>Loading & Visualizing the Data</p>

      <DataMissingMigrants />

      <h2>Missing migrants on a Map</h2>
      <DataMissingMigrantsOnMap />
    </main>
  );
}
