import React, { useEffect, useRef, useState } from "react";
import AsideLayout from "../../../layouts/AsideLayout";

function Aside({ children, modificationMenu = "" }) {
  const menu = useRef();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [menuHeight, setMenuHeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  let isDefined = false;
  const toggleMenu = () => {
    setIsOpenMenu((prevState) => {
      return !prevState;
    });
  };
  const menuAction = () => {
    if (window.innerWidth < 991.98 && !isDefined) {
      const active = menu.current?.querySelector("li.active");
      const menuHeightCurrent = menu.current?.clientHeight;
      const heightCurrent = active?.clientHeight + 2;
      setMenuHeight(menuHeightCurrent);
      setHeight(heightCurrent);
      menu.current.style.maxHeight = `${heightCurrent}px`;
      isDefined = true;
      setIsMobile(true);
    } else if (window.innerWidth >= 991.98) {
      isDefined = false;
      setIsMobile(false);
      menu.current.removeAttribute("style");
    }
  };

  useEffect(() => {
    menuAction();
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
        <ul ref={menu} className={"aside-menu__list" + " " + modificationMenu}>
          {isMobile
            ? React.Children.map(children, (child) => {
                if (child.props.className.indexOf("active") !== -1) {
                  return React.cloneElement(child, { onClick: toggleMenu });
                }
              })
            : ""}
          {isMobile
            ? React.Children.map(children, (child) => {
                if (child.props.className.indexOf("active") === -1)
                  return child;
              })
            : ""}
          {!isMobile ? children : ""}
        </ul>
      </menu>
    </AsideLayout>
  );
}

export default Aside;
