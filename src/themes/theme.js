import { createTheme } from "@mui/material/styles"

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#6941C6"
    },
    secondary: {
      main: "#026AA2"
    },
    pink: { main: "#C11574" },
    midpink: { main: "#F670C7- #DD2590" },
    lightpink: { main: "#FAA7E0" },
    green: { main: "#55A55E" },
    lightGreen: { main: "#EDFFEF" },
    purple: { main: "#5E5499" },
    lightPurple: { main: "#F4F2FF" },
    blue1: { main: "#445EBE" },
    lightBlue: { main: "#EBEFFF" },
    error: { main: "#B42318" },
    complementing_Error: { main: "#FCEBEB" },
    success: { main: "#027A48" },
    complementing_Success: { main: "#EDFFEF" },

    black: { main: "#191919" },
    grey: { main: "#344054" },
    midGrey: { main: "#98A2B3" },
    lightGrey: { main: "#D0D5DD" },

    white: { main: "#ffffff" }
  },
  shadows: ["none", 0, 1, 2, 3, 4, 16, 24],
  overrides: {
    MuiTableRow: {
      root: {
        cursor: "pointer"
      }
    },
    MuiTableCell: {
      root: {
        borderColor: "#E9E9E9"
      },
      head: {
        background: "#fafafa !important"
      }
    },
    MuiTableSortLabel: {
      root: {
        alignItems: "flex-start"
      }
    },
    MuiTableFooter: {
      root: {
        background: "#fafafa !important"
      }
    },
    MUIDataTableHeadCell: {
      sortLabelRoot: {
        height: undefined
      }
    }
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Inter Regular !important"
        }
      }
    }
  }
})

export default theme
