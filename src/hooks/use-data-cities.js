import { useState, useEffect } from "react";
import { csv } from "d3";

const row = (d) => {
  d.lat = +d.lat;
  d.lng = +d.lng;

  return d;
};

export function useDataCities() {
  const [data, setData] = useState();

  useEffect(() => {
    csv(
      "https://gist.githubusercontent.com/Romeusorionaet/1d925816cdac38fd2e0218f2a11beb21/raw/0a49bc87f173a5b596597c009dab6850ef4736a5/worldcities_clean.csv",
      row
    ).then((data) => {
      setData(data);
    });
  }, []);

  return { data };
}
