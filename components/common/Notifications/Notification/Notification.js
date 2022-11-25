import React, { useContext, useEffect, useState } from "react";
import Spoiler from "../../Spoiler";
import Avatar from "../../../../src/img/avatars/01.png";
import NewContestJoinRequest from "./NEW_CONTEST_JOIN_REQUEST";
import NewTeamInvite from "./NEW_TEAM_INVITE";
import useHttp from "../../../../hooks/hooks.http";
import { AuthContext } from "../../../../context/AuthContext";
function Notification({ notification, updateNotifications }) {
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
        "notification__item notification-item" +
        (!notification.is_viewed ? " notification-item_important" : "")
      }
    >
      {notification.notification_type === "NEW_CONTEST_JOIN_REQUEST" && (
        <NewContestJoinRequest
          updateNotifications={updateNotifications}
          notification={notification}
        />
      )}
      {notification.notification_type === "NEW_TEAM_INVITE" && (
        <NewTeamInvite
          updateNotifications={updateNotifications}
          notification={notification}
        />
      )}
    </article>
  );
}

export default Notification;
