import ClicheThemeProvider from "./theme/ClicheThemeProvider";
import { RouterProvider } from "react-router-dom";
import GlobalStyles from "@mui/material/GlobalStyles";
import { routerEntries } from "./routerEntries";

function App() {
  return (
    <ClicheThemeProvider>
      <GlobalStyles
        styles={{
          body: { margin: 0 },
          "*": {
            boxSizing: "border-box",
            fontFamily: "Public Sans, sans-serif",
          },
        }}
      />
      <RouterProvider router={routerEntries} />
    </ClicheThemeProvider>
  );
}

export default App;
