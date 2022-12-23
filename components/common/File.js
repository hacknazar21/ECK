import React, { useContext, useEffect, useState } from "react";
import useHttp from "../../hooks/hooks.http";
import { AuthContext } from "../../context/AuthContext";

function File({
  classNames = [],
  isInput = false,
  onChange = (event) => {},
  label = "",
  name = "",
  defaultValues = null,
  disabled = false,
  required = false,
}) {
  const classes = ["file", ...classNames];
  const [files, setFiles] = useState([]);
  const { request } = useHttp();
  const [defaultFiles, setDefaultFiles] = useState(defaultValues || []);
  const { token } = useContext(AuthContext);
  function filesChangeHandler(e) {
    const filesCurrent = Array.from(e.target.files);
    setFiles((prevState) => [...prevState, ...filesCurrent]);
  }
  function deleteFileHandler(e) {
    e.preventDefault();
    const fileID = e.target.dataset.id;
    setFiles((prevState) =>
      prevState.filter((file, id) => id !== parseInt(fileID))
    );
  }
  async function deleteFileFromServerHandler(e) {
    e.preventDefault();
    try {
      setDefaultFiles((prevState) =>
        prevState.filter((defaultFile) => defaultFile.id !== this.file_id)
      );
      const headers = {};
      if (token) headers["Authorization"] = `Bearer ${token}`;
      await request(
        `/api/profile/${name}/${this.file_id}/`,
        "DELETE",
        null,
        headers
      );
    } catch (e) {
      console.log(e.message);
    }
  }
  useEffect(() => {
    onChange({
      target: {
        name,
        value: files,
        type: "file",
      },
    });
  }, [JSON.stringify(files)]);
  return (
    <>
      {isInput && (
        <div className="auth__input-box file">
          <input
            type={"file"}
            multiple={true}
            id={name}
            accept="application/pdf"
            onChange={filesChangeHandler}
            placeholder=" "
            required={required}
            name={name}
            disabled={disabled}
            className="auth__input"
          />
          <label htmlFor={name} className="auth__input-label">
            {label}
          </label>
          {files.length > 0 && (
            <div className="files">
              <h3 className="files__title">Добавленные документы</h3>
              {files.map((file, id) => {
                return (
                  <div key={file.name + id} className="file__item">
                    {id + 1}. {file.name}
                    <button data-id={id} onClick={deleteFileHandler}>
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                );
              })}
            </div>
          )}
          {!!defaultFiles.length && (
            <div className="files">
              <h3 className="files__title">Загруженные документы</h3>
              {defaultFiles?.map((file, id) => {
                return (
                  <div className="file__item">
                    <a href={file.file} key={file.id} className="file__link">
                      {id + 1}. {file.uploaded_name}
                    </a>
                    {!disabled && (
                      <button
                        onClick={deleteFileFromServerHandler.bind({
                          file_id: file.id,
                        })}
                        className="file__button"
                      >
                        <span></span>
                        <span></span>
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
      {!isInput && (
        <div className={classes.join(" ")}>
          <div className="file__box">
            <label htmlFor="docs" className="file__label">
              Выберите документы
            </label>
            <input
              multiple={true}
              accept="application/pdf"
              type="file"
              name={name}
              onChange={filesChangeHandler}
              id={"docs"}
              className="file__input"
            />
          </div>
          {files.length > 0 && (
            <div className="files">
              {files.map((file, id) => {
                return (
                  <div key={file.name + id} className="file__item">
                    {file.name}
                    <button data-id={id} onClick={deleteFileHandler}>
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default File;
