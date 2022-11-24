import React, { useContext, useEffect, useState } from "react";
import Spoiler from "../../Spoiler";
import Avatar from "../../../../src/img/avatars/01.png";
import NewContestJoinRequest from "./NEW_CONTEST_JOIN_REQUEST";
import NewTeamInvite from "./NEW_TEAM_INVITE";
import useHttp from "../../../../hooks/hooks.http";
import { AuthContext } from "../../../../context/AuthContext";
import ActionButtons from "./ActionButtons";
function NotificationWindow({ notification, updateNotifications }) {
  const { request } = useHttp();
  const { token } = useContext(AuthContext);

  async function viewClickHandler() {
    try {
      const data = await request(
        `/api/notifications/${this.id}/mark_viewed/`,
        "POST",
        {},
        {
          Authorization: `Bearer ${token}`,
        }
      );
      console.log(data);
      updateNotifications();
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <article
      onClick={
        !notification.is_viewed
          ? viewClickHandler.bind({ id: notification.id })
          : () => {}
      }
      className={
        "notifications-window__notification window-notification " +
        (!notification.is_viewed
          ? "notifications-window__notification_important"
          : "notifications-window__notification_late")
      }
    >
      <div className="window-notification__icon">
        <img src={Avatar.src} alt="" />
      </div>
      <div className="window-notification__info window-notification-info">
        <time className="window-notification-info__date">
          <span>
            {new Date(notification.update_at)
              .toISOString()
              .split("T")[0]
              .replaceAll("-", "/")}
          </span>
          <span>|</span>
          <span>
            {new Date(notification.update_at)
              .toISOString()
              .split("T")[1]
              .split(":")[0] +
              ":" +
              new Date(notification.update_at)
                .toISOString()
                .split("T")[1]
                .split(":")[1]}
          </span>
        </time>
        <h3
          dangerouslySetInnerHTML={{ __html: notification.message }}
          className="window-notification-info__title"
        ></h3>
        {!notification.is_visited && (
          <ActionButtons
            notification={notification}
            updateNotifications={updateNotifications}
          />
        )}
      </div>
    </article>
  );
}

export default NotificationWindow;
