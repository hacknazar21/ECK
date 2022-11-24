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
  const [imagePreview, setImagePreview] = useState(null);
  function filesChangeHandler(e) {
    const filesCurrent = Array.from(e.target.files);
    onChange({
      target: {
        name,
        value: filesCurrent,
        type: "file",
      },
    });
    if (filesCurrent[0]) {
      setImagePreview(URL.createObjectURL(filesCurrent[0]));
      console.log(URL.createObjectURL(filesCurrent[0]));
    }
  }
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
              src={imagePreview || defaultValue || Avatar.src}
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
