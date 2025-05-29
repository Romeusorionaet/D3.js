import { format } from "d3";

export const xAxisTickFormat = (n) => format(".2s")(n).replace("G", "B");
