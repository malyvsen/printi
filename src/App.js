import "./App.css";
import React from "react";
import FilterBooth from "./FilterBooth";
import CameraPreview from "./CameraPreview";

function App() {
  const [imageSrc, setImageSrc] = React.useState(null);
  return (
    <div className="App">
      <h1 className="App-logo">printi</h1>
      <CameraPreview setImageSrc={setImageSrc} facingMode="user" />
      {imageSrc === null ? null : <FilterBooth imageSrc={imageSrc} />}
    </div>
  );
}

export default App;
