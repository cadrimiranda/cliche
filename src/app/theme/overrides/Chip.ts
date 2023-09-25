import { Components, chipClasses } from "@mui/material";
import { ClicheThemeType } from "../ClicheTheme";
import { Theme } from "@mui/material/styles";

export const getMUIChipOverride = ({
  colors,
  typography,
}: ClicheThemeType): Components<Omit<Theme, "components">> => ({
  MuiChip: {
    styleOverrides: {
      root: {
        padding: "6px 0px",
        ...typography.bodyM,
        [`&.${chipClasses.colorPrimary}`]: {
          backgroundColor: colors.primary.solid.lighter,
        },
        [`&.${chipClasses.colorSecondary}`]: {
          backgroundColor: colors.buttons.active,
          color: colors.background.white,
        },
        [`&.${chipClasses.colorInfo}`]: {
          ...typography.history.tags,
          padding: "2px 10px",
          backgroundColor: colors.secondary.solid.lighter,
          color: colors.secondary.solid.main,
          [`.${chipClasses.label}`]: {
            padding: 0,
          },
        },
      },
    },
  },
});
