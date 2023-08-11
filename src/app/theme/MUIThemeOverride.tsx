import React from "react";
import { ThemeOptions, createTheme, ThemeProvider } from "@mui/material/styles";
import { PropsWithChildren } from "../../shared/types";
import { useClicheTheme } from "./ClicheThemeProvider";
import { ClicheThemeType } from "./ClicheTheme";
import { getMUITextFieldOverride } from "./overrides/TextField";
import { getMUIButtonOverride } from "./overrides/Button";
import { getMUITabsOverride } from "./overrides/TabMenu";

declare module "@mui/material/styles" {
  interface Theme {
    clicheTheme: ClicheThemeType;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    clicheTheme: ClicheThemeType;
  }
}

export const getThemeOverride = (theme: ClicheThemeType): ThemeOptions => ({
  clicheTheme: theme,
  palette: {
    mode: "light",
    primary: {
      main: "#FF77E6",
      light: "#FFE2FA",
      dark: "#980B92",
    },
    secondary: {
      main: "#7694FF",
      light: "#DEE7FF",
      dark: "#27448E",
    },
    info: {
      main: "#0CBEE4",
      light: "#CAFDFD",
      dark: "#003768",
    },
    success: {
      main: "#36B37E",
      light: "#D8FBDE",
      dark: "#0A5554",
    },
    warning: {
      main: "#FFC550",
      light: "#FFF5CC",
      dark: "#7A4100",
    },
    error: {
      main: "#FF5630",
      light: "#FFE9D5",
      dark: "#7A0916",
    },
  },
  typography: {
    h1: theme.typography.h1,
    h2: {
      fontSize: 32,
      fontWeight: 700,
      lineHeight: 38.4,
    },
    h3: {
      fontSize: 28,
      fontWeight: 700,
      lineHeight: 33.6,
    },
    h4: {
      fontSize: 24,
      fontWeight: 700,
      lineHeight: 28.8,
    },
    h5: {
      fontSize: 22,
      fontWeight: 700,
      lineHeight: 28.6,
    },
    h6: {
      fontSize: 16,
      fontWeight: 700,
      lineHeight: 17.6,
    },
    body1: {
      fontSize: 16,
      lineHeight: 24,
    },
    body2: {
      fontSize: 14,
      lineHeight: 21,
    },
  },
  components: {
    ...getMUITextFieldOverride(theme),
    ...getMUIButtonOverride(theme),
    ...getMUITabsOverride(theme),
  },
});

const MUIThemeProvider: React.FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const clicheTheme = useClicheTheme();
  const MUIThemeOverride = createTheme(getThemeOverride(clicheTheme));

  return <ThemeProvider theme={MUIThemeOverride}>{children}</ThemeProvider>;
};

export { MUIThemeProvider };
