import React, { useEffect, useRef, useState } from "react";

function Marker({ marker, container }) {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [classes, setClasses] = useState(["marker"]);
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
  useEffect(() => {
    console.log(Math.abs(coords.x) + 428 - window.innerWidth / 2);
    if (Math.abs(coords.x) + 214 - window.innerWidth / 2 < 0) {
      if (classes.indexOf("over-screen") === -1)
        setClasses((prevState) => [...prevState, "over-screen"]);
    } else {
      setClasses(["marker"]);
    }
  }, [coords]);
  return (
    <>
      {open && (
        <div
          onClick={() => {
            setOpen(false);
          }}
          className="marker__info-close"
        ></div>
      )}
      <div
        style={{
          transform: `translate(${coords.x - 4.5}px, ${coords.y - 4.5}px)`,
        }}
        className={classes.join(" ") + (open ? " active" : "")}
      >
        <button
          onClick={() => {
            setOpen((prevState) => !prevState);
          }}
          className="marker__tooltip"
        ></button>
        {open && (
          <div className="marker__info">
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
    </>
  );
}

export default Marker;
