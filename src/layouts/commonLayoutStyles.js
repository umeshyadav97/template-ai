export const useStyles = () => {
  return {
    main: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
      overflow: "hidden"
    },

    gridContainer: {
      maxHeight: "calc(100vh - 74px)"
    },

    sideSectionContainer: {
      position: "sticky",
      top: 0,
      overflowY: "auto",
      paddingBottom: "60px"
    },

    childrenContainer: {
      maxHeight: "100vh",
      overflowY: "auto"
      // paddingBottom: "80px"
    }
  }
}
