import { useState, useEffect } from "react";
import * as d3 from "d3";

const row = (d) => {
  d.coords = d["Coordinates"]
    .split(",")
    .map((d) => +d)
    .reverse();
  d["Total Number of Dead and Missing"] =
    +d["Total Number of Dead and Missing"];

  return d;
};

export function useDataMigrantsOnMap() {
  const [data, setData] = useState();

  useEffect(() => {
    d3.dsv(
      ";",
      "https://gist.githubusercontent.com/Romeusorionaet/8904c9fca46f07ce4db9db46ed41fbd5/raw/b9d42320fe9396445bca382d01d56f971114d4f4/missing_migrants.csv",
      row
    ).then((data) => {
      setData(data);
    });
  }, []);

  console.log(data);

  return { data };
}
