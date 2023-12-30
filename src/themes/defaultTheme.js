// default app theme and colors
export const defaultTheme = {
  palette: {
    primary: {
      main: "#C28C7E",
      secondary: "#DBA495",
      tertiary: "#F5D1C4",
      quaternary: "#FDF4F0",
      mainGradient:
        "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(241,249,246,1) 35%, #53389E 100%)"
    },
    secondary: {
      main: "#F2E6D5",
      secondary: "#FFFAF5",
      tertiary: "#FFFEFC",
      default: "#344054",
      button: "#F04438"
    },
    error: {
      main: "#B42318"
    },
    background: {
      main: "#FFFFFF",
      blue: "#1570EF",
      blue2: "#EFF8FF",
      blue3: "#F2E6D5",
      default: "#FFFFFF",
      secondary: "#FFFEFC",
      gray: "#F2F2F2",
      gray2: "#EDECEC",
      gray3: "#E8E8E8",
      green: "#32D583",
      contctus: "#F8E1C1",
      primary_500: "#C28C7E",
      primary_700: "#ECFDF3",
      primary: "#F8E1C1",
      olive_100: "#D0D7C9",
      blush_100: "#E0C5BE",
      purple_400: "#E5E7EB"
    },
    text: {
      main: "#111111",
      mainWhite: "#FFFF",
      gray_700: "#344054",
      gray: "#858585",
      gray2: "#979797",
      gray3: "#EAECF0",
      gray4: "#667085",
      gray5: "#1D2939",
      gray6: "#9B9FB1",
      white: "#EEEEEE",
      blue: "#1570EF",
      blue3: "#6C00EA",
      blue4: "#337AB7",
      black: "#181717",
      black2: "#3C3E49",
      black3: "#1D2939",
      black4: "#262626",
      black5: "#8a645a",
      primary: "#000",
      secondary: "#667085",
      green: "#6CE9A6",
      green2: "#027A48",
      primary_500: "#C28C7E",
      gray_600: "#475467"
    }
  },

  typography: {
    fontFamily: "Inter Regular",
    h1: {
      fontSize: "5.4rem",
      lineHeight: 74 / 34,
      // fontWeight: 600
      fontFamily: "Inter SemiBold"
    },
    h2: {
      fontSize: "4.8rem",
      lineHeight: 60 / 48,
      // fontWeight: 600
      fontFamily: "Inter Bold",
      "@media (max-width:400px)": {
        fontSize: "3.8rem",
        lineHeight: "normal"
      }
    },
    h3: {
      fontSize: "3.6rem",
      lineHeight: 44 / 36,
      // fontWeight: 600
      fontFamily: "Inter SemiBold"
    },
    h4: {
      fontSize: "2.4rem",
      lineHeight: 24 / 32,
      // fontWeight: 500
      fontFamily: "Inter Medium"
    },
    h5: {
      fontSize: "1.8rem",
      lineHeight: "2.8rem",
      // fontWeight: 600
      fontFamily: "Inter SemiBold"
    },
    h6: {
      fontSize: "2rem",
      lineHeight: 30 / 20,
      fontFamily: "Inter Regular" // fontWeight:400
    },
    h7: {
      fontSize: "1.4rem",
      lineHeight: "2.4rem",
      // fontWeight: 500
      fontFamily: "Inter Medium"
    },
    h8: {
      fontSize: "2.4rem",
      lineHeight: "3.2rem",
      // fontWeight: 600
      fontFamily: "Inter SemiBold"
    },
    h9: {
      fontSize: "2rem",
      lineHeight: "3rem",
      // fontWeight: 700
      fontFamily: "Inter Bold"
    },
    h10: {
      fontSize: "3.6rem",
      lineHeight: "4.4rem",
      // fontWeight: 500
      fontFamily: "Inter Medium"
    },
    h11: {
      fontSize: "4.8rem",
      lineHeight: "6rem",
      // fontWeight: 700
      fontFamily: "Inter Bold"
    },
    h12: {
      fontSize: "1.4rem",
      lineHeight: "2rem",
      fontFamily: "Inter Regular" // fontWeight:400
    },
    h13: {
      fontSize: "3rem",
      lineHeight: 38 / 30,
      // fontWeight: 500
      fontFamily: "Inter Medium"
    },
    h14: {
      fontSize: "4.6rem",
      lineHeight: 38 / 30,
      // fontWeight: 600
      fontFamily: "Inter SemiBold"
    },
    p1: {
      fontSize: "1.6rem",
      lineHeight: "2.4rem",
      fontFamily: "Inter Regular" // fontWeight:400
    },
    p2: {
      fontSize: "1.6rem",
      lineHeight: "2.4rem",
      fontFamily: "Inter Regular" // fontWeight:400
    },
    p3: {
      fontSize: "1.2rem",
      lineHeight: "1.8rem",
      fontFamily: "Inter Regular" // fontWeight:400
    },
    p4: {
      fontSize: "1.8rem",
      lineHeight: "2.8rem",
      fontFamily: "Inter Regular" // fontWeight:400
    },
    p5: {
      fontSize: "2rem",
      lineHeight: "3rem",
      // fontWeight: 500
      fontFamily: "Inter Medium"
    },
    p6: {
      fontSize: "1.6rem",
      lineHeight: "2.4rem",
      // fontWeight: 600
      fontFamily: "Inter SemiBold"
    },
    button: {
      fontSize: 14,
      lineHeight: 18 / 13,
      letterSpacing: 0.2,
      // fontWeight: 500
      fontFamily: "Inter Medium",
      textTransform: "unset"
    },
    c1: {
      fontFamily: "Inter Medium",
      fontSize: "1.6rem",
      lineHeight: 28 / 16
    },
    c2: {
      fontFamily: "Inter SemiBold",
      fontSize: "1.6rem",
      lineHeight: "2.8rem"
    },
    c3: {
      fontFamily: "Inter Regular",
      fontSize: "1.6rem",
      lineHeight: "2.8rem"
    },
    label: {
      fontSize: 11,
      lineHeight: 15 / 11,
      // fontWeight: 600
      fontFamily: "Inter SemiBold"
    }
  },
  breakpoints: {
    values: {
      xs: 320, // Extra small devices (portrait phones)
      sm: 600, // Small devices (landscape phones)
      md: 960, // Medium devices (tablets)
      lg: 1280, // Large devices (desktops)
      xl: 1920 // Extra large devices (large desktops)
    }
  },
  // shadows: Array(25).fill("none"),
  overrides: {}
}
