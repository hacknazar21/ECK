import React, { useEffect, useRef, useState } from "react";

export default function Select({
  selectClass = "",
  onSelect,
  name,
  title,
  items,
  multiply = false,
}) {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const [selectEls, setSelectEls] = useState([]);
  const [checkedEls, setCheckedEls] = useState([]);
  const wrapper = useRef();
  const head = useRef();
  useEffect(() => {
    if (items && items.length) setSelectEls(items);
  }, [JSON.stringify(items)]);
  useEffect(() => {
    if (selectEls?.length) {
      wrapper.current.removeAttribute("style");
      const heightCalc = wrapper.current?.getBoundingClientRect().height;
      setHeight(heightCalc);
      wrapper.current?.setAttribute("style", `max-height:0px;`);
    }
  }, [JSON.stringify(selectEls)]);
  useEffect(() => {
    if (wrapper.current && open && selectEls?.length) {
      wrapper.current.setAttribute("style", `max-height:${height}px;`);
      wrapper.current.parentElement.classList.add("open");
    } else if (wrapper.current && !open && selectEls?.length) {
      wrapper.current.setAttribute("style", `max-height:0px;`);
      wrapper.current.parentElement.classList.remove("open");
    }
  }, [open]);

  function clickHandler() {
    setOpen((prevState) => !prevState);
  }
  function selectHandler(event) {
    if (wrapper.current && head.current) {
      if (!multiply) {
        setOpen((prevState) => !prevState);
        wrapper.current.setAttribute("style", `max-height:0px;`);
      }
      head.current.innerText = event.target.innerText;
      const value = !multiply ? event.target.dataset.value : checkedEls;
      const ev = {
        target: {
          name: name,
          value,
        },
      };
      if (multiply) {
        event.target.classList.toggle("checked");
        if (event.target.classList.contains("checked")) {
          setCheckedEls((prevState) => {
            if (prevState.indexOf(event.target.innerText) === -1)
              prevState.push(event.target.innerText); // push checked els
            head.current.innerText = prevState.join(", ");
            return prevState;
          });
        } else {
          setCheckedEls((prevState) => {
            if (prevState.indexOf(event.target.innerText) !== -1)
              prevState.splice(prevState.indexOf(event.target.innerText), 1); // push checked els
            if (prevState.length) head.current.innerText = prevState.join(", ");
            else head.current.innerText = title;
            return prevState;
          });
        }
      }
      onSelect(ev);
    }
  }

  return (
    <div className={"select" + " " + selectClass} id={"select-" + name}>
      <div ref={head} onClick={clickHandler} className="select__head">
        <span>{title}</span>
      </div>
      <ul ref={wrapper} className="select__list">
        {selectEls?.map((selectEl, id) => {
          return (
            <li
              key={id}
              onClick={selectHandler}
              data-name={name}
              data-value={selectEl.value}
              className="select__option"
            >
              {multiply ? (
                <div className={"select__checkbox"}>
                  <span></span>
                </div>
              ) : (
                ""
              )}
              {selectEl.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
