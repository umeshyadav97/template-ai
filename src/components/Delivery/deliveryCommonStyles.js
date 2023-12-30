import { useTheme } from "@mui/material"
export const useStyles = () => {
  const theme = useTheme()
  return {
    banner_wraaper: {
      margin: "40px 0",
      padding: "40px",
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr",
      gap: "20px",
      alignItems: "baseline",
      [theme.breakpoints.down("lg")]: {
        padding: "24px",
        gridTemplateColumns: "1.5fr 1fr"
      },
      [theme.breakpoints.down("md")]: {
        padding: "24px",
        gridTemplateColumns: "1fr"
      },
      [theme.breakpoints.down("sm")]: {
        padding: "24px",
        gridTemplateColumns: "1fr"
      }
    },
    banner_box: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap"
    },
    estimation_box: {
      padding: "24px",
      backgroundColor: theme.palette.background.default,
      borderRadius: "8px",
      border: "1px solid #dcdcdc"
    },
    plan_wrapper: {
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      margin: "auto",
      maxWidth: "616px"
    },
    price_box: {
      padding: "24px",
      display: "flex",
      flexDirection: "column",
      gap: "36px",
      border: "1px solid",
      borderColor: theme.palette.background.blue
    },
    price_header_box: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    },
    list_text: {
      fontSize: 14,
      lineHeight: "20px",
      fontWeight: 400,
      color: theme?.palette?.text?.gray5
    },
    price_text: {
      fontSize: "2.6rem",
      lineHeight: "2.9rem",
      fontWeight: 600
    },
    price_number_text: {
      fontSize: "2.6rem",
      lineHeight: "2.9rem",
      fontWeight: 400
    },
    check_box: {
      display: "flex",
      alignItems: "center",
      gap: "24px"
    },
    logo_box: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      padding: "24px",
      border: "1px solid",
      borderRadius: "8px",
      borderColor: theme.palette.background.secondary,
      backgroundColor: theme.palette.background.secondary,
      height: "100px",
      width: "100px",
      cursor: "pointer",
      "&:hover": {
        boxShadow: "0px 0px 5px 4px #f2f2f2"
      }
    },
    bg_blue: {
      backgroundColor: theme.palette.background.blue3
    },
    bg_light_blue: {
      backgroundColor: theme.palette.background.secondary
    },
    drawer_box: {
      display: "flex",
      gap: "24px",
      flexWrap: "wrap",
      padding: "24px 16px"
    },
    drawerPaper: {
      width: 120,
      maxWidth: "80%", // Adjust this value as needed
      overflowX: "hidden"
    },
    selectDropdown: {
      marginTop: "10px",
      width: "100%",
      backgroundColor: theme.palette.background.default
    },
    typeText: {
      fontFamily: "Inter Medium !important",
      fontSize: "1.4rem !important",
      lineHeight: "2rem !important"
    },
    priceText: {
      fontFamily: "Inter Regular !important",
      fontSize: "1.6rem !important",
      lineHeight: "2rem !important"
    }
  }
}
