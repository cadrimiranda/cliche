import ClicheThemeProvider from "./theme/ClicheThemeProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GlobalStyles from "@mui/material/GlobalStyles";
import { SplashScreen } from "../pages/splash/SplashScreen";
import { LoginScreen } from "../pages/login/LoginScreen";
import { OnboardingScreen } from "../pages/onboarding/OnboardingScreen";
import { HomeScreen } from "../pages/home/HomeScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SplashScreen />,
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
  {
    path: "/onboarding",
    element: <OnboardingScreen />,
  },
  {
    path: "/home",
    element: <HomeScreen />,
  },
]);

function App() {
  return (
    <ClicheThemeProvider>
      <GlobalStyles
        styles={{
          body: { margin: 0 },
          "*": {
            boxSizing: "border-box",
          },
        }}
      />
      <RouterProvider router={router} />
    </ClicheThemeProvider>
  );
}

export default App;
