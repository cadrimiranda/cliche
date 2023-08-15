import { Typography } from "@mui/material";
import styled from "@mui/material/styles/styled";
import { useClicheTheme } from "../../../app/theme/ClicheThemeProvider";

const LoginHeaderContainer = styled("div")(({ theme: { clicheTheme } }) => ({
  backgroundColor: clicheTheme.colors.buttons.active,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-end",
  borderRadius: "0px 0px 50px 0px",
  height: "245px",
  padding: "40px 20px 24px 40px",

  h1: {
    width: "60%",
  },
}));

export const ClicheDropIcon = () => {
  const theme = useClicheTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="63"
      height="94"
      viewBox="0 0 63 94"
      fill="none"
    >
      <path
        fill={theme.colors.primary.solid.main}
        d="M10.8863 40.1985C1.33494 48.6908 -2.03613 62.37 2.48417 74.2694C7.00447 86.1434 18.2158 93.8983 31.0361 94H31.3681C36.5269 94 41.2004 93.0592 45.261 91.2031L45.3887 91.1523C45.5164 91.1014 45.6697 91.0252 45.7973 90.9489L46.206 90.7455C46.3336 90.6692 46.4869 90.5929 46.6146 90.5421C57.0853 85.1263 62.4229 74.8034 62.4995 59.9037C62.5506 48.1569 58.8219 38.9527 56.5746 34.4523H56.549L54.7103 31.1469C48.6066 20.0357 39.3361 11.0349 27.1288 4.42413C24.0386 2.74601 20.8463 1.2713 17.6285 0C19.4161 1.2713 21.0761 2.74601 22.634 4.42413C29.1718 11.4926 29.8614 20.6205 24.3961 28.2737C22.9915 30.2315 21.2038 32.1385 18.9054 34.0709C17.5774 35.1896 16.1983 36.1812 14.8958 37.122C13.4657 38.1645 12.1122 39.1306 10.9119 40.1985H10.8863Z"
      />
    </svg>
  );
};

export const LoginHeader = (): JSX.Element => {
  return (
    <LoginHeaderContainer>
      <Typography variant="h1" component="h1">
        Leitura contínua, mente completa.
      </Typography>
      <ClicheDropIcon />
    </LoginHeaderContainer>
  );
};
