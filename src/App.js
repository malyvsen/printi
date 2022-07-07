import "./App.css";
import React from "react";
import FilterBooth from "./FilterBooth";
import CameraControls from "./CameraControls";
import CameraPreview from "./CameraPreview";

function App() {
  const [facingMode, setFacingMode] = React.useState("environment");
  const [imageSrc, setImageSrc] = React.useState(null);
  return (
    <div className="App">
      <h1 className="App-logo">printi</h1>
      <CameraControls facingMode={facingMode} setFacingMode={setFacingMode} />
      <CameraPreview setImageSrc={setImageSrc} facingMode={facingMode} />
      {imageSrc === null ? null : <FilterBooth imageSrc={imageSrc} />}
    </div>
  );
}

export default App;
