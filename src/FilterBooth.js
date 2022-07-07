import React from "react";
import canvasDither from "canvas-dither";

function FilterBooth({ imageSrc }) {
  const [ditheredSrc, setDitheredSrc] = React.useState(null);

  const image = React.useMemo(() => new Image(), []);
  const onSourceLoaded = React.useCallback(() => {
    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);
    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    canvasDither.atkinson(imageData); // operates in-place
    ctx.putImageData(imageData, 0, 0);
    setDitheredSrc(canvas.toDataURL());
  }, [image]);
  image.onload = onSourceLoaded;
  image.src = imageSrc;

  return ditheredSrc === null ? null : <img src={ditheredSrc} alt="" />;
}

export default FilterBooth;
