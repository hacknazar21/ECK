import React from "react";

function Message({
  isFirst = false,
  children,
  isMe,
  icon = null,
  name = null,
  datetime = new Date(),
  attachments = [],
}) {
  const classes = ["chat-message", "message", isMe ? "message_me" : ""];
  return (
    <div data-first={isFirst} className={classes.join(" ")}>
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
        {attachments.length !== 0 && (
          <div className="message__attachments">
            {attachments.map((attachment) => (
              <div className="message__attachment">
                <a href={attachment.file} className="message__attachment-link">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 7.8225C17.4909 7.74212 17.4733 7.66293 17.4475 7.58625V7.5075C17.4054 7.41753 17.3493 7.33483 17.2812 7.2625L12.0312 2.0125C11.9589 1.94444 11.8762 1.88832 11.7863 1.84625H11.7075L11.4275 1.75H6.125C5.42881 1.75 4.76113 2.02656 4.26884 2.51884C3.77656 3.01113 3.5 3.67881 3.5 4.375V16.625C3.5 17.3212 3.77656 17.9889 4.26884 18.4812C4.76113 18.9734 5.42881 19.25 6.125 19.25H14.875C15.5712 19.25 16.2389 18.9734 16.7312 18.4812C17.2234 17.9889 17.5 17.3212 17.5 16.625V7.875C17.5 7.875 17.5 7.875 17.5 7.8225ZM12.25 4.73375L14.5163 7H12.25V4.73375ZM15.75 16.625C15.75 16.8571 15.6578 17.0796 15.4937 17.2437C15.3296 17.4078 15.1071 17.5 14.875 17.5H6.125C5.89294 17.5 5.67038 17.4078 5.50628 17.2437C5.34219 17.0796 5.25 16.8571 5.25 16.625V4.375C5.25 4.14294 5.34219 3.92038 5.50628 3.75628C5.67038 3.59219 5.89294 3.5 6.125 3.5H10.5V7.875C10.5 8.10706 10.5922 8.32962 10.7563 8.49372C10.9204 8.65781 11.1429 8.75 11.375 8.75H15.75V16.625Z"
                      fill="#1664AC"
                    />
                  </svg>
                  <span>{attachment.uploaded_name}</span>
                </a>
              </div>
            ))}
          </div>
        )}
        <div className="message__date">
          {datetime.getHours()}:{datetime.getMinutes()}
        </div>
      </div>
    </div>
  );
}

export default Message;
