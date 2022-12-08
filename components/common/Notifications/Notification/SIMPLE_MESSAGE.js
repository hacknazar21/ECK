import React, { useEffect, useState } from "react";
import Spoiler from "../../Spoiler";
import ActionButtons from "./ActionButtons";

function SimpleMessage({ notification, updateNotifications }) {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  });

  return (
    <Spoiler
      titleClass={"notification-item__open-spoiler"}
      spoilerClass={"notification-item__spoiler"}
      isLoaded={isLoaded}
      content={
        <div className="notification-item__content">
          <div className="notification-item__content-text">
            <p dangerouslySetInnerHTML={{ __html: notification.message }}></p>
          </div>
        </div>
      }
      title={
        <div className="notification-item__header">
          <time className="notification-item__time">
            <span>
              {new Date(notification.created_at).getDate().toString().length ===
                1 && "0"}
              {new Date(notification.created_at).getDate()}/
              {(new Date(notification.created_at).getMonth() + 1).toString()
                .length === 1 && "0"}
              {new Date(notification.created_at).getMonth() + 1}/
              {new Date(notification.created_at).getFullYear()}
            </span>
            <span>|</span>
            <span>
              {new Date(notification.created_at).getHours().toString()
                .length === 1 && "0"}
              {new Date(notification.created_at).getHours()}:
              {new Date(notification.created_at).getMinutes().toString()
                .length === 1 && "0"}
              {new Date(notification.created_at).getMinutes()}
            </span>
          </time>
          <h3
            dangerouslySetInnerHTML={{ __html: notification.message }}
            className="notification-item__title"
          ></h3>
        </div>
      }
    />
  );
}

export default SimpleMessage;
