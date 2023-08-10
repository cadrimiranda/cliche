import React from "react";
import { MUIThemeProvider } from "./MUIThemeOverride";
import { PropsWithChildren } from "../../shared/types";
import { ClicheThemeType, ClicheThemeVars } from "./ClicheTheme";

const ClicheThemeContext =
  React.createContext<ClicheThemeType>(ClicheThemeVars);

export const useClicheTheme = () => React.useContext(ClicheThemeContext);

const ClicheThemeProvider: React.FunctionComponent<PropsWithChildren> = ({
  children,
}) => (
  <ClicheThemeContext.Provider value={ClicheThemeVars}>
    <MUIThemeProvider>{children}</MUIThemeProvider>
  </ClicheThemeContext.Provider>
);

export default ClicheThemeProvider;
