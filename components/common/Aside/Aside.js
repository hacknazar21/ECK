import React, { useEffect, useRef, useState } from "react";
import AsideLayout from "../../../layouts/AsideLayout";

function Aside({ children, modificationMenu = "" }) {
  const menu = useRef();
  const [maxHeight, setMaxHeight] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const toggleMenu = (e) => {
    e.preventDefault();
    menu.current.classList.toggle("open");
  };

  useEffect(() => {
    if (menu.current && !maxHeight) {
      setMaxHeight(menu.current.children.length * 60);
    }
  }, [menu.current?.childElementCount]);

  useEffect(() => {
    if (maxHeight) {
      menu.current.style = "--max-height: " + maxHeight + "px";
    }
  }, [maxHeight]);

  useEffect(() => {
    if (window.innerWidth <= 992) setIsMobile(true);
  }, []);
  return (
    <AsideLayout>
      <menu className="aside__menu aside-menu">
        <ul ref={menu} className={"aside-menu__list" + " " + modificationMenu}>
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, {
              onClick: toggleMenu,
            });
          })}
        </ul>
      </menu>
    </AsideLayout>
  );
}

export default Aside;
