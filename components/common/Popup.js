import React, { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

function Popup({ active, setActive, children, buttons = null }) {
  const nodeRef = useRef(null);
  useEffect(() => {
    if (active) {
      document.documentElement.classList.add("lock");
    } else {
      document.documentElement.classList.remove("lock");
    }
  }, [active]);
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={active}
      timeout={300}
      classNames="modal"
      unmountOnExit
    >
      <div
        className={"modal"}
        onClick={() => {
          setActive(false);
        }}
        ref={nodeRef}
      >
        {buttons}
        <div
          className="modal__content"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {children}
          <button
            onClick={(event) => {
              event.preventDefault();
              setActive(false);
            }}
            className="modal__close"
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </CSSTransition>
  );
}

export default Popup;
