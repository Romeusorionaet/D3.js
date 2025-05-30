import { useState, useEffect } from "react";
import * as d3 from "d3";

export function useDataWeekTemperature() {
  const [data, setData] = useState();

  useEffect(() => {
    const row = (d) => {
      d.temperature = +d.temperature;
      d.timestamp = new Date(d.timestamp);

      return d;
    };

    d3.csv(
      "https://raw.githubusercontent.com/manjunath5496/CSV-Datasets_3/master/week_temperature_sf.csv",
      row
    ).then((data) => {
      setData(data);
    });
  }, []);

  return { data };
}
