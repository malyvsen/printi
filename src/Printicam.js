import "./Printicam.css";
import React from "react";
import Webcam from "react-webcam";

function Printicam({ setImageSrc }) {
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
  }, [setImageSrc, webcamRef]);

  return (
    <div>
      <Webcam
        className="Printicam"
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        onClick={capture}
      />
    </div>
  );
}

export default Printicam;
