import { DateHistogram } from "./date-histogram";
import { BubbleMap } from "./bubble-map";

const width = 960;
const height = 500;
const dateHistogramSize = 0.35;
const extraHeightBelowMap = 50;

export function DataMissingMigrantsOnMap() {
  return (
    <svg width={width} height={height + extraHeightBelowMap}>
      <title>Missing migrants on a Map</title>
      <BubbleMap />
      <g
        transform={`translate(0, ${
          height - dateHistogramSize * height + extraHeightBelowMap
        })`}
      >
        <DateHistogram height={dateHistogramSize * height} width={width} />
      </g>
    </svg>
  );
}
