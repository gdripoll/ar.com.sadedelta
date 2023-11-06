import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import FooterBar from "../components/FooterBar";

function PageLayout() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <FooterBar />
    </div>
  );
}

export default PageLayout;
