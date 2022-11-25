import React, { useContext, useEffect, useState } from "react";
import Avatar from "../../../../src/img/avatars/01.png";
import Spoiler from "../../Spoiler";
import useHttp from "../../../../hooks/hooks.http";
import { AuthContext } from "../../../../context/AuthContext";
import ActionButtons from "./ActionButtons";

function NewContestJoinRequest({ notification, updateNotifications }) {
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
          <h2 className="notification-item__content-title">
            {notification.project?.title}
          </h2>
          <div className="notification-item__content-text">
            <p>{notification.project?.description}</p>
          </div>
          {notification.project?.participants?.length > 0 && (
            <div className="notification-item__content-members notification-item-members">
              <div className="notification-item-members__title profile-members__title">
                Всего участников
              </div>
              <div className="notification-item-members__box profile-members__box">
                <div className="notification-item-members__icons profile-members__icons">
                  {notification.project?.participants?.map(
                    (participant, id) => {
                      if (id < 5)
                        return (
                          <div
                            key={participant.id}
                            className="notification-item-members__icon profile-members__icon"
                          >
                            <img
                              src={
                                participant.user?.avatar ||
                                participant.team?.image
                              }
                              alt=""
                            />
                          </div>
                        );
                      else return null;
                    }
                  )}
                </div>
                <div className="notification-item-members__number profile-members__number">
                  <span>
                    {notification.project?.participants_count} участников
                  </span>
                </div>
              </div>
            </div>
          )}
          {!notification.is_visited && (
            <ActionButtons
              notification={notification}
              updateNotifications={updateNotifications}
            />
          )}
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

export default NewContestJoinRequest;
