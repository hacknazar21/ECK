import React, { useContext } from "react";
import SimpleMessage from "./SIMPLE_MESSAGE";
import NewContestJoinRequest from "./NEW_CONTEST_JOIN_REQUEST";
import NewTeamInvite from "./NEW_TEAM_INVITE";
import useHttp from "../../../../hooks/hooks.http";
import { AuthContext } from "../../../../context/AuthContext";
import ProjectInviteNew from "./PROJECT_INVITE_NEW";
const NOTIFICATION_TYPES = {
  NEW_CONTEST_JOIN_REQUEST: (updateNotifications, notification) => {
    return (
      <NewContestJoinRequest
        updateNotifications={updateNotifications}
        notification={notification}
      />
    );
  },
  NEW_TEAM_INVITE: (updateNotifications, notification) => {
    return (
      <NewTeamInvite
        updateNotifications={updateNotifications}
        notification={notification}
      />
    );
  },
  PROJECT_INVITE_NEW: (updateNotifications, notification) => {
    return (
      <ProjectInviteNew
        updateNotifications={updateNotifications}
        notification={notification}
      />
    );
  },
  CONTEST_JOIN_REQUEST_ACCEPTED: (updateNotifications, notification) => {
    return (
      <NewContestJoinRequest
        updateNotifications={updateNotifications}
        notification={notification}
      />
    );
  },
  PROJECT_INVITE_ACCEPTED: (updateNotifications, notification) => {
    return (
      <SimpleMessage
        updateNotifications={updateNotifications}
        notification={notification}
      />
    );
  },
  PROJECT_INVITE_REJECTED: (updateNotifications, notification) => {
    return (
      <NewContestJoinRequest
        updateNotifications={updateNotifications}
        notification={notification}
      />
    );
  },
  CONTEST_NEW: (updateNotifications, notification) => {
    return (
      <SimpleMessage
        updateNotifications={updateNotifications}
        notification={notification}
      />
    );
  },
  CONTEST_WON: (updateNotifications, notification) => {
    return (
      <SimpleMessage
        updateNotifications={updateNotifications}
        notification={notification}
      />
    );
  },
  CONTEST_JOIN_REQUEST_REJECTED: (updateNotifications, notification) => {
    return (
      <NewContestJoinRequest
        updateNotifications={updateNotifications}
        notification={notification}
      />
    );
  },
  DELETED_FROM_TEAM: (updateNotifications, notification) => {
    return (
      <NewContestJoinRequest
        updateNotifications={updateNotifications}
        notification={notification}
      />
    );
  },
  TEAM_INVITE_ACCEPTED: (updateNotifications, notification) => {
    return (
      <SimpleMessage
        updateNotifications={updateNotifications}
        notification={notification}
      />
    );
  },
  TEAM_INVITE_REJECTED: (updateNotifications, notification) => {
    return (
      <NewContestJoinRequest
        updateNotifications={updateNotifications}
        notification={notification}
      />
    );
  },
  NEW_TEAM_REQUEST: (updateNotifications, notification) => {
    return (
      <NewContestJoinRequest
        updateNotifications={updateNotifications}
        notification={notification}
      />
    );
  },
  TEAM_REQUEST_ACCEPTED: (updateNotifications, notification) => {
    return (
      <NewContestJoinRequest
        updateNotifications={updateNotifications}
        notification={notification}
      />
    );
  },
  TEAM_REQUEST_REJECTED: (updateNotifications, notification) => {
    return (
      <NewContestJoinRequest
        updateNotifications={updateNotifications}
        notification={notification}
      />
    );
  },
  NEW_CONSORTIUM_INVITE: (updateNotifications, notification) => {
    return (
      <NewContestJoinRequest
        updateNotifications={updateNotifications}
        notification={notification}
      />
    );
  },
  CONSORTIUM_INVITE_ACCEPTED: (updateNotifications, notification) => {
    return (
      <NewContestJoinRequest
        updateNotifications={updateNotifications}
        notification={notification}
      />
    );
  },
  CONSORTIUM_INVITE_REJECTED: (updateNotifications, notification) => {
    return (
      <NewContestJoinRequest
        updateNotifications={updateNotifications}
        notification={notification}
      />
    );
  },
  SOLUTION_REVISION: (updateNotifications, notification) => {
    return (
      <NewContestJoinRequest
        updateNotifications={updateNotifications}
        notification={notification}
      />
    );
  },
};
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
      {NOTIFICATION_TYPES[notification.notification_type] &&
        NOTIFICATION_TYPES[notification.notification_type](
          updateNotifications,
          notification
        )}
    </article>
  );
}

export default Notification;
