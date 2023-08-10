import ClicheThemeProvider from "./theme/ClicheThemeProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GlobalStyles from "@mui/material/GlobalStyles";
import { SplashScreen } from "../pages/splash/SplashScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SplashScreen />,
  },
]);

function App() {
  return (
    <ClicheThemeProvider>
      <GlobalStyles styles={{ body: { margin: 0 } }} />
      <RouterProvider router={router} />
    </ClicheThemeProvider>
  );
}

export default App;
