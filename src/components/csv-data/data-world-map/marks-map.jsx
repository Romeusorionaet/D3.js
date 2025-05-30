import { geoNaturalEarth1, geoPath, geoGraticule } from "d3";

export function MarksMap({ data: { land, interiors } }) {
  const projection = geoNaturalEarth1();
  const path = geoPath(projection);
  const graticule = geoGraticule();

  return (
    <g className="mark-map">
      <path d={path({ type: "Sphere" })} className="sphere" />
      <path d={path(graticule())} className="graticules" />;
      {land.features.map((feature, i) => {
        return <path key={i} d={path(feature)} className="land" />;
      })}
      <path d={path(interiors)} className="interiors" />;
    </g>
  );
}
