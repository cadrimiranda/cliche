import { createBrowserRouter } from "react-router-dom";
import {
  LoginScreen,
  OnboardingScreen,
  HomeScreen,
  SearchScreen,
  SplashScreen,
} from "../pages";
import { routes } from "../shared/routes";
import { HomeHubScreen } from "../pages/homeHub/HomeHubScreen";
import { MyListsScreen } from "../pages/mylists/MyListsScreen";

const routerEntries = createBrowserRouter([
  {
    path: routes.splashScreen,
    element: <SplashScreen />,
  },
  {
    path: routes.login,
    element: <LoginScreen />,
  },
  {
    path: routes.onboarding,
    element: <OnboardingScreen />,
  },
  {
    path: routes.homeHub,
    element: <HomeHubScreen />,
    children: [
      {
        path: routes.home,
        element: <HomeScreen />,
      },
      {
        path: routes.search,
        element: <SearchScreen />,
      },
      {
        path: routes.mylists,
        element: <MyListsScreen />,
      },
    ],
  },
]);

export { routerEntries };
