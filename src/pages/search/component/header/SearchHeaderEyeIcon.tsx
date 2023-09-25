import { useClicheTheme } from "../../../../app/theme/ClicheThemeProvider";
import Box from "@mui/material/Box";

export const SearchHeaderEyeIcon = () => {
  const {
    colors: { orange, primary },
  } = useClicheTheme();

  return (
    <Box
      component="svg"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      sx={{
        top: "2px",
        right: "-125px",
        position: "absolute",
      }}
    >
      <g clip-path="url(#clip0_342_8530)">
        <path
          d="M0 67.11L63.92 115.38C97.18 140.5 143.08 140.5 176.34 115.38L240.26 67.11L176.34 18.84C143.07 -6.28 97.18 -6.28 63.92 18.84L0 67.11Z"
          fill={orange}
        />
        <path
          d="M140.274 87.2548C151.4 76.1288 151.4 58.0899 140.274 46.9639C129.148 35.8379 111.109 35.8379 99.9832 46.9639C88.8572 58.0899 88.8572 76.1288 99.9832 87.2548C111.109 98.3809 129.148 98.3809 140.274 87.2548Z"
          fill={primary.solid.main}
        />
      </g>
      <defs>
        <clipPath id="clip0_342_8530">
          <rect width="240.27" height="134.22" fill="white" />
        </clipPath>
      </defs>
    </Box>
  );
};
