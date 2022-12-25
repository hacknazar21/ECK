import { useRouter } from "next/router";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function PagesLayout({ children, no_header = false }) {
  const router = useRouter();
  const { isAuth } = useContext(AuthContext);
  return (
    <div
      className={
        "pages-layout" +
        " " +
        (router.pathname !== "/" &&
        router.pathname !== "/about" &&
        router.pathname !== "/contacts" &&
        router.pathname.indexOf("/news/") === -1 &&
        router.pathname.indexOf("/auth/") === -1 &&
        !no_header &&
        isAuth
          ? ""
          : "home")
      }
    >
      {children}
    </div>
  );
}
