import { useRouter } from "next/router";
import Menu from "../components/common/Menu";

export default function PagesLayout({ children, no_header = true }) {
  const router = useRouter();
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
        !no_header
          ? ""
          : "home")
      }
    >
      {children}
    </div>
  );
}
