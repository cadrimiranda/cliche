import { Outlet, useLocation } from "react-router-dom";
import { Page } from "../../components/page/Page";

export const HomeHubScreen = () => {
  let location = useLocation();

  return (
    <Page header={location.pathname.includes("/home")}>
      <Outlet />
    </Page>
  );
};
