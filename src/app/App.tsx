import ClicheThemeProvider from "./theme/ClicheThemeProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GlobalStyles from "@mui/material/GlobalStyles";
import { SplashScreen } from "../pages/splash/SplashScreen";
import { LoginScreen } from "../pages/login/LoginScreen";
import { OnboardingScreen } from "../pages/onboarding/OnboardingScreen";

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
