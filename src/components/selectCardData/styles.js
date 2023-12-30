import { useTheme } from "@mui/material"

export const useStyles = () => {
  const theme = useTheme()
  return {
    boxStyle: {
      position: "fixed",
      bottom: "20px",
      left: "52%",
      transform: "translateX(-50%)",
      backgroundColor: "#fff",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
      zIndex: 999,
      width: "55vw",
      [theme.breakpoints.down("md")]: {
        width: "75vw"
      }
    },
    boxStyleCenter: {
      position: "fixed",
      bottom: "20px",
      left: "51%",
      transform: "translateX(-50%)",
      backgroundColor: "#fff",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
      zIndex: 999,
      width: "55vw",
      [theme.breakpoints.down("md")]: {
        width: "75vw"
      }
    },
    typeText: {
      fontFamily: "Inter regular",
      fontWeight: "500",
      fontSize: "1.2rem",
      lineHeight: "1.8rem",
      color: "#98A2B3"
    },
    priceText: {
      fontFamily: "Inter regular",
      fontWeight: "400",
      fontSize: "1.2rem",
      lineHeight: "1.8rem",
      color: "#000"
    },
    priceText1: {
      fontFamily: "Inter regular",
      fontWeight: "400",
      fontSize: "1.2rem",
      lineHeight: "1.8rem",
      color: "#000",
      textDecoration: "line-through"
    },
    headingText: {
      fontFamily: "Inter regular",
      fontWeight: "700",
      fontSize: "1.8rem",
      lineHeight: "1.8rem"
    },
    descpText: {
      fontFamily: "Inter regular",
      fontWeight: "400",
      fontSize: "1.2rem",
      lineHeight: "1.8rem",
      textAlign: "center"
    }
  }
}
