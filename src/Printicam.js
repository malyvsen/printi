import "./Printicam.css";
import React from "react";
import useInterval from "use-interval";
import Webcam from "react-webcam";

function Printicam({ setImageSrc }) {
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
  }, [setImageSrc, webcamRef]);
  useInterval(capture, 40);

  return (
    <div>
      <Webcam
        className="Printicam"
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
    </div>
  );
}

export default Printicam;
