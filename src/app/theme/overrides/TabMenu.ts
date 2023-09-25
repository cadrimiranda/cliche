import { Components, tabClasses, buttonClasses } from "@mui/material";
import { ClicheThemeType } from "../ClicheTheme";
import { Theme } from "@mui/material/styles";

export enum ClicheTabClassNames {
  searchMenu = "cliche-searc-tab",
}

export const getMUITabsOverride = ({
  colors,
}: ClicheThemeType): Components<Omit<Theme, "components">> => ({
  MuiTabs: {
    styleOverrides: {
      root: {
        [`&.${ClicheTabClassNames.searchMenu}`]: {
          minHeight: "24px",
          [`.${tabClasses.root}`]: {
            textTransform: "capitalize",
            padding: "5px 10px",
            minHeight: "24px",
          },
        },
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        [`&.${tabClasses.selected}`]: {
          fontWeight: "bold",
          color: colors.text.title,
        },
        [`&.${ClicheTabClassNames.searchMenu}`]: {
          [`.${buttonClasses.root}`]: {
            textTransform: "lowercase",
          },
        },
      },
    },
  },
});
