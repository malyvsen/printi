import React from "react";

function useDithering({ canvas, dithering }) {
  const ctx = canvas.getContext("2d");
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  dithering(imageData); // operates in-place
  const destinationCanvas = React.useMemo(
    () => document.createElement("canvas"),
    []
  );
  destinationCanvas.width = canvas.width;
  destinationCanvas.height = canvas.height;
  const destinationCtx = destinationCanvas.getContext("2d");
  destinationCtx.putImageData(imageData, 0, 0);
  return destinationCanvas.toDataURL();
}

export default useDithering;
