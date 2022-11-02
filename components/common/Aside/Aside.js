import React, { useEffect, useRef, useState } from "react";
import AsideLayout from "../../../layouts/AsideLayout";

function Aside({ children }) {
  const menu = useRef();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [menuHeight, setMenuHeight] = useState(null);
  const [height, setHeight] = useState(null);
  let isDefineded = false;
  const menuAction = () => {
    if (window.innerWidth < 991.98 && !isDefineded) {
      const active = menu.current.querySelector("li.active");
      const menuHeightCurrent = menu.current.clientHeight;
      const heightCurrent = active.clientHeight + 2;
      setMenuHeight(menuHeightCurrent);
      setHeight(heightCurrent);

      menu.current.style.maxHeight = `${heightCurrent}px`;
      console.log(heightCurrent, menuHeightCurrent);
      active.addEventListener("click", (event) => {
        setIsOpenMenu((prevState) => !prevState);
      });
      isDefineded = true;
    } else if (window.innerWidth >= 991.98) {
      isDefineded = false;
      menu.current.removeAttribute("style");
    }
  };

  useEffect(() => {
    menuAction();
    if (!isDefineded) window.addEventListener("resize", menuAction);
    else {
      window.removeEventListener("resize", menuAction);
    }
  }, []);
  useEffect(() => {
    if (menuHeight && height)
      isOpenMenu
        ? (menu.current.style.maxHeight = `${menuHeight}px`)
        : (menu.current.style.maxHeight = `${height}px`);
  }, [isOpenMenu]);

  return (
    <AsideLayout>
      <menu className="aside__menu aside-menu">
        <ul ref={menu} className="aside-menu__list">
          {children}
        </ul>
      </menu>
    </AsideLayout>
  );
}

export default Aside;
