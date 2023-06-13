import { useClicheTheme } from "../../app/theme/ClicheThemeProvider";
import { StyledMUIButton } from "./StyledButton";
import { ButtonProps as MUIButtonProps } from "@mui/material/Button";

export type ButtonProps = Omit<MUIButtonProps, "size"> & {
  size?: "large" | "medium" | "small" | "link";
};

const Button = ({ size = "medium", children }: ButtonProps) => {
  const clicheTheme = useClicheTheme();

  return (
    <StyledMUIButton clicheTheme={clicheTheme} cSize={size}>
      {children}
    </StyledMUIButton>
  );
};

export { Button };
