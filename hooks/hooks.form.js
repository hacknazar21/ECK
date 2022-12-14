import { useState, useCallback, useEffect, useContext } from "react";
import { Validation } from "../helpers/validation";
import useHttp from "./hooks.http";
import { AuthContext } from "../context/AuthContext";
const useForm = (onSuccess = (response) => {}, defaultForm = {}) => {
  const [error, setError] = useState([]);
  const [form, setForm] = useState(defaultForm || {});
  const validation = new Validation();
  const { request, loading } = useHttp();
  const { token } = useContext(AuthContext);
  const dropForm = () => {
    setForm(defaultForm || {});
  };
  const formChangeHandler = (event) => {
    setForm((prevState) => {
      if (!prevState[event.target.type])
        prevState[event.target.type] = {
          [event.target.name]: event.target.value,
        };
      else prevState[event.target.type][event.target.name] = event.target.value;
      validateValue(event.target);
      return { ...prevState };
    });
  };
  const formSubmitHandler = async (event) => {
    event.preventDefault();
    const action = event.target.action;
    const method = event.target.dataset.method;
    const formData = new FormData();

    for (const formType in form) {
      switch (formType) {
        case "file":
          for (const formName in form[formType]) {
            for (const formValue of form[formType][formName]) {
              formData.append(formName, formValue, formValue.name);
            }
          }
          break;
        case "select-checkboxes":
          for (const formName in form[formType]) {
            for (const formValue of form[formType][formName]) {
              formData.append(formName, formValue);
            }
          }
          break;
        default:
          for (const formName in form[formType]) {
            if (form[formType][formName])
              formData.append(formName, form[formType][formName]);
          }
      }
    }
    const headers = {};
    if (token) headers["Authorization"] = `Bearer ${token}`;
    headers["Accept"] = `application/json`;
    try {
      const response = await request(action, method, formData, headers, true);
      onSuccess(response);
    } catch (e) {
      try {
        const errorsResp = JSON.parse(e.message);
        const errors = [];
        for (const errorsKey in errorsResp) {
          console.log(errorsResp[errorsKey]);
          errors.push({
            name: errorsKey,
            value:
              typeof errorsResp[errorsKey] === "object"
                ? errorsResp[errorsKey].join()
                : errorsResp[errorsKey],
          });
        }
        setError(errors);
      } catch (e) {
        console.log(e.message);
      }
    }
  };
  const validateValue = (target) => {
    setError([]);
    switch (target.type) {
      case "email":
        !validation.isEmail(target.value)
          ? setError([
              {
                name: [target.name],
                value: "Email ???????????? ??????????????",
              },
            ])
          : null;
        break;
      case "password":
        if (target.name === "password_check") {
          !validation.isPasswordsMatch(form.password.password, target.value)
            ? setError([
                {
                  name: [target.name],
                  value: "???????????? ???? ??????????????????",
                },
              ])
            : null;
        }
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    const inputs = document.querySelectorAll("input.error");
    if (inputs)
      for (const input of inputs) {
        input.classList.remove("error");
        const labelError = input.parentElement.querySelector(
          ".auth__input-error-label"
        );
        if (labelError) labelError.remove();
      }
    for (const errorElement of error) {
      const input = document.querySelector(
        `input[name="${errorElement["name"]}"]`
      );
      if (input) {
        input.classList.add("error");
        input.focus();
        input.parentElement.insertAdjacentHTML(
          "beforeend",
          `<p class="auth__input-error-label">${errorElement["value"]}</p>`
        );
      }
    }
  }, [error]);
  return {
    error,
    formChangeHandler,
    formSubmitHandler,
    form,
    setForm,
    loading,
    dropForm,
  };
};
export default useForm;
