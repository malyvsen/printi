import "./CameraPreview.css";
import React from "react";
import { MdOutlineFlipCameraIos } from "react-icons/md";

function CameraControls({ facingMode, setFacingMode }) {
  const flip = React.useCallback(() => {
    if (facingMode === "user") {
      setFacingMode("environment");
    } else {
      setFacingMode("user");
    }
  }, [facingMode, setFacingMode]);

  return <MdOutlineFlipCameraIos className="CameraControls" onClick={flip} />;
}

export default CameraControls;
