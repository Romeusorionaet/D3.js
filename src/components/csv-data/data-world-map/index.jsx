import { useDataWorldMap } from "../../../hooks/use-data-world-map";
import { MarksMap } from "./marks-map";

const width = 960;
const height = 500;

export function DataWorldMap() {
  const { data } = useDataWorldMap();

  if (!data) {
    return <pre>"loading..."</pre>;
  }

  return (
    <svg width={width} height={height}>
      <title>World Map</title>
      <MarksMap data={data} />
    </svg>
  );
}
