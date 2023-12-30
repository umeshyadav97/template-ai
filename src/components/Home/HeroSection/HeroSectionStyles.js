import { useTheme } from "@mui/material"

export const useStyles = () => {
  const theme = useTheme()
  return {
    hero_container: {
      marginTop: "8rem",
      padding: "0 8rem",
      [theme.breakpoints.down("sm")]: {
        marginTop: "3rem",
        padding: "0 5rem"
      }
    },
    best_text: {
      fontSize: "5.8rem",
      lineHeight: "6.5rem",
      fontWeight: 400,
      fontFamily: "Lobster",
      color: "#AA7BF8",
      background: "#FCF3E4",
      padding: "0px 1.6rem",
      borderRadius: "40px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "3.6rem",
        lineHeight: "4.4rem"
      }
    },
    title_box: {
      display: "flex",
      // alignItems : "center"
      //   flexDirection: "column",
      //   gap: "3px",
      maxWidth: "800px"
    },
    hero_img: {
      maxWidth: "1114px",
      maxHeight: "569px",
      width: "100%",
      height: "100%"
    },
    arrow_icon: {
      maxHeight: "6.6rem",
      maxWidth: "6.6rem",
      cursor: "pointer"
    }
  }
}
