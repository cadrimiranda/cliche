import { BoxProps } from "@mui/material/Box";
import textFieldClasses from "@mui/material/TextField/textFieldClasses";
import { inputBaseClasses, outlinedInputClasses } from "@mui/material";

export const getSearchHeaderStyles = (): { [key: string]: BoxProps["sx"] } => {
  const mainStyle: BoxProps["sx"] = {
    mx: "-24px",
    transition: "background-color 1s ease",
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
      padding: "16px 32px",
      borderBottom: "1px solid",
      borderBottomColor: (t) => t.clicheTheme.colors.line,
      [`.${textFieldClasses.root}`]: {
        width: "85%",
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
          height: "150px",
          WebkitTransform: "scaleY(1)",
          transform: "scaleY(1)",
          WebkitTransformOrigin: "100% 0%",
          transformOrigin: "100% 0%",
          opacity: 1,
        },
        "100%": {
          height: "0px",
          WebkitTransform: "scaleY(0)",
          transform: "scaleY(0)",
          WebkitTransformOrigin: "100% 0%",
          transformOrigin: "100% 0%",
          opacity: 1,
        },
      },
      "@keyframes scale-out-ver-top": {
        "0%": {
          height: "150px",
          WebkitTransform: "scaleY(1)",
          transform: "scaleY(1)",
          WebkitTransformOrigin: "100% 0%",
          transformOrigin: "100% 0%",
          opacity: 1,
        },
        "100%": {
          height: "0px",
          WebkitTransform: "scaleY(0)",
          transform: "scaleY(0)",
          WebkitTransformOrigin: "100% 0%",
          transformOrigin: "100% 0%",
          opacity: 1,
        },
      },
    },
  };
};
