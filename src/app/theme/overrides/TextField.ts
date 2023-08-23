import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { ClicheThemeType } from "../ClicheTheme";
import { inputLabelClasses } from "@mui/material/InputLabel";
import { Components } from "@mui/material/styles/components";
import { Theme } from "@mui/material/styles";
import { inputAdornmentClasses, inputBaseClasses } from "@mui/material";

const getMUITextFieldOverride = ({
  colors,
}: ClicheThemeType): Components<Omit<Theme, "components">> => ({
  MuiTextField: {
    styleOverrides: {
      root: {
        width: "100%",
        "--TextBody": colors.text.body,
        "--TextField-brandBorderColor": colors.secondary.solid.main,
        "--TextField-brandBorderHoverColor": colors.legend2,
        "--TextField-brandBorderFocusedColor": colors.legend2,
        [`.${inputAdornmentClasses.positionStart}`]: {
          color: colors.primary.solid.main,
        },
        [`.${inputBaseClasses.colorSecondary}`]: {
          backgroundColor: colors.white,
          borderRadius: "50px",
          [`.${inputAdornmentClasses.positionStart}`]: {
            color: "var(--TextBody)",
          },
          [`.${inputBaseClasses.input}`]: {
            color: "var(--TextBody)",
            borderRadius: "50px",
          },
          [`.${outlinedInputClasses.notchedOutline}`]: {
            borderRadius: "50px",
            borderColor: colors.white,
            color: "var(--TextBody)",
          },
        },
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        [`&:hover .${inputLabelClasses.outlined}`]: {
          color: "var(--TextBody)",
        },
        [`&.Mui-focused`]: {
          color: "var(--TextBody)",
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      notchedOutline: {
        borderColor: "var(--TextField-brandBorderColor)",
        color: "var(--TextField-brandBorderHoverColor)",
      },
      root: {
        borderRadius: "8px",
        "&:hover": {
          [`.${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "var(--TextField-brandBorderHoverColor)",
          },
        },
        "&.Mui-focused": {
          [`.${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "var(--TextField-brandBorderFocusedColor)",
          },
        },
        "&.Mui-disabled": {
          [`.${outlinedInputClasses.notchedOutline}`]: {
            backgroundColor: colors.buttons.disable,
          },
        },
      },
    },
  },
  MuiInputBase: {},
});

export { getMUITextFieldOverride };
