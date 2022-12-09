import { useCallback, useContext, useEffect, useState } from "react";
import useHttp from "./hooks.http";
import { AuthContext } from "../context/AuthContext";

const useFilter = (token) => {
  const [childrenActivity, setChildrenActivity] = useState([]);
  const [form, setForm] = useState(null);
  const { request } = useHttp();

  const addChildrenActivity = (children = []) => {
    setChildrenActivity(children);
  };

  const changeFormHandler = async (event) => {
    await setForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const submitFormHandler = async (api) => {
    if (form) {
      const req = [];
      for (const formKey in form) {
        if (form[formKey] && form[formKey] !== "") {
          req.push(`${formKey}=${form[formKey]}`);
        }
      }
      try {
        const headers = {};
        console.log(token);
        if (token) headers["Authorization"] = `Bearer ${token}`;
        return await request(`${api}?${req.join("&")}`, "GET", null, headers);
      } catch (e) {
        console.log(e);
      }
    }
  };
  const clearForm = () => {
    setForm(null);
  };
  useEffect(() => {
    console.log(form);
  }, [form]);

  return {
    childrenActivity,
    formFilter: form,
    addChildrenActivity,
    changeFormHandler,
    submitFormHandler,
    clearForm,
  };
};
export default useFilter;
