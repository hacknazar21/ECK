import { useRouter } from "next/router";
import Menu from "../components/common/Menu";

export default function PagesLayout({ children }) {
  const router = useRouter();
  return (
    <div
      className={"pages-layout" + " " + (router.pathname !== "/" ? "" : "home")}
    >
      {children}
    </div>
  );
}
