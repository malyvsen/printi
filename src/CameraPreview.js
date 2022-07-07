import "./CameraPreview.css";
import React from "react";
import Webcam from "react-webcam";

function CameraPreview({ setImageSrc, facingMode }) {
  const webcamRef = React.useRef(null);
  const takePicture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
  }, [setImageSrc, webcamRef]);

  return (
    <Webcam
      className="CameraPreview"
      audio={false}
      mirrored={facingMode === "user"}
      ref={webcamRef}
      screenshotFormat="image/jpeg"
      onClick={takePicture}
      videoConstraints={{ facingMode: facingMode }}
    />
  );
}

export default CameraPreview;
