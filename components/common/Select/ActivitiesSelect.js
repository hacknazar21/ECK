import React, { useEffect, useRef, useState } from "react";

function ActivitiesSelect({
  selectClass = "",
  onSelect,
  name,
  title,
  items,
  defaultValues = [],
}) {
  const wrapper = useRef();
  const head = useRef();
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const [selectEls, setSelectEls] = useState(defaultValues);

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
  useEffect(() => {
    onSelect([...selectEls.map((field) => field.id)]);
  }, [selectEls]);

  function clickHandler(event) {
    event.preventDefault();
    setOpen((prevState) => !prevState);
  }
  function selectHandler(event) {
    event.preventDefault();
    if (wrapper.current && head.current) {
      event.target.classList.toggle("checked");
      if (event.target.classList.contains("checked")) {
        setSelectEls((prevState) => {
          return [
            ...prevState,
            {
              name: event.target.dataset.valuename,
              id: parseInt(event.target.dataset.value),
            },
          ];
        });
      } else {
        setSelectEls((prevState) => {
          return [
            ...prevState.filter(
              (field) => field.id !== parseInt(event.target.dataset.value)
            ),
          ];
        });
      }
    }
  }

  return (
    <div className={"select" + " " + selectClass} id={"select-" + name}>
      <div ref={head} onClick={clickHandler} className="select__head">
        <span>{title}</span>
      </div>
      <ul ref={wrapper} className="select__list">
        {items?.map((item) => {
          return (
            <li className={"select__option"} key={item.id}>
              <div
                data-valuename={item.name}
                data-name={name}
                data-value={item.id}
                onClick={selectHandler}
                className={
                  "select__checkbox" + " " + (item.checked ? "checked" : "")
                }
              >
                <span></span>
              </div>
              <p>{item.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ActivitiesSelect;
