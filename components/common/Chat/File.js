import React, { useEffect, useState } from "react";

function File({ onChange = (event) => {}, loading }) {
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
  useEffect(() => {
    if (loading) setFiles([]);
  }, [loading]);
  return (
    <div className="chat-input-file">
      {files.length !== 0 && (
        <div className="chat-input-files chat-files">
          {files.map((file, id) => (
            <div key={id} className="chat-files__file chat-file">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 7.8225C17.4909 7.74212 17.4733 7.66293 17.4475 7.58625V7.5075C17.4054 7.41753 17.3493 7.33483 17.2812 7.2625L12.0312 2.0125C11.9589 1.94444 11.8762 1.88832 11.7863 1.84625H11.7075L11.4275 1.75H6.125C5.42881 1.75 4.76113 2.02656 4.26884 2.51884C3.77656 3.01113 3.5 3.67881 3.5 4.375V16.625C3.5 17.3212 3.77656 17.9889 4.26884 18.4812C4.76113 18.9734 5.42881 19.25 6.125 19.25H14.875C15.5712 19.25 16.2389 18.9734 16.7312 18.4812C17.2234 17.9889 17.5 17.3212 17.5 16.625V7.875C17.5 7.875 17.5 7.875 17.5 7.8225ZM12.25 4.73375L14.5163 7H12.25V4.73375ZM15.75 16.625C15.75 16.8571 15.6578 17.0796 15.4937 17.2437C15.3296 17.4078 15.1071 17.5 14.875 17.5H6.125C5.89294 17.5 5.67038 17.4078 5.50628 17.2437C5.34219 17.0796 5.25 16.8571 5.25 16.625V4.375C5.25 4.14294 5.34219 3.92038 5.50628 3.75628C5.67038 3.59219 5.89294 3.5 6.125 3.5H10.5V7.875C10.5 8.10706 10.5922 8.32962 10.7563 8.49372C10.9204 8.65781 11.1429 8.75 11.375 8.75H15.75V16.625Z"
                  fill="#1664AC"
                />
              </svg>
              <div className="chat-file__name">{file.name}</div>
              <button
                data-id={id}
                onClick={deleteFileHandler}
                className="chat-file__delete"
              >
                <span></span>
                <span></span>
              </button>
            </div>
          ))}
        </div>
      )}
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
