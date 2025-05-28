import * as d3 from "d3";
import { arc, pie } from "d3";
import { useState, useEffect } from "react";

const width = 960;
const height = 500;
const centerX = 480;
const centerY = 250;

const pieArc = arc().innerRadius(0).outerRadius(width);

export function DataWithD3() {
  const [data, setData] = useState();

  useEffect(() => {
    d3.csv(
      "https://gist.githubusercontent.com/Romeusorionaet/87961a8fc68b4208a4b0859795c9092e/raw/0394b699eddebd93e13a2be7299d988517048ae0/cssNamedColors.csv"
    ).then((data) => {
      setData(data);
    });
  }, []);

  if (!data) {
    return <pre>"loading..."</pre>;
  }

  const colorPie = pie().value(1)(data);

  return (
    <svg width={width} height={height}>
      <title>CSS colors</title>
      <g transform={`translate(${centerX},${centerY})`}>
        {colorPie.map((d) => (
          <path key={d} fill={d.data["black"]} d={pieArc(d)} />
        ))}
      </g>
    </svg>
  );
}
