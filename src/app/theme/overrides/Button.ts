import { buttonBaseClasses, buttonClasses } from "@mui/material";
import { ClicheThemeType } from "../ClicheTheme";

const getMUIButtonOverride = ({ colors, typography }: ClicheThemeType) => ({
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
});

export { getMUIButtonOverride };
