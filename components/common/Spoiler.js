import React, { RefObject, useEffect, useRef, useState } from "react";

export function Spoiler({
  spoilerClass = "",
  titleClass = "",
  contentClass = "",
  isLoaded = false,
  title,
  content,
}) {
  const [maxHeight, setMaxHeight] = useState(null);
  const [isOpen, setIsOpen] = useState(null);
  const [styleSpoiler, setStyleSpoiler] = useState({});
  const spoilerBody = useRef();
  const spoilerTitle = useRef();
  useEffect(() => {
    if (isLoaded) {
      setMaxHeight(spoilerBody.current.clientHeight);
      setStyleSpoiler({ maxHeight: 0 });
      setIsOpen(false);
    }
  }, [isLoaded]);

  useEffect(() => {
    if (isOpen !== null) {
      isOpen
        ? spoilerTitle.current.classList.add("spoiler-open")
        : spoilerTitle.current.classList.remove("spoiler-open");
      isOpen
        ? setStyleSpoiler({ maxHeight: maxHeight + 20 })
        : setStyleSpoiler({ maxHeight: 0 });
    }
  }, [isOpen]);

  const handleSpolierClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={spoilerClass}>
      <div
        ref={spoilerTitle}
        onClick={handleSpolierClick}
        className={"spoiler__title" + " " + titleClass}
      >
        <span className="spoiler__open">
          <span></span>
          <span></span>
        </span>
        {title}
      </div>
      <div
        ref={spoilerBody}
        style={styleSpoiler}
        className={"spoiler__content" + " " + contentClass}
      >
        {content}
      </div>
    </div>
  );
}

export default Spoiler;
