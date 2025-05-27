import * as d3 from "d3";
import { useState, useEffect } from "react";

export function LoadingData() {
  const [data, setData] = useState();

  const message = (data) => {
    let message = "";
    message += `${Math.round(d3.csvFormat(data).length / 1024)} kb\n`;
    message += `${data.length} rows\n`;
    message += `${data.columns.length} columns`;
    return message;
  };

  useEffect(() => {
    d3.csv(
      "https://gist.githubusercontent.com/Romeusorionaet/87961a8fc68b4208a4b0859795c9092e/raw/0394b699eddebd93e13a2be7299d988517048ae0/cssNamedColors.csv"
    ).then((data) => {
      setData(data);
    });
  }, []);

  return <div>data is {data ? message(data) : "loading"}</div>;
}
