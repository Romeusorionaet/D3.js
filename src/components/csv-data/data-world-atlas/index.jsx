import { useDataWorldAtlas } from "../../../hooks/use-data-world-atlas";
import { useDataCities } from "../../../hooks/use-data-cities";
import { MarksAtlas } from "./marks-atlas";

const width = 960;
const height = 500;

export function DataWorldAtlas() {
  const { data: worldAtlas } = useDataWorldAtlas();
  const { data: cities } = useDataCities();

  if (!worldAtlas || !cities) {
    return <pre>loading...</pre>;
  }

  return (
    <svg width={width} height={height}>
      <title>World Map</title>
      <MarksAtlas worldAtlas={worldAtlas} cities={cities} />
    </svg>
  );
}
