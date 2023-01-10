import React, { useContext, useEffect, useState } from "react";
import File from "../../../common/File";
import useForm from "../../../../hooks/hooks.form";
import { AuthContext } from "../../../../context/AuthContext";
import ButtonWithDangerous from "../../../common/ButtonWithDangerous";
import { useRouter } from "next/router";
import Select from "../../../common/Select/Select";

function Report({ project }) {
  const { userData } = useContext(AuthContext);
  const { formChangeHandler, formSubmitHandler, form, dropForm } = useForm(
    onSuccess,
    {
      text: {
        project: project?.id,
      },
    }
  );
  const router = useRouter();
  const [executors, setExecutors] = useState([]);

  async function onSuccess(e) {
    await router.reload();
  }

  useEffect(() => {
    dropForm();
    if (project) {
      setExecutors(
        project.participating_as?.map((participate_as) => {
          const submitted = project.solution_submitted_as?.filter(
            (solution_submitted_as) =>
              solution_submitted_as.id === participate_as.id
          );
          return {
            name:
              participate_as.display_name + (!!submitted?.length ? " ✓" : ""),
            value: !!submitted?.length ? "" : participate_as.id,
          };
        })
      );
    }
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
      {!project?.is_solution_submitted && (
        <>
          <File
            onChange={formChangeHandler}
            name={"files"}
            classNames={["report__file"]}
            disabled={project?.is_solution_submitted}
          />
          <Select
            name={"executor"}
            title={"От кого подать решение"}
            onSelect={formChangeHandler}
            items={executors}
            selectClass={"auth__input-box"}
          />
          <div className="auth__input-box">
            <textarea
              id={"comment"}
              required={true}
              name={"comment"}
              placeholder=" "
              className="auth__input"
              onChange={formChangeHandler}
            />
            <label htmlFor="comment" className="auth__input-label">
              Комментарий
            </label>
          </div>
          <input type="hidden" name="non_field_errors" />
        </>
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
    </form>
  );
}

export default Report;
