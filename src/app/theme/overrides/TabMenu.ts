import { Components, tabClasses } from "@mui/material";
import { ClicheThemeType } from "../ClicheTheme";
import { Theme } from "@mui/material/styles";

export const getMUITabsOverride = ({
  colors,
}: ClicheThemeType): Components<Omit<Theme, "components">> => ({
  MuiTab: {
    styleOverrides: {
      root: {
        [`&.${tabClasses.selected}`]: {
          fontWeight: "bold",
          color: colors.text.title,
        },
      },
    },
  },
});
