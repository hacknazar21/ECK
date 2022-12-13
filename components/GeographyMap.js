import React, { useEffect, useRef } from "react";
import Map from "./Map";
import Marker from "./Marker";

function GeographyMap({ markers = [] }) {
  const containerRef = useRef(null);
  return (
    <div className="maps__container">
      {markers.map((marker, id) => (
        <Marker key={id} marker={marker} container={containerRef.current} />
      ))}
      <Map ref={containerRef} />
    </div>
  );
}

export default GeographyMap;
