import React from "react";
import dither from "canvas-dither";
import useCanvas from "./filters/useCanvas";
import useDithering from "./filters/useDithering";

function FilterBooth({ imageSrc }) {
  const [canvas, setCanvas] = React.useState(null);
  useCanvas({ imageSrc, setCanvas });
  return canvas === null ? null : (
    <span>
      <SingleFilter canvas={canvas} dithering={dither.atkinson} />
      <SingleFilter canvas={canvas} dithering={dither.floydsteinberg} />
    </span>
  );
}

function SingleFilter({ canvas, dithering }) {
  return <img src={useDithering({ canvas, dithering })} alt={dithering.name} />;
}

export default FilterBooth;
