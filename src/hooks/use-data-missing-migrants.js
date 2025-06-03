import { useState, useEffect } from "react";
import * as d3 from "d3";

const row = (d) => {
  d["Total Number of Dead and Missing"] =
    +d["Total Number of Dead and Missing"];
  d["Incident Date"] = new Date(d["Incident Date"]);

  return d;
};

export function useDataMissingMigrants() {
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

  return { data };
}
