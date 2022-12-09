import React, { useEffect, useRef, useState } from "react";

export default function Select({
  selectClass = "",
  onSelect,
  name,
  title,
  items,
}) {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const wrapper = useRef();
  const head = useRef();

  useEffect(() => {
    if (items?.length) {
      wrapper.current.removeAttribute("style");
      const heightCalc = wrapper.current?.getBoundingClientRect().height;
      setHeight(heightCalc);
      wrapper.current?.setAttribute("style", `max-height:0px;`);
    }
  }, [JSON.stringify(items)]);
  useEffect(() => {
    if (wrapper.current && open && items?.length) {
      wrapper.current.setAttribute("style", `max-height:${height}px;`);
      wrapper.current.parentElement.classList.add("open");
    } else if (wrapper.current && !open && items?.length) {
      wrapper.current.setAttribute("style", `max-height:0px;`);
      wrapper.current.parentElement.classList.remove("open");
    }
  }, [open]);

  function clickHandler(event) {
    event.preventDefault();
    setOpen((prevState) => !prevState);
  }
  function selectHandler(event) {
    event.preventDefault();
    if (wrapper.current && head.current) {
      setOpen((prevState) => !prevState);
      wrapper.current.setAttribute("style", `max-height:0px;`);
      head.current.innerText = event.target.innerText;
      const value = event.target.dataset.value;
      const ev = {
        target: {
          name: name,
          value,
          type: "select",
        },
      };
      onSelect(ev);
    }
  }

  return (
    <div className={"select" + " " + selectClass} id={"select-" + name}>
      <div ref={head} onClick={clickHandler} className="select__head">
        <span>{title}</span>
      </div>
      <ul ref={wrapper} className="select__list">
        {items?.map((selectEl, id) => {
          return (
            <li
              key={id}
              onClick={selectHandler}
              data-valuename={selectEl.name}
              data-name={name}
              data-value={selectEl.value}
              className={"select__option"}
            >
              {selectEl.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
