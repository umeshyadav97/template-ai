import { useTheme } from "@mui/material"

export const useStyles = () => {
  const theme = useTheme()
  return {
    quiz_box: {
      backgroundColor: theme.palette.background.gray3,
      padding: "5rem 10rem 14rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    main_box: {
      height: "60vh",
      overflow: "scroll",
      paddingBottom: "9rem",
      /* Hide the scrollbar for Firefox */
      scrollbarWidth: "none",
      /* Hide the scrollbar for IE and Edge */
      msOverflowStyle: "none",
      /* Hide the scrollbar for WebKit browsers (Chrome, Safari) */
      " &::-webkit-scrollbar": {
        display: "none"
      }
    },
    inner_main_box: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 23rem",
      marginBottom: "9rem",
      "@media (max-width: 1020px)": {
        padding: "0 10rem"
      },
      "@media (max-width: 700px)": {
        padding: "0 5rem"
      },
      "@media (max-width: 400px)": {
        padding: "0 2rem"
      }
    },
    inner_box: {
      backgroundColor: theme.palette.background.default,
      padding: "8rem 0 8rem",
      width: "100%",
      minHeight: "570px",
      borderRadius: "16px"
    },
    inner_flex: {
      padding: "8rem 0 0rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    },
    steps_container: {
      display: "grid",
      gridTemplateColumns: "repeat(3,minmax(0,1fr))",
      padding: "0 8rem",
      marginBottom: "2.8rem",
      "@media (max-width: 600px)": {
        gridTemplateColumns: "repeat(3,minmax(0,1fr))",
        marginBottom: "4rem",
        padding: "0 4rem"
      },
      "@media (max-width: 400px)": {
        padding: "0 2rem"
      }
    },
    step: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#D0D5DD",
      border: "1px solid #bdbdbd",
      borderRadius: "9999px",
      width: "1.6rem",
      height: "1.6rem",
      marginRight: "0.5rem"
      //   pointerEvents: "none"
    },
    border_line: {
      width: "4rem",
      height: "0.2rem",
      backgroundColor: "#D0D5DD",
      marginRight: "0.5rem"
    },

    active_line: {
      backgroundColor: theme?.palette?.primary?.main
    },

    activeStep: {
      width: "2.8rem",
      height: "2.8rem",
      backgroundColor: theme?.palette?.primary?.main,
      cursor: "pointer",
      borderColor: theme?.palette?.primary?.main
    },
    // line: {
    //   height: "2px",
    //   width: "20%",
    //   backgroundColor: "#bdbdbd",
    //   alignSelf: "center"
    // },
    category_container_type: {
      margin: "4rem 0 0",
      gap: "1.9rem",
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      maxWidth: "881px",
      "@media (max-width: 400px)": {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "1.9rem"
      }
    },
    category_container: {
      // display: "grid",
      margin: "4rem 0 0",
      // gridTemplateColumns: "repeat(4,minmax(0,1fr))",
      gap: "1.9rem",
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      maxWidth: "881px",
      "@media (max-width: 400px)": {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "1.9rem"
      }
      // "@media (max-width: 960px)": {
      //   gridTemplateColumns: "repeat(3,minmax(0,1fr))"
      // },
      // "@media (max-width: 600px)": {
      //   gridTemplateColumns: "repeat(2,minmax(0,1fr))"
      // }
    },
    funding_container: {
      display: "grid",
      margin: "6rem auto 0",
      gridTemplateColumns: "repeat(2,minmax(0,1fr))",
      maxWidth: "840px",
      width: "100%",
      gap: "0.9rem",
      "@media (max-width: 800px)": {
        gridTemplateColumns: "repeat(1,minmax(0,1fr))"
      }
    },
    category_box: {
      borderRadius: "8px",
      border: `1px solid ${theme.palette.primary.main}`,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      gap: "10px",
      padding: "24px",
      width: "157px"
    },
    hover_category_box: {
      boxShadow: "0px 0px 5px 4px #f2f2f2",
      backgroundColor: theme.palette.primary.tertiary
    },
    option_box: {
      borderRadius: "8px",
      border: `1px solid ${theme.palette.primary.main}`,
      // padding: "2.4rem 4.8rem",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
      // width: "35rem",
      // height: "18rem"
      // gap: "16px"
    },
    category_option_box: {
      borderRadius: "8px",
      border: `1px solid ${theme.palette.primary.main}`,
      // padding: "2.4rem 4.8rem",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
      // width: "35rem",
      // minHeight: "18rem"
      // gap: "16px"
    },
    inner_Category_box: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "16px",

      "@media (max-width: 600px)": {
        // padding: "2.4rem 4.8rem",
        maxHeight: "fit-content",
        height: "20rem"
      },
      "@media (max-width: 400px)": {
        // padding: "2.4rem 4.8rem",
        height: "auto"
      }
    },
    // option_box_height: {
    //   height: "20rem"
    // },
    funding_box: {
      borderRadius: "8px",
      border: `1px solid ${theme.palette.primary.main}`,
      // padding: "2.4rem 4.8rem",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      // width: "35rem",
      minHeight: "auto"
      // gap: "16px"
    },
    // funding_box_height: {
    //   height: "132px"
    // },
    back_box: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      gap: "16px",
      cursor: "pointer"
    },
    restart_box: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      cursor: "pointer"
    },
    radiobutton_box: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      marginTop: "4rem"
    },
    bg_img: {
      maxWidth: "913px",
      width: "100%",
      maxHeight: "243px",
      height: "100%"
    },
    button_box: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "18px",
      borderTop: "1px solid #DFE0E6",
      borderRadius: "16px"
    },
    next_button: {
      width: "254px",
      height: "81px",
      padding: "22px 32px",
      borderTopRightRadius: "0px",
      borderBottomRightRadius: "16px",
      background: theme.palette.background.green,
      color: theme.palette.text.black,
      "&:hover": {
        color: theme.palette.text.black,
        background: theme.palette.background.green
      }
    },
    button_style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontSize: "1.4rem",
      fontWeight: "500",
      lineHeight: "2rem",
      color: "#344054",
      border: "1px solid #D0D5DD",
      padding: "1rem 1.6rem",
      "&:hover": {
        background: theme.palette.background.default
      }
    },
    step_box: {
      width: "40px",
      height: "40px",
      backgroundColor: "#ECFDF3",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      "@media (max-width: 600px)": {
        // padding: "2.4rem 4.8rem",
        width: "30px",
        height: "30px"
      },
      "@media (max-width: 400px)": {
        // padding: "2.4rem 4.8rem",
        width: "25px",
        height: "25px"
      }
    }
  }
}
