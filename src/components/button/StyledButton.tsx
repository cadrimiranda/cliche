import MUIButton, { ButtonProps as MUIButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { ClicheThemeType } from "../../app/theme/ClicheTheme";
import { ButtonProps } from "./index";

type ButtonStyledType = MUIButtonProps & {
  clicheTheme: ClicheThemeType;
  cSize: ButtonProps["size"];
};

const StyledMUIButton = styled(MUIButton)<ButtonStyledType>(
  ({ clicheTheme, cSize = "medium" }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "12px 20px",
    gap: "10px",
    borderRadius: "40px",
    backgroundColor: clicheTheme.colors.buttons.active,
    color: clicheTheme.colors.background.white,
    ...clicheTheme.typography.button[cSize],
  })
);

export { StyledMUIButton };
