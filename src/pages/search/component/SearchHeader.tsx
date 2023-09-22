import Box, { BoxProps } from "@mui/material/Box";
import { useClicheTheme } from "../../../app/theme/ClicheThemeProvider";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import textFieldClasses from "@mui/material/TextField/textFieldClasses";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { useState } from "react";
import { inputBaseClasses, outlinedInputClasses } from "@mui/material";

const EyeIcon = () => {
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
        right: "-110px",
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

const getStyles = (): { [key: string]: BoxProps['sx'] } => {
  const mainStyle: BoxProps['sx'] = {
    transition: "background-color 1s ease"
  };

  return {
    background: {
      ...mainStyle,
      padding: "16px 32px 24px 32px",
      backgroundColor: (t) => t.palette.warning.main,
      position: "sticky",
      top: 0,
      borderBottomRightRadius: "50px",
    },
    backgroundSearch: {
      ...mainStyle,
      padding: '16px 32px',
      borderBottom: '1px solid',
      borderBottomColor: t => t.clicheTheme.colors.line,
      [`.${textFieldClasses.root}`]: {
        width: '85%',
        [`.${inputBaseClasses.colorSecondary}`]: {
          borderRadius: "8px",
          backgroundColor: "#ECECEC",
          [`.${outlinedInputClasses.notchedOutline}`]: {
            borderRadius: "8px",
          },
        },
      },
    },
    gridOut: {
      WebkitAnimation:
        "scale-out-ver-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
      animation:
        "scale-out-ver-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
      "@-webkit-keyframes scale-out-ver-top": {
        "0%": {
          height: '150px',
          WebkitTransform: "scaleY(1)",
          transform: "scaleY(1)",
          WebkitTransformOrigin: "100% 0%",
          transformOrigin: "100% 0%",
          opacity: 1
        },
        "100%": {
          height: '0px',
          WebkitTransform: "scaleY(0)",
          transform: "scaleY(0)",
          WebkitTransformOrigin: "100% 0%",
          transformOrigin: "100% 0%",
          opacity: 1
        }
      },
      "@keyframes scale-out-ver-top": {
        "0%": {
          height: '150px',
          WebkitTransform: "scaleY(1)",
          transform: "scaleY(1)",
          WebkitTransformOrigin: "100% 0%",
          transformOrigin: "100% 0%",
          opacity: 1
        },
        "100%": {
          height: '0px',
          WebkitTransform: "scaleY(0)",
          transform: "scaleY(0)",
          WebkitTransformOrigin: "100% 0%",
          transformOrigin: "100% 0%",
          opacity: 1
        }
      }
    }
  }
}

export const SearchHeader = () => {
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchInteract = () => {
    setIsSearching(true);
  }

  const { background, backgroundSearch, gridOut } = getStyles();

  return (
    <Box
      sx={isSearching ? backgroundSearch : background}
    >
      <Grid2
        container
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-end"
        flexWrap="nowrap"
        sx={isSearching ? gridOut : {}}
      >
        <Typography
          color={(t) => t.clicheTheme.colors.buttons.active}
          variant="h1"
          sx={{
            width: "50%",
          }}
        >
          QUEM PROCURA ACHA
        </Typography>
        <EyeIcon />
      </Grid2>
      <Grid2 container flexDirection="row" alignItems="center" justifyContent="space-between">
        {
          isSearching ? (
            <IconButton onClick={() => setIsSearching(false)} color="secondary">
              <ArrowBack />
            </IconButton>
          ) : null
        }
        <TextField
          placeholder="Pesquise aqui"
          sx={{ mt: isSearching ? '0' : "14px" }}
          color="secondary"
          onClick={handleSearchInteract}
          onFocus={handleSearchInteract}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid2>
    </Box>
  );
};
