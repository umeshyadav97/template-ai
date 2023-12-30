import { useTheme } from "@mui/material"

export const useStyles = () => {
  const theme = useTheme()
  return {
    featureText: {
      fontFamily: "Inter Medium",
      fontSize: "1.8rem",
      fontWeight: "500",
      paddingLeft: "10px"
    },
    numberBackground: {
      fontFamily: "Inter Regular",
      fontWeight: "600",
      fontSize: "1.4rem",
      color: "#000",
      backgroundColor: "#EAECF0",
      padding: "5px 10px",
      borderRadius: "100px",
      margin: "5px 0px 0px 5px"
    },
    productName: {
      fontFamily: "Inter Medium",
      fontWeight: "500",
      fontSize: "1.4rem",
      color: "#000"
    },
    featName: {
      fontFamily: "Inter Regular",
      fontWeight: "500",
      fontSize: "1.2rem",
      color: "#667085"
    },
    priceText: {
      fontFamily: "Inter Regular",
      fontWeight: "400",
      fontSize: "1.2rem",
      color: "#667085"
    },
    container: {
      margin: "3px 0px 0px 10px"
    },
    border: {
      display: "flex",
      padding: "10px",
      cursor: "pointer",
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: "8px",
      width: "200px"
    },
    box: { display: "flex", padding: "10px", cursor: "pointer" }
  }
}
