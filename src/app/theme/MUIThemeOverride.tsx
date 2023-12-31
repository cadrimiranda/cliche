import React from "react";
import { ThemeOptions, createTheme, ThemeProvider } from "@mui/material/styles";
import { PropsWithChildren } from "../../shared/types";
import { useClicheTheme } from "./ClicheThemeProvider";
import { ClicheThemeType } from "./ClicheTheme";
import { getMUITextFieldOverride } from "./overrides/TextField";
import { getMUIButtonOverride } from "./overrides/Button";
import { getMUITabsOverride } from "./overrides/TabMenu";
import { getMUILinkOverride } from "./overrides/Link";
import { getMUIChipOverride } from "./overrides/Chip";
import { getMUITypographyOverride } from "./overrides/Typography";

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
    text: {
      primary: theme.colors.text.title,
      secondary: theme.colors.text.body,
      disabled: theme.colors.text.disabled,
    },
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
    fontFamily: "Public Sans, sans-serif",
    h1: theme.typography.h1,
    h2: theme.typography.h2,
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
    h6: theme.typography.h6,
    body1: theme.typography.bodyG,
    body2: theme.typography.bodyM,
  },
  components: {
    ...getMUITextFieldOverride(theme),
    ...getMUIButtonOverride(theme),
    ...getMUITabsOverride(theme),
    ...getMUILinkOverride(theme),
    ...getMUIChipOverride(theme),
    ...getMUITypographyOverride(theme),
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
