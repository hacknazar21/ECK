import React, { useEffect, useRef } from "react";
import Map from "./Map";
import Marker from "./Marker";

function GeographyMap({ markers = [] }) {
  const containerRef = useRef(null);
  return (
    <div ref={containerRef} className="maps__container">
      {markers.map((marker, id) => (
        <Marker key={id} marker={marker} container={containerRef.current} />
      ))}
      <Map />
    </div>
  );
}

export default GeographyMap;
