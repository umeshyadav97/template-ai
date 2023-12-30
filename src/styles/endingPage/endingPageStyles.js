import { useTheme } from "@mui/material"
export const useStyles = () => {
  const theme = useTheme()
  return {
    mainFamily: {
      fontFamily: "Inter Medium"
    },
    main_container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "6rem 8rem 12rem 8rem",
      [theme.breakpoints.up("sm")]: {
        backgroundImage: `url(${"/images/backgrounds/bgLineImg.svg"})`,
        backgroundSize: "70% auto",
        backgroundPosition: "right",
        backgroundPositionY: "bottom",
        backgroundRepeat: "no-repeat"
      },
      [theme.breakpoints.down("md")]: {
        padding: "6rem 4rem 12rem 4rem"
      },
      [theme.breakpoints.down("sm")]: {
        padding: "6rem 3rem 12rem 3rem"
      }
    },
    star_box: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      border: "1px solid",
      borderColor: theme.palette.primary.main,
      borderRadius: "40px",
      padding: "0.8rem 1.3rem",
      width: "fit-content",
      backgroundColor: theme.palette.primary.quaternary,
      maxHeight: "36px"
    },
    mob_img: {
      maxWidth: "591px",
      width: "100%",
      maxHeight: "522px",
      height: "100%"
    },
    customised: {
      fontSize: "4.2rem",
      fontFamily: "Inter Medium"
    },
    title: {
      fontSize: theme.typography.p4.fontSize,
      fontFamily: "Inter SemiBold"
    },
    build: {
      fontSize: theme.typography.p4.fontSize,
      fontFamily: "Inter Regular"
    },
    desc: {
      fontSize: theme.typography.p2.fontSize,
      fontFamily: "Inter Regular"
    },
    description: {
      fontSize: theme.typography.h7.fontSize,
      fontFamily: "Inter Regular"
    },
    colorSection: {
      color: theme.palette.primary.main,
      fontSize: theme.typography.p4.fontSize,
      fontFamily: "Inter SemiBold"
    },
    contactBtn: {
      color: theme.palette.text.mainWhite,
      marginBottom: { xs: "10px", md: "0" },
      marginRight: { xs: "0", md: "10px" },
      background: theme.palette.background.primary_500,
      height: "48px",
      width: "193px",
      "@media (max-width: 500px)": {
        minWidth: "85vw"
      },
      "&:hover": {
        color: theme.palette.text.mainWhite,
        background: theme.palette.background.green
      }
    },
    buildBtn: {
      color: theme.palette.text.black,
      border: "2px solid #000",
      height: "48px",
      width: "193px",
      "@media (max-width: 500px)": {
        minWidth: "85vw",
        marginBottom: "2rem"
      }
    }
  }
}
