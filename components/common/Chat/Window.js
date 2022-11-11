import React from "react";

function Window(props, ref) {
  return (
    <div ref={ref} className="chat-window">
      {props.children}
    </div>
  );
}

export default React.forwardRef(Window);
