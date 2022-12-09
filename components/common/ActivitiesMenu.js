import React, { useContext, useEffect, useState } from "react";
import Aside from "./Aside/Aside";
import useHttp from "../../hooks/hooks.http";
import { AuthContext } from "../../context/AuthContext";

function ActivitiesMenu({ url, setter }) {
  const [activities, setActivities] = useState([]);
  const { request } = useHttp();
  const {
    addChildrenActivity,
    changeFormHandler,
    submitFormHandler,
    clearForm,
    formFilter,
  } = useContext(AuthContext);
  async function activityClickHandler(e) {
    const current = e.target.parentElement.parentElement;
    const prev =
      e.target.parentElement.parentElement.parentElement.querySelector(
        ".aside-menu__item.active"
      );
    if (prev) prev.classList.remove("active");
    current.classList.add("active");
    const parent = activities.filter((activity) => activity.id === this.id)[0];
    if (parent) {
      addChildrenActivity([...parent.child_fields]);
      await clearForm();
      await changeFormHandler({
        target: {
          name: "fields_of_activity",
          value: this.id,
        },
      });
    }
  }
  useEffect(() => {
    if (formFilter?.fields_of_activity)
      (async () => {
        const data = await submitFormHandler(url);
        if (data) setter(data.results);
      })();
  }, [formFilter?.fields_of_activity]);
  useEffect(() => {
    (async () => {
      try {
        const data = await request("/api/fields_of_activity/", "GET");
        setActivities([...data]);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <Aside modificationMenu={"aside-menu__list_columns"}>
      {activities.map((activity) => (
        <li key={activity.id} className={"aside-menu__item"}>
          <button
            onClick={activityClickHandler.bind({ id: activity.id })}
            className="aside-menu__link"
          >
            <img src={activity.image} alt="" />
          </button>
        </li>
      ))}
    </Aside>
  );
}

export default ActivitiesMenu;
