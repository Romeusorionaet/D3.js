import { SmilingFaceValues } from "./constants/smiling-face-values";
import { CircleMoving } from "./components/circle-moving";
import { SmilingFace } from "./components/smiling-face";
import { range } from "d3";

export default function App() {
  // const [cssColors, setCssColors] = useState();

  // useEffect(() => {
  //   const fetchNamedCss = async () => {
  //     const data = await fetch(
  //       "https://gist.githubusercontent.com/Romeusorionaet/87961a8fc68b4208a4b0859795c9092e/raw/0394b699eddebd93e13a2be7299d988517048ae0/cssNamedColors.csv"
  //     )
  //       .then((response) => response.text())
  //       .catch((err) => console.log(err));

  //     setCssColors(data);
  //   };
  //   fetchNamedCss();
  // }, []);

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
    </main>
  );
}
