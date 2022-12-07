import React, { useEffect, useState } from "react";

function File({ onChange = (event) => {} }) {
  const [files, setFiles] = useState([]);
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
  useEffect(() => {
    onChange({
      target: {
        name: "attachments_list",
        value: files,
        type: "file",
      },
    });
  }, [JSON.stringify(files)]);
  return (
    <div className="chat-input-file">
      <input
        type="file"
        id="file"
        multiple={true}
        onChange={filesChangeHandler}
        name={"attachments_list"}
        className="chat-input-button chat-input-button_file"
      />
      <label htmlFor="file">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M21.44 11.0509L12.25 20.2409C11.1242 21.3667 9.59723 21.9992 8.00505 21.9992C6.41286 21.9992 4.88589 21.3667 3.76005 20.2409C2.6342 19.1151 2.00171 17.5881 2.00171 15.9959C2.00171 14.4037 2.6342 12.8767 3.76005 11.7509L12.95 2.5609C13.7006 1.81033 14.7186 1.38867 15.78 1.38867C16.8415 1.38867 17.8595 1.81033 18.61 2.5609C19.3606 3.31146 19.7823 4.32944 19.7823 5.3909C19.7823 6.45235 19.3606 7.47033 18.61 8.2209L9.41005 17.4109C9.03476 17.7862 8.52577 17.997 7.99505 17.997C7.46432 17.997 6.95533 17.7862 6.58005 17.4109C6.20476 17.0356 5.99393 16.5266 5.99393 15.9959C5.99393 15.4652 6.20476 14.9562 6.58005 14.5809L15.07 6.1009"
            stroke="#6E7793"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </label>
    </div>
  );
}

export default File;
