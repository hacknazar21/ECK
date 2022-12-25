import React, { useContext, useEffect } from "react";
import File from "../../../common/File";
import useForm from "../../../../hooks/hooks.form";
import { AuthContext } from "../../../../context/AuthContext";
import ButtonWithDangerous from "../../../common/ButtonWithDangerous";
import { useRouter } from "next/router";

function Report({ project }) {
  const { userData } = useContext(AuthContext);
  const { formChangeHandler, formSubmitHandler, form, dropForm } = useForm(
    onSuccess,
    {
      text: {
        executor: userData?.id,
        project: project?.id,
      },
    }
  );

  const router = useRouter();

  function onSuccess(e) {
    //router.reload();
  }

  useEffect(() => {
    dropForm();
  }, [project]);

  return (
    <form
      onSubmit={formSubmitHandler}
      data-method={"POST"}
      action={"/api/projects/solutions/"}
      className="report"
    >
      <h2 className="report__title">Прикрепите решение по проекту</h2>
      {!project?.is_solution_submitted && (
        <File
          onChange={formChangeHandler}
          name={"files"}
          classNames={["report__file"]}
          disabled={project?.is_solution_submitted}
        />
      )}
      {!project?.is_solution_submitted && (
        <ButtonWithDangerous
          onClick={() => {}}
          className="window-notification__button window-notification__button_active"
          buttonText={"Отправить решение"}
          title={"Отправить решение на проверку"}
          description={"Вы уверены что хотите отправить решение на проверку?"}
        />
      )}
      {project?.is_solution_submitted && <p>Решение было предоставлено</p>}
    </form>
  );
}

export default Report;
