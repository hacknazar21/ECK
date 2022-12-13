import React, { cloneElement, useContext, useEffect, useState } from "react";
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
    const current = e.target.closest(".aside-menu__item");
    const prev = e.target
      .closest(".aside-menu__list_columns")
      .querySelector(".aside-menu__item.active");
    if (prev) {
      if (window.innerWidth <= 992 && !current.classList.contains("active")) {
        const parentNode = e.target.closest(".aside-menu__list_columns");
        const cloned = current.cloneNode();
        const clonedIndex = Array.prototype.indexOf.call(
          parentNode.children,
          cloned
        );
        const replacedNode = parentNode.replaceChild(current, prev);
        parentNode.insertBefore(replacedNode, parentNode.children[clonedIndex]);
      }
      prev.classList.remove("active");
    }
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
        <li key={activity.id} className="aside-menu__item no-center">
          <button
            onClick={activityClickHandler.bind({ id: activity.id })}
            className="aside-menu__button"
          >
            <div className={"aside-menu__link"}>
              <img src={activity.image} alt={activity.name} />
            </div>
            <p>{activity.name}</p>
          </button>
        </li>
      ))}
    </Aside>
  );
}

export default ActivitiesMenu;
