import * as d3 from "d3";
import { useState, useEffect } from "react";

export function LoadingData() {
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

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2px",
        justifyContent: "center",
        height: "400px",
        overflow: "auto",
      }}
    >
      {data.map((d, i) => (
        <div
          key={i}
          style={{
            backgroundColor: d["black"],
            width: "150px",
            height: "100px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "white",
            textShadow: "0px 0px 10px black",
          }}
        >
          <p>{d["#000000"]}</p>
          <p>{d["black"]}</p>
        </div>
      ))}
    </div>
  );
}
