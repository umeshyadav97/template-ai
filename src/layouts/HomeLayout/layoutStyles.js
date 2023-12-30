import { useTheme } from "@mui/material"

export const useStyles = () => {
  const theme = useTheme()
  return {
    main: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
      overflow: "auto",
      height: "90vh",
      marginTop: "85px"
    },
    Link: {
      fontFamily: "Inter Regular",
      fontSize: "1.6rem",
      color: "#000"
    },
    divider: {
      borderLeft: `1px solid #E4EAF1`,
      height: "3rem",
      margin: "0rem 2.4rem 0rem 1.6rem"
    },
    primary_button: {
      display: "flex",
      padding: "10px 20px",
      justifyContent: "center",
      alignItems: "center",
      gap: "1rem",
      borderRadius: "5px",
      fontSize: "1.6rem",
      lineHeight: "1.8rem",
      background: theme.palette.primary.main,
      color: "#fff",
      "&:hover": {
        background: theme.palette.primary.main
      },
      "@media (max-width: 600px)": {
        padding: "6px 6px"
      }
    },
    secondary_button: {
      color: theme.palette.primary.main,
      fontFamily: "Inter SemiBold",
      fontSize: "1.6rem",
      lineHeight: "24px"
    },
    logo_img: {
      maxWidth: "108px",
      maxHeight: "26px",
      width: "100%",
      cursor: "pointer"

      // "@media (max-width: 600px)": {
      //   maxWidth: "9.8rem",
      //   maxHeight: "1.6rem",
      //   // width: "100%"
      // }
    }
  }
}
