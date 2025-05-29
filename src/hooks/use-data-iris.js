import { useState, useEffect } from "react";
import * as d3 from "d3";

export function useDataIris() {
  const [data, setData] = useState();

  useEffect(() => {
    const row = (d) => {
      d.sepal_length = +d.sepal_length;
      d.sepal_width = +d.sepal_width;
      d.petal_length = +d.petal_length;
      d.petal_width = +d.petal_width;

      return d;
    };

    d3.csv(
      "https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/0e7a9b0a5d22642a06d3d5b9bcbad9890c8ee534/iris.csv",
      row
    ).then((data) => {
      setData(data);
    });
  }, []);

  return { data };
}
