import { useDataMigrantsOnMap } from "../../../hooks/use-data-migrants-on-map";
import { useDataWorldAtlas } from "../../../hooks/use-data-world-atlas";
import { MarksMigrantsOnMap } from "./marks-migrants-on-map";
import { max, scaleSqrt } from "d3";

const width = 960;
const height = 500;

export function DataMissingMigrantsOnMap() {
  const { data: worldAtlas } = useDataWorldAtlas();
  const { data } = useDataMigrantsOnMap();

  if (!worldAtlas || !data) {
    return <pre>loading...</pre>;
  }

  const sizeValue = (d) => d["Total Number of Dead and Missing"];
  const maxRadius = 15;

  const sizeScale = scaleSqrt()
    .domain([0, max(data, sizeValue)])
    .range([0, maxRadius]);

  return (
    <svg width={width} height={height}>
      <title>Missing migrants on a Map</title>
      <MarksMigrantsOnMap
        worldAtlas={worldAtlas}
        data={data}
        sizeScale={sizeScale}
        sizeValue={sizeValue}
      />
    </svg>
  );
}
