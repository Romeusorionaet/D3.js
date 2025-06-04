import { MarksAtlas } from "../data-world-atlas/marks-atlas";
import { max, scaleSqrt } from "d3";
import { useMemo } from "react";

const sizeValue = (d) => d["Total Number of Dead and Missing"];
const maxRadius = 15;

export const BubbleMap = ({ data, filteredData, worldAtlas }) => {
  const sizeScale = useMemo(
    () =>
      scaleSqrt()
        .domain([0, max(data, sizeValue)])
        .range([0, maxRadius]),
    [data]
  );

  return (
    <MarksAtlas
      worldAtlas={worldAtlas}
      data={filteredData}
      sizeScale={sizeScale}
      sizeValue={sizeValue}
    />
  );
};
