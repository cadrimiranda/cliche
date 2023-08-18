type ColorSchema = {
  solid: {
    main: string;
    dark: string;
    darker: string;
    light: string;
    lighter: string;
  };
  transparent: {
    "8": string;
    "16": string;
    "32": string;
    "48"?: string;
  };
};

type Typography = {
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
  color?: string;
};

export type ClicheThemeType = {
  colors: {
    primary: ColorSchema;
    secondary: ColorSchema;
    info: ColorSchema;
    success: ColorSchema;
    warning: ColorSchema;
    error: ColorSchema;
    white: string;
    text: {
      title: string;
      body: string;
      disabled: string;
    };
    background: {
      white: string;
      main: string;
      mainDark: string;
    };
    line: string;
    legend1: string;
    legend2: string;
    legend3: string;
    buttons: {
      active: string;
      disable: string;
    };
  };
  typography: {
    h1: Typography;
    h2: Typography;
    h3: Typography;
    h4: Typography;
    h5: Typography;
    h6: Typography;
    bodyG: Typography;
    bodyM: Typography;
    bodyP: Typography;
    link: Typography;
    button: {
      large: Typography;
      medium: Typography;
      small: Typography;
      link: Typography;
    };
    history: {
      banner: Typography;
      tags: Typography;
      text: Typography;
    };
  };
};

const linkTypography = {
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "21px",
};

const textBody = "#637381";

export const ClicheThemeVars: ClicheThemeType = {
  colors: {
    primary: {
      solid: {
        lighter: "#FFE2FA",
        light: "#FBB0ED",
        main: "#FF77E6",
        dark: "#DB3CAE",
        darker: "#DB3CAE",
      },
      transparent: {
        "8": "rgba(255, 119, 230, 0.08)",
        "16": "rgba(255, 119, 230, 0.16)",
        "32": "rgba(255, 119, 230, 0.32)",
        "48": "rgba(255, 119, 230, 0.48)",
      },
    },
    secondary: {
      solid: {
        lighter: "#DEE7FF",
        light: "#B0C6FF",
        main: "#7694FF",
        dark: "#3E71D2",
        darker: "#27448E",
      },
      transparent: {
        "8": "rgba(51, 102, 255, 0.08)",
        "16": "rgba(51, 102, 255, 0.16)",
        "32": "rgba(51, 102, 255, 0.32)",
        "48": "rgba(51, 102, 255, 0.48)",
      },
    },
    info: {
      solid: {
        lighter: "#CAFDFD",
        light: "#9AECFB",
        main: "#0CBEE4",
        dark: "#006C9C",
        darker: "#003768",
      },
      transparent: {
        "8": "rgba(0, 184, 217, 0.08)",
        "16": "rgba(0, 184, 217, 0.16)",
        "32": "rgba(0, 184, 217, 0.32)",
        "48": "rgba(0, 184, 217, 0.48)",
      },
    },
    success: {
      solid: {
        lighter: "#D8FBDE",
        light: "#86E8AB",
        main: "#36B37E",
        dark: "#1B806A",
        darker: "#0A5554",
      },
      transparent: {
        "8": "rgba(54, 179, 126, 0.08)",
        "16": "rgba(54, 179, 126, 0.16)",
        "32": "rgba(54, 179, 126, 0.32)",
        "48": "rgba(54, 179, 126, 0.48)",
      },
    },
    warning: {
      solid: {
        lighter: "#FFF5CC",
        light: "#FFE6B2",
        main: "#FFC550",
        dark: "#B76E00",
        darker: "#7A4100",
      },
      transparent: {
        "8": "rgba(255, 171, 0, 0.08)",
        "16": "rgba(255, 171, 0, 0.16)",
        "32": "rgba(255, 171, 0, 0.32)",
        "48": "rgba(255, 171, 0, 0.48)",
      },
    },
    error: {
      solid: {
        lighter: "#FFE9D5",
        light: "#FFAC82",
        main: "#FF5630",
        dark: "#B71D18",
        darker: "#7A0916",
      },
      transparent: {
        "8": "rgba(255, 86, 48, 0.08)",
        "16": "rgba(255, 86, 48, 0.16)",
        "32": "rgba(255, 86, 48, 0.32)",
        "48": "rgba(255, 86, 48, 0.48)",
      },
    },
    white: "#FFFFFF",
    text: {
      title: "#2E3C4B",
      body: textBody,
      disabled: textBody,
    },
    background: {
      main: "#F8F8F8",
      mainDark: "#EBEBEB",
      white: "#FFFFFF",
    },
    line: "#E0E0E0",
    legend1: "#5BE3AA",
    legend2: "#9361FF",
    legend3: "#FF9E80",
    buttons: {
      active: "#212B36",
      disable: "#A6B0BB",
    },
  },
  typography: {
    h1: {
      fontSize: "40px",
      fontWeight: 700,
      lineHeight: "44px",
      color: "#fff",
    },
    h2: {
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: "38.4px",
      color: "#fff",
    },
    h3: {
      fontSize: "28px",
      fontWeight: 700,
      lineHeight: "33.6px",
      color: "#fff",
    },
    h4: {
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "28.8px",
      color: "#fff",
    },
    h5: {
      fontSize: "22px",
      fontWeight: 700,
      lineHeight: "28.6px",
      color: "#fff",
    },
    h6: {
      fontSize: "16px",
      fontWeight: 700,
      lineHeight: "17.6px",
    },
    bodyG: {
      fontSize: "16px",
      fontWeight: 300,
      lineHeight: "24px",
    },
    bodyM: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "21px",
    },
    bodyP: {
      fontSize: "12px",
      fontWeight: 300,
      lineHeight: "18px",
    },
    link: linkTypography,
    button: {
      large: {
        fontSize: "20px",
        fontWeight: 500,
        lineHeight: "30px",
      },
      medium: {
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: "24px",
      },
      small: {
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: "21px",
      },
      link: linkTypography,
    },
    history: {
      banner: {
        fontSize: "10px",
        fontWeight: 900,
        lineHeight: "12px",
      },
      tags: {
        fontSize: "10px",
        fontWeight: 600,
        lineHeight: "12px",
      },
      text: {
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "21px",
      },
    },
  },
};
