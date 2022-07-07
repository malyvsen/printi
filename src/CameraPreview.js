import "./CameraPreview.css";
import React from "react";
import Webcam from "react-webcam";

function CameraPreview({ setImageSrc }) {
  const [facingMode, setFacingMode] = React.useState("user");
  const flip = React.useCallback(() => {
    if (facingMode === "user") {
      setFacingMode("environment");
    } else {
      setFacingMode("user");
    }
  }, [facingMode, setFacingMode]);

  const webcamRef = React.useRef(null);
  const takePicture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
  }, [setImageSrc, webcamRef]);

  return (
    <>
      <Webcam
        className="CameraPreview"
        audio={false}
        mirrored={facingMode === "user"}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        onClick={takePicture}
        videoConstraints={{ facingMode: facingMode }}
      />
      <button onClick={flip}>Flip</button>
    </>
  );
}

export default CameraPreview;
