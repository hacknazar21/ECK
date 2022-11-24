import React, { useEffect, useState } from "react";
import Select from "./Select/Select";
import Popup from "./Popup";
import useHttp from "../../hooks/hooks.http";

function FieldsOfActivities({ formChangeHandler, form, defaultValues = [] }) {
  const [activities, setActivities] = useState([]);
  const [activitiesModal, setActivitiesModal] = useState(false);
  const { request } = useHttp();
  useEffect(() => {
    (async () => {
      try {
        const data = await request("/api/fields_of_activity/", "GET");
        setActivities(data);
      } catch (e) {}
    })();
  }, []);
  return (
    <>
      <div className="auth__input-box button">
        <input
          type={"button"}
          onClick={() => {
            setActivitiesModal(true);
          }}
          id={"fields_of_activity_list"}
          required={true}
          onInput={formChangeHandler}
          placeholder=" "
          name={"fields_of_activity_list"}
          className="auth__input"
        />
        <label htmlFor="fields_of_activity_list" className="auth__input-label">
          {form["select-checkboxes"]?.fields_of_activity_list?.length > 0 ||
          defaultValues?.length > 0
            ? "Выбрано"
            : "Сфера деятельности"}
        </label>
      </div>
      <Popup active={activitiesModal} setActive={setActivitiesModal}>
        <header className="single-team-content-block__header">
          <h3 className="single-team-content__title profile-title">
            Сферы деятельности
          </h3>
        </header>
        <div className="activities">
          {activities.map((activity, id) => {
            return (
              <Select
                defaultValue={
                  form["select-checkboxes"]?.fields_of_activity_list ||
                  defaultValues
                }
                saveHead={true}
                key={id}
                name={"fields_of_activity_list"}
                onSelect={formChangeHandler}
                title={activity.name}
                multiply={true}
                items={activity.child_fields.map((child_field) => {
                  return { name: child_field.name, value: child_field.id };
                })}
              />
            );
          })}
        </div>
      </Popup>
    </>
  );
}

export default FieldsOfActivities;
