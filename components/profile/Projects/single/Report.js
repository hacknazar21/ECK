import React, { useContext, useEffect } from "react";
import File from "../../../common/File";
import useForm from "../../../../hooks/hooks.form";
import { AuthContext } from "../../../../context/AuthContext";
import ButtonWithDangerous from "../../../common/ButtonWithDangerous";

function Report({ project }) {
  const { userData } = useContext(AuthContext);
  const { formChangeHandler, formSubmitHandler, loading, form, dropForm } =
    useForm(onSuccess, {
      text: {
        executor: userData?.id,
        project: project?.id,
      },
    });

  function onSuccess(e) {
    console.log(e);
  }
  useEffect(() => {
    dropForm();
  }, [project]);
  useEffect(() => {
    console.log(form);
  }, [form]);
  return (
    <form
      onSubmit={formSubmitHandler}
      data-method={"POST"}
      action={"/api/projects/solutions/"}
      className="report"
    >
      <h2 className="report__title">Прикрепите решение по проекту</h2>
      <File
        onChange={formChangeHandler}
        name={"files"}
        classNames={["report__file"]}
      />
    </form>
  );
}

export default Report;
