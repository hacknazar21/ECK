import { useRouter } from "next/router";
import Menu from "../components/common/Menu";

export default function PagesLayout({ children }) {
  const router = useRouter();
  return (
    <div
      className={
        "pages-layout" +
        " " +
        (router.pathname !== "/" &&
        router.pathname !== "/about" &&
        router.pathname !== "/contacts" &&
        router.pathname.indexOf("/news/") === -1
          ? ""
          : "home")
      }
    >
      {children}
    </div>
  );
}
