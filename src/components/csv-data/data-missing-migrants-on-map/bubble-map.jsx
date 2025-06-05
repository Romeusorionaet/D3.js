import { MarksBubbleMap } from "./marks-bubble-map";
import { max, scaleSqrt } from "d3";
import { useMemo } from "react";
import { useMissingMigrantsContext } from "../../../contexts/missing-migrants-context-provider";

const sizeValue = (d) => d["Total Number of Dead and Missing"];
const maxRadius = 15;

export const BubbleMap = () => {
  const { filteredData, data, worldAtlas } = useMissingMigrantsContext();

  const sizeScale = useMemo(
    () =>
      scaleSqrt()
        .domain([0, max(data, sizeValue)])
        .range([0, maxRadius]),
    [data]
  );

  return (
    <MarksBubbleMap
      worldAtlas={worldAtlas}
      data={filteredData}
      sizeScale={sizeScale}
      sizeValue={sizeValue}
    />
  );
};
