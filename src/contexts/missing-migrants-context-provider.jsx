import { useDataMigrantsOnMap } from "../hooks/use-data-migrants-on-map";
import { useDataWorldAtlas } from "../hooks/use-data-world-atlas";
import { createContext, useContext, useState } from "react";

const xValue = (d) => d["Incident Date"];

const MissingMigrantsContext = createContext();

export function MissingMigrantsContextProvider({ children }) {
  const [brushExtent, setBrushExtent] = useState();

  const { data: worldAtlas } = useDataWorldAtlas();
  const { data } = useDataMigrantsOnMap();

  if (!worldAtlas || !data) {
    return <pre>loading...</pre>;
  }

  const filteredData = brushExtent
    ? data.filter((d) => {
        const date = xValue(d);
        return date > brushExtent[0] && date < brushExtent[1];
      })
    : data;

  return (
    <MissingMigrantsContext.Provider
      value={{
        setBrushExtent,
        xValue,
        filteredData,
        brushExtent,
        worldAtlas,
        data,
      }}
    >
      {children}
    </MissingMigrantsContext.Provider>
  );
}

export function useMissingMigrantsContext() {
  return useContext(MissingMigrantsContext);
}
