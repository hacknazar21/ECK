import React, { useEffect, useState } from "react";
import Avatar from "../../src/img/loading-lazy.gif";

function ImageFile({
  classNames = [],
  onChange = (event) => {},
  label = "Нажмите чтобы загрузить фото",
  name = "avatar",
  disabled = false,
  required = false,
  defaultValue = null,
}) {
  const classes = ["file", ...classNames];
  const [files, setFiles] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);
  function filesChangeHandler(e) {
    const filesCurrent = Array.from(e.target.files);
    setFiles([...filesCurrent]);
  }
  useEffect(() => {
    const [file] = files;
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
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
      <div className={classes.join(" ")}>
        <input
          type="file"
          id={name}
          accept="image/*"
          disabled={disabled}
          onChange={filesChangeHandler}
          name={name}
          required={required}
          className="my-profile-form__upload-input"
        />
        <label htmlFor={name} className="my-profile-form__upload-label">
          <div className="my-profile-form__image-preview">
            <img
              loading={"lazy"}
              src={defaultValue || imagePreview?.src || Avatar.src}
              alt=""
            />
          </div>
          {!disabled && label}
        </label>
      </div>
    </>
  );
}

export default ImageFile;
