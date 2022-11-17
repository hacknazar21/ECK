import React, { useEffect, useState } from "react";

function File({
  classNames = [],
  isInput = false,
  onChange = (event) => {},
  label = "",
  name = "",
  append = null,
  disabled = false,
  required = false,
}) {
  const classes = ["file", ...classNames];
  const [files, setFiles] = useState([]);
  function filesChangeHandler(e) {
    const filesCurrent = Array.from(e.target.files);
    setFiles((prevState) => [...prevState, ...filesCurrent]);
  }
  function deleteFileHandler(e) {
    const fileID = e.target.dataset.id;
    setFiles((prevState) =>
      prevState.filter((file, id) => id !== parseInt(fileID))
    );
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
                  <>
                    <div key={file.name + id} className="file__item">
                      {id + 1}. {file.name}
                      <button data-id={id} onClick={deleteFileHandler}>
                        <span></span>
                        <span></span>
                      </button>
                    </div>
                  </>
                );
              })}
            </div>
          )}
          {append}
        </div>
      )}
      {!isInput && (
        <div className={classes.join(" ")}>
          <div className="file__box">
            <label htmlFor="docs" className="file__label">
              Выберите документы
            </label>
            <input
              type="file"
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
