import { Components } from "@mui/material";
import { ClicheThemeType } from "../ClicheTheme";
import { Theme } from "@mui/material/styles";

export const getMUILinkOverride = ({
  colors,
}: ClicheThemeType): Components<Omit<Theme, "components">> => ({
  MuiLink: {
    styleOverrides: {
      root: {
        color: colors.text.title,
        textDecorationColor: colors.text.title,
      },
    },
  },
});
