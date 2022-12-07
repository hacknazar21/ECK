import React, { useEffect, useState } from "react";

function Marker({ marker, container }) {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  function degrees_pixels(lat, lng, mapWidth, mapHeight) {
    const x = (lng + 165) * (mapWidth / 360);
    const latRad = (lat * Math.PI) / 180;
    const mercN = Math.log(Math.tan(Math.PI / 4 + latRad / 2));
    const y = mapHeight / 2.14 - (mapWidth * mercN) / (2 * Math.PI);
    return {
      x,
      y,
    };
  }
  useEffect(() => {
    if (container) {
      const { x, y } = degrees_pixels(
        marker.latitude,
        marker.longitude,
        container.clientWidth - 20,
        container.clientHeight
      );
      console.log(x, y);
      setCoords({ x, y });
    }
  }, [container]);
  useEffect(() => {
    if (marker && container) {
      window.addEventListener("resize", () => {
        const { x, y } = degrees_pixels(
          marker.latitude,
          marker.longitude,
          container.clientWidth,
          container.clientHeight
        );
        setCoords({ x, y });
      });
    }
  }, []);
  return (
    <div
      style={{
        transform: `translate(${coords.x - 4.5}px, ${coords.y - 4.5}px)`,
      }}
      className="marker"
    >
      <button
        onClick={() => {
          setOpen((prevState) => !prevState);
        }}
        className="marker__tooltip"
      ></button>
      {open && (
        <div className="marker__info">
          <div
            onClick={() => {
              setOpen(false);
            }}
            className="marker__info-close"
          ></div>
          <h2 className="marker__info-header">
            {marker.country_translated}, {marker.region_translated},{" "}
            {marker.city_translated}
          </h2>
          <div className="marker__info-projects">
            всего проектов: <span>{marker.count}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Marker;
