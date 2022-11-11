import React from "react";

function TabBarNav({ navLabel, classNames = [], onChangeActiveTab }) {
  const classes = [...classNames, "profile-tabs__button"];
  return (
    <button
      onClick={() => {
        onChangeActiveTab(navLabel);
      }}
      className={classes.join(" ")}
    >
      {navLabel}
    </button>
  );
}

export default TabBarNav;
