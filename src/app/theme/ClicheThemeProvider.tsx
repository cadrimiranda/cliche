import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { MUIThemeOverride } from "./MUIThemeOverride";
import { PropsWithChildren } from "../../shared/types";
import { ClicheThemeType, ClicheThemeVars } from "./ClicheTheme";

const ClicheThemeContext =
  React.createContext<ClicheThemeType>(ClicheThemeVars);

export const useClicheTheme = () => React.useContext(ClicheThemeContext);

const ClicheThemeProvider: React.FunctionComponent<PropsWithChildren> = ({
  children,
}) => (
  <ClicheThemeContext.Provider value={ClicheThemeVars}>
    <ThemeProvider theme={MUIThemeOverride}>{children}</ThemeProvider>
  </ClicheThemeContext.Provider>
);

export default ClicheThemeProvider;
