import React from "react";

function useCanvas({ imageSrc, setCanvas }) {
  const image = React.useMemo(() => new Image(), []);
  image.onload = React.useCallback(() => {
    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);
    setCanvas(canvas);
  }, [setCanvas, image]);
  image.src = imageSrc;
}

export default useCanvas;
