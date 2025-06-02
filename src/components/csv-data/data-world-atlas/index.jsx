import { useDataWorldAtlas } from "../../../hooks/use-data-world-atlas";
import { useDataCities } from "../../../hooks/use-data-cities";
import { MarksAtlas } from "./marks-atlas";
import { max, scaleSqrt } from "d3";

const width = 960;
const height = 500;

export function DataWorldAtlas() {
  const { data: worldAtlas } = useDataWorldAtlas();
  const { data: cities } = useDataCities();

  if (!worldAtlas || !cities) {
    return <pre>loading...</pre>;
  }

  const sizeValue = (d) => d.population;
  const maxRadius = 15;

  const sizeScale = scaleSqrt()
    .domain([0, max(cities, sizeValue)])
    .range([0, maxRadius]);

  return (
    <svg width={width} height={height}>
      <title>World Map</title>
      <MarksAtlas
        worldAtlas={worldAtlas}
        cities={cities}
        sizeScale={sizeScale}
        sizeValue={sizeValue}
      />
    </svg>
  );
}
