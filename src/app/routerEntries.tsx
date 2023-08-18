import { createBrowserRouter } from "react-router-dom";
import {
  LoginScreen,
  OnboardingScreen,
  HomeScreen,
  SearchScreen,
  SplashScreen,
} from "../pages";
import { routes } from "../shared/routes";

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
    path: routes.home,
    element: <HomeScreen />,
  },
  {
    path: routes.search,
    element: <SearchScreen />,
  },
]);

export { routerEntries };
