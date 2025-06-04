import { geoNaturalEarth1, geoPath, geoGraticule } from "d3";
import { useMemo } from "react";

export function MarksAtlas({
  worldAtlas: { land, interiors },
  data,
  sizeScale,
  sizeValue,
}) {
  const projection = geoNaturalEarth1();
  const path = geoPath(projection);
  const graticule = geoGraticule();

  return (
    <g className="mark-map">
      {useMemo(
        () => (
          <>
            <path d={path({ type: "Sphere" })} className="sphere" />
            <path d={path(graticule())} className="graticules" />;
            {land &&
              land.features.map((feature, i) => {
                return <path key={i} d={path(feature)} className="land" />;
              })}
            <path d={path(interiors)} className="interiors" />;
          </>
        ),
        [path, graticule, interiors, land]
      )}

      {data.map((d, i) => {
        const [x, y] = projection(d.coords);
        return <circle key={i} cx={x} cy={y} r={sizeScale(sizeValue(d))} />;
      })}
    </g>
  );
}
