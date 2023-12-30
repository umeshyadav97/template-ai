export const useStyles = () => {
  return {
    detail_container: {
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    },
    image_box: {
      display: "flex",
      alignItems: "center",
      gap: "12px"
    },
    p3_typography: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "flex-end"
    },
    inner_header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    },
    list_item_text: {
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "20px",
      color: "#667085"
    },
    grid_box: {
      // width: "100px",
      // height: "143px",
      padding: "10px",
      border: "0.5px solid #EAECF0",
      borderRadius: "5px",
      cursor: "pointer",
      "&:hover": {
        border: "1px solid #98A2B3"
      }
    },
    active_box: {
      border: "2px solid #98A2B3 !important"
    },
    image_container: {
      width: "100%",
      height: "100%",
      display: "flex"
      // alignItems: "center",
      // justifyContent: "center"
    },
    preview_img: {
      width: "51px",
      height: "109px",
      objectFit: "cover"
    },
    preview_web_img: {
      width: "88px",
      height: "64px",
      objectFit: "cover"
    },
    preview_img_box: {
      width: "185px",
      height: "379px",
      border: "1.5px solid #EAECF0",
      borderRadius: "5px",
      padding: "5px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    preview_img_web_box: {
      maxWidth: "430px",
      width: "100%",
      maxHeight: "274px",
      height: "calc(100% - 250px)",
      border: "1.5px solid #EAECF0",
      borderRadius: "5px",
      padding: "5px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },

    img_big: {
      width: "100%",
      height: "auto",
      display: "block"
    },
    bootom_box: {
      boxShadow: "0 -10px 10px -10px rgba(0, 0, 0, 0.5)",
      padding: "0"
    },
    logo_box: {
      width: "40px",
      height: "40px"
    },
    logo_img: {
      width: "100%",
      height: "auto"
    },
    icon_img_box: {
      width: "24px",
      height: "24px"
    },
    preview_items: {
      display: "flex",
      gap: "5px",
      flexWrap: "wrap",
      justifyContent: "center"
    },
    image_grid: {
      minHeight: "400px",
      display: "flex",
      alignItems: "center",
      width: "90%",
      justifyContent: "center"
    }
  }
}
