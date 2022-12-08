import React, { useEffect, useRef, useState } from "react";

export default function Select({
  selectClass = "",
  onSelect,
  name,
  title,
  items,
  multiply = false,
  saveHead = false,
  defaultValue = [],
  setFields = (e) => {},
}) {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const [selectEls, setSelectEls] = useState([]);
  const [checkedEls, setCheckedEls] = useState(defaultValue || []);
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

  function clickHandler(event) {
    event.preventDefault();
    setOpen((prevState) => !prevState);
  }
  function selectHandler(event) {
    event.preventDefault();
    if (wrapper.current && head.current) {
      if (!multiply) {
        setOpen((prevState) => !prevState);
        wrapper.current.setAttribute("style", `max-height:0px;`);
      }
      if (!saveHead) head.current.innerText = event.target.innerText;
      const value = event.target.dataset.value;
      const ev = {
        target: {
          name: name,
          value,
          type: "select",
        },
      };
      if (multiply) {
        event.target.classList.toggle("checked");
        if (event.target.classList.contains("checked")) {
          setCheckedEls((prevState) => {
            if (prevState.indexOf(event.target.innerText) === -1 && !saveHead) {
              prevState.push(event.target.innerText);
            } else if (
              prevState.indexOf(event.target.dataset.value) === -1 &&
              saveHead
            ) {
              prevState.push(event.target.dataset.value);
              setFields((prevState) => [
                ...prevState,
                event.target.dataset.valueName,
              ]);
            }
            if (!saveHead) head.current.innerText = prevState.join(", ");
            onSelect({
              target: {
                name: name,
                value: [...prevState],
                type: "select-checkboxes",
              },
            });
            return prevState;
          });
        } else {
          setCheckedEls((prevState) => {
            if (prevState.indexOf(event.target.innerText) !== -1 && !saveHead)
              prevState.splice(prevState.indexOf(event.target.innerText), 1);
            // push checked els
            else if (
              prevState.indexOf(parseInt(event.target.dataset.value)) !== -1 &&
              saveHead
            ) {
              prevState.splice(
                prevState.indexOf(parseInt(event.target.dataset.value)),
                1
              );
              setFields((prevState) =>
                prevState.splice(
                  prevState.indexOf(event.target.dataset.valueName),
                  1
                )
              );
            } // push checked els
            if (prevState.length && !saveHead)
              head.current.innerText = prevState.join(", ");
            else head.current.innerText = title;

            onSelect({
              target: {
                name: name,
                value: [...prevState],
                type: "select-checkboxes",
              },
            });
            return prevState;
          });
        }
      } else onSelect(ev);
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
              data-valuename={selectEl.name}
              data-name={name}
              data-value={selectEl.value}
              className={
                "select__option" +
                " " +
                (defaultValue?.indexOf(parseInt(selectEl.value)) !== -1
                  ? "checked"
                  : "")
              }
            >
              {multiply && (
                <div className={"select__checkbox"}>
                  <span></span>
                </div>
              )}
              {selectEl.icon && (
                <div className="single-team-search__result-icon">
                  <img src={selectEl.icon} alt="" />
                </div>
              )}
              <p>{selectEl.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
