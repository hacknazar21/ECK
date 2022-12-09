import React, { useContext, useEffect, useState } from "react";
import useHttp from "../../../../hooks/hooks.http";
import { AuthContext } from "../../../../context/AuthContext";

function ActionButtons({ updateNotifications, notification }) {
  const { request } = useHttp();
  const { token } = useContext(AuthContext);
  async function joinClickHandler(e) {
    e.stopPropagation();
    let method = "POST";
    switch (this.type) {
      case "accept_url":
        method = "POST";
        break;
      case "reject_url":
        method = "DELETE";
        break;
    }
    try {
      await request(
        this.link,
        method,
        {},
        {
          Authorization: `Bearer ${token}`,
        }
      );
      await request(
        `/api/notifications/${notification.id}/mark_visited/`,
        "POST",
        {},
        {
          Authorization: `Bearer ${token}`,
        }
      );
      updateNotifications();
    } catch (e) {
      await request(
        `/api/notifications/${notification.id}/mark_visited/`,
        "POST",
        {},
        {
          Authorization: `Bearer ${token}`,
        }
      );
      updateNotifications();
    }
  }

  return (
    <div className="window-notification__actions">
      <button
        onClick={joinClickHandler.bind({
          type: "accept_url",
          link: notification.accept_url,
        })}
        className="window-notification__button window-notification__button_active"
      >
        Принять
      </button>
      <button
        onClick={joinClickHandler.bind({
          type: "reject_url",
          link: notification.reject_url,
          id: notification.id,
        })}
        className="window-notification__button window-notification__button_no-active"
      >
        Отклонить
      </button>
    </div>
  );
}

export default ActionButtons;
