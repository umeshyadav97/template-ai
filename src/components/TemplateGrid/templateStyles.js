import { useTheme } from "@emotion/react"

export const useStyles = () => {
  const theme = useTheme()
  return {
    card: {
      border: "1px solid #D0D5DD",
      minHeight: "100%"
      // padding: "16px"
    },
    card_header: {
      display: "flex",
      justifyContent: "space-between"
    },
    card_logo_box: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "10px"
    },
    card_price_box: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "10px",
      marginTop: "10px"
    },
    card_button: {
      border: "1px solid #D0D5DD",
      padding: "10px 16px",
      fontSize: "14px",
      fontWeight: 500,
      color: "#344054"
    },
    boxStyle: {
      position: "fixed",
      bottom: "20px",
      left: "58%",
      transform: "translateX(-50%)",
      backgroundColor: "#fff",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
      zIndex: 999,
      width: "55vw",
      [theme.breakpoints.down("md")]: {
        width: "75vw"
      },

      "@media (max-width: 956px)": {
        left: "50%"
      }
    },
    logo_box: {
      width: "40px",
      height: "40px"
    },
    logo_img: {
      width: "100%",
      height: "auto"
    },
    price_text: {
      fontFamily: "Inter Medium",
      fontSize: "1.8rem",
      lineHeight: "2.8rem",
      fontWeight: 500
    },
    thumbnail: {
      objectFit: "cover",
      width: "249px",
      height: "152px",
      margin: "auto",
      filter: "grayscale(60%)"
    }
  }
}
