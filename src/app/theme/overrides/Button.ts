import {
  Components,
  buttonClasses,
  iconButtonClasses,
  svgIconClasses,
} from "@mui/material";
import { ClicheThemeType } from "../ClicheTheme";
import { Theme } from "@mui/material/styles";

const getMUIButtonOverride = ({
  colors,
  typography,
}: ClicheThemeType): Components<Omit<Theme, "components">> => ({
  MuiButton: {
    styleOverrides: {
      root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "12px 20px",
        gap: "10px",
        borderRadius: "40px",
        backgroundColor: colors.buttons.active,
        color: colors.background.white,
        "&:hover": {
          backgroundColor: colors.buttons.active,
          color: colors.background.white,
        },
        [`&.${buttonClasses.sizeLarge}`]: {
          ...typography.button.large,
        },
        [`&.${buttonClasses.sizeMedium}`]: {
          ...typography.button.medium,
        },
        [`&.${buttonClasses.sizeSmall}`]: {
          ...typography.button.small,
        },
        "&.Mui-disabled": {
          backgroundColor: colors.buttons.disable,
          color: colors.background.white,
        },
        [`&.${buttonClasses.outlined}`]: {
          backgroundColor: "transparent",
          color: colors.text.title,
          borderColor: colors.buttons.active,
          "&:hover": {
            backgroundColor: "transparent",
            color: colors.text.title,
            borderColor: colors.buttons.active,
          },
        },
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        backgroundColor: colors.buttons.active,
        color: colors.background.white,
        [`&.${iconButtonClasses.colorSecondary}`]: {
          backgroundColor: colors.background.white,
          color: colors.buttons.active,
          [`.${svgIconClasses.root}`]: {
            fill: colors.buttons.active,
          },
          "&:hover": {
            backgroundColor: colors.primary.solid.lighter,
          },
          "&:focus": {
            backgroundColor: colors.primary.solid.lighter,
          },
          "&:active": {
            backgroundColor: colors.primary.solid.lighter,
          },
        },
        borderRadius: "100%",
      },
    },
  },
});

export { getMUIButtonOverride };
