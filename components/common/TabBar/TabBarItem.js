import React, { useEffect } from "react";
import { useRouter } from "next/router";

function TabBarItem({ children, label, activeTab, className, ...attrs }) {
  const router = useRouter();
  useEffect(() => {}, [router]);
  const classes = [
    "profile-tabs__content-item",
    activeTab === label ? "active" : "",
    className,
  ];
  return (
    <div className={classes.join(" ")} {...attrs}>
      {children}
    </div>
  );
}

export default TabBarItem;
