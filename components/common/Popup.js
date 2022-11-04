import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";

function Popup({ active, setActive, children }) {
  const nodeRef = useRef(null);

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
        <div
          className="modal__content"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {children}
          <button
            onClick={() => {
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
