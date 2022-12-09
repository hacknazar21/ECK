import React, { useContext, useEffect, useState } from "react";
import Popup from "./Popup";
import useHttp from "../../hooks/hooks.http";
import ActivitiesSelect from "./Select/ActivitiesSelect";
import { AuthContext } from "../../context/AuthContext";

function FieldsOfActivities({ formChangeHandler, form, disabled = false }) {
  const [activities, setActivities] = useState([]);
  const [activitiesModal, setActivitiesModal] = useState(false);
  const { request } = useHttp();
  const [fields, setFields] = useState([]);
  const { userData, token } = useContext(AuthContext);
  const [selectedFields, setSelectedFields] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const data = await request("/api/fields_of_activity/", "GET");
        setActivities(data);
      } catch (e) {}
    })();
  }, []);
  useEffect(() => {
    if (token && userData && userData.fields_of_activity) {
      setFields([...userData?.fields_of_activity]);
    }
  }, [token, userData]);
  useEffect(() => {
    if (form["select-checkboxes"]) {
      const newFields = [];
      for (const selectedFieldKey in selectedFields) {
        for (const field_id of selectedFields[selectedFieldKey]) {
          for (const activity of activities) {
            for (const child_field of activity.child_fields) {
              if (field_id === child_field.id)
                newFields.push({
                  name: child_field.name,
                  id: child_field.id,
                  parent_field: { id: activity.id },
                });
            }
          }
        }
      }
      if (newFields) setFields([...newFields]);
    }
  }, [form]);
  // useEffect(() => {
  //   console.log(fields);
  // }, [fields]);
  return (
    <>
      <div className="auth__input-box button">
        <input
          type={"button"}
          onClick={() => {
            setActivitiesModal(true);
          }}
          disabled={disabled}
          id={"fields_of_activity_list"}
          required={true}
          onInput={formChangeHandler}
          placeholder=" "
          name={"fields_of_activity_list"}
          className="auth__input"
        />
        <label htmlFor="fields_of_activity_list" className="auth__input-label">
          {selectedFields?.length > 0 ? "Выбрано" : "Сфера деятельности"}
        </label>
        <ul className="auth__input-list-default">
          {fields?.length > 0 &&
            fields?.map((field) => (
              <li key={field.id} className="auth__input-list-item-default">
                {field.name}
              </li>
            ))}
        </ul>
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
              <ActivitiesSelect
                defaultValues={fields
                  .filter((field) => field?.parent_field.id === activity.id)
                  .map((field) => ({ id: field.id, name: field.name }))}
                key={id}
                name={"fields_of_activity_list"}
                onSelect={(fields_ids) => {
                  setSelectedFields((prevState) => {
                    prevState[activity.id] = [...fields_ids];
                    return prevState;
                  });
                }}
                title={activity.name}
                items={activity.child_fields.map((child_field) => {
                  return {
                    name: child_field.name,
                    id: child_field.id,
                    checked:
                      fields.filter((field) => field.id === child_field.id)
                        .length > 0,
                  };
                })}
              />
            );
          })}
        </div>
        <button
          onClick={(event) => {
            event.preventDefault();
            setActivitiesModal(false);
            const fields = [];
            for (const selectedFieldsKey in selectedFields) {
              for (const selectedField of selectedFields[selectedFieldsKey]) {
                fields.push(selectedField);
              }
            }
            formChangeHandler({
              target: {
                name: "fields_of_activity_list",
                value: [...fields],
                type: "select-checkboxes",
              },
            });
          }}
          className="add-btn"
        >
          Подтвердить
        </button>
      </Popup>
    </>
  );
}

export default FieldsOfActivities;
