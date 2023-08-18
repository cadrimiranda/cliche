import { Components } from "@mui/material";
import { ClicheThemeType } from "../ClicheTheme";
import { Theme } from "@mui/material/styles";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    historytag: true;
    historycover: true;
  }
}

export const getMUITypographyOverride = ({
  typography: {
    history: { tags, banner },
  },
}: ClicheThemeType): Components<Omit<Theme, "components">> => ({
  MuiTypography: {
    variants: [
      {
        props: { variant: "historytag" },
        style: tags,
      },
      {
        props: { variant: "historycover" },
        style: banner,
      },
    ],
  },
});
