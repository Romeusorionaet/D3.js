import { useDataMigrantsOnMap } from "../../../hooks/use-data-migrants-on-map";
import { useDataWorldAtlas } from "../../../hooks/use-data-world-atlas";
import { DateHistogram } from "./date-histogram";
import { BubbleMap } from "./bubble-map";
import { useState } from "react";

const width = 960;
const height = 500;
const dateHistogramSize = 0.35;
const extraHeightBelowMap = 50;
const xValue = (d) => d["Incident Date"];

export function DataMissingMigrantsOnMap() {
  const [brushExtent, setBrushExtent] = useState();
  const { data: worldAtlas } = useDataWorldAtlas();
  const { data } = useDataMigrantsOnMap();

  if (!worldAtlas || !data) {
    return <pre>loading...</pre>;
  }

  const filteredData = brushExtent
    ? data.filter((d) => {
        const date = xValue(d);
        return date > brushExtent[0] && date < brushExtent[1];
      })
    : data;

  return (
    <svg width={width} height={height + extraHeightBelowMap}>
      <title>Missing migrants on a Map</title>
      <BubbleMap
        data={data}
        filteredData={filteredData}
        worldAtlas={worldAtlas}
      />
      <g
        transform={`translate(0, ${
          height - dateHistogramSize * height + extraHeightBelowMap
        })`}
      >
        <DateHistogram
          data={data}
          height={dateHistogramSize * height}
          width={width}
          xValue={xValue}
          setBrushExtent={setBrushExtent}
        />
      </g>
    </svg>
  );
}
