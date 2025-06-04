import { geoNaturalEarth1, geoPath, geoGraticule } from "d3";

export function MarksAtlas({
  worldAtlas: { land, interiors },
  cities,
  sizeScale,
  sizeValue,
}) {
  const projection = geoNaturalEarth1();
  const path = geoPath(projection);
  const graticule = geoGraticule();

  return (
    <g className="mark-map">
      <path d={path({ type: "Sphere" })} className="sphere" />
      <path d={path(graticule())} className="graticules" />;
      {land &&
        land.features.map((feature, i) => {
          return <path key={i} d={path(feature)} className="land" />;
        })}
      <path d={path(interiors)} className="interiors" />;
      {cities &&
        cities.map((d, i) => {
          const [x, y] = projection([d.lng, d.lat]);
          return <circle key={i} cx={x} cy={y} r={sizeScale(sizeValue(d))} />;
        })}
    </g>
  );
}
