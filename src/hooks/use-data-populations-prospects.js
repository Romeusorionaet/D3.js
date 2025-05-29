import { useState, useEffect } from "react";
import * as d3 from "d3";

export function useDataPopulationsProspects() {
  const [data, setData] = useState();

  useEffect(() => {
    const row = (d) => {
      d.Population = +d["2050"];
      return d;
    };

    d3.csv(
      "https://gist.githubusercontent.com/Romeusorionaet/9db54ce690a4c354c7312f1260a73ec9/raw/90a6d77ebbbe3870c46780092eec3ad2831c986f/united_nations_world-populations_prospects_2050.csv",
      row
    ).then((data) => {
      setData(data.sort((a, b) => b.Population - a.Population).slice(0, 20));
    });
  }, []);

  return { data };
}
