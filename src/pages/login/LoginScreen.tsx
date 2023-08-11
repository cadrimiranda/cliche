import styled from "@mui/material/styles/styled";
import { LoginHeader } from "./components/LoginHeader";
import { LoginTabMenu } from "./components/TabMenu";

const LoginScreenContainer = styled("div")(({ theme: { clicheTheme } }) => ({
  backgroundColor: clicheTheme.colors.background.white,
  width: "100%",
  height: "100vh",
}));

export const LoginScreen = (): JSX.Element => {
  return (
    <LoginScreenContainer>
      <LoginHeader />
      <LoginTabMenu />
    </LoginScreenContainer>
  );
};
