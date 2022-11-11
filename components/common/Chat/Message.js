import React from "react";

function Message({ children, isMe, icon = null, name = null }) {
  const classes = ["chat-message", "message", isMe ? "message_me" : ""];
  return (
    <div className={classes.join(" ")}>
      {!isMe ? (
        <div className="message__icon">
          <img src={icon} alt="" />
        </div>
      ) : (
        <></>
      )}
      <div className="message__item">
        {!isMe ? <div className="message__name">{name}</div> : <></>}
        {children}
        <div className="message__date">8:20 am</div>
      </div>
    </div>
  );
}

export default Message;
