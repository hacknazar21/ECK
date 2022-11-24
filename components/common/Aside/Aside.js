import React, { useEffect, useRef, useState } from "react";
import AsideLayout from "../../../layouts/AsideLayout";

function Aside({ children, modificationMenu = "" }) {
  const menu = useRef();

  const toggleMenu = (e) => {
    e.preventDefault();
    menu.current.classList.toggle("open");
  };

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
