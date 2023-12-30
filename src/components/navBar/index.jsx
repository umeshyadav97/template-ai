import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/MenuRounded"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import Drawer from "@mui/material/Drawer"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import ListItem from "@mui/material/ListItem"
import List from "@mui/material/List"
import { Grid, Link, MenuItem, Select, Typography } from "@mui/material"
import { useNavbarController } from "./navbar.controller"
import Image from "next/image"
import Logo from "@local/assets/icons/logo.svg"
import SideSection from "../sideSection"
import { useStyles } from "./navbarStyles"
import { useRouter } from "next/router"
import AccordainSidebar from "../accordianSideSection"
const pages = [
  {
    name: "1. Choose a base",
    link: "/atelier"
  },
  {
    name: "2. Refine features",
    link: "/atelier/refine-features"
  },
  {
    name: "3. Plan delivery"
  }
]

const drawerWidth = 250

function NavBar({ isQuizRoute }) {
  const path = useRouter()
  const styles = useStyles()
  const {
    open,
    theme,
    classes,
    handleDrawerOpen,
    handleDrawerClose,
    navRef,
    navBackground,
    isLoggedIn,
    logout,
    currencies,
    handleChange,
    currenciesId,
    pathName,
    navigate,
    handleCurrency
  } = useNavbarController()

  React.useEffect(() => {
    handleCurrency()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const isRefineFeaturesRoute = path.pathname === "/atelier/refine-features"
  const isDelivery = path.pathname.includes("/atelier/delivery")

  return (
    <AppBar
      sx={[classes[navRef.current], { borderBottom: "1px solid #EAECF0", background: "#ffffff" }]}
      position="fixed">
      <Container maxWidth="xl" sx={{ padding: "0px !important" }}>
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
            margin: { xs: "1.6rem 0rem", md: isQuizRoute ? "1.6rem 0rem" : "0rem" }
          }}>
          <Grid container sm={4} md={2} sx={{ paddingLeft: { xs: "2.4rem", md: "1.6rem" } }}>
            {isDelivery ? null : (
              <>
                {!isQuizRoute && (
                  <Box sx={{ display: { xs: "flex", md: "none" } }}>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleDrawerOpen}
                      color={theme.palette.primary.main}
                      style={{ padding: "0rem 1.6rem 0rem 0rem" }}>
                      <MenuIcon sx={{ fontSize: "4rem" }} />
                    </IconButton>

                    <Drawer
                      sx={{
                        width: 0,
                        flexShrink: 0,
                        "& .MuiDrawer-paper": {
                          width: drawerWidth,
                          boxSizing: "border-box"
                        }
                      }}
                      variant="persistent"
                      anchor="left"
                      open={open}>
                      <IconButton
                        sx={{ display: "flex", justifyContent: "end", marginTop: "6px" }}
                        onClick={handleDrawerClose}>
                        {theme.direction === "ltr" ? (
                          <ChevronLeftIcon sx={{ fontSize: "3rem" }} />
                        ) : (
                          <ChevronRightIcon sx={{ fontSize: "3rem" }} />
                        )}
                      </IconButton>
                      <Grid item sx={{ margin: "-53px 0px 0px 10px" }}>
                        {isRefineFeaturesRoute ? <AccordainSidebar /> : <SideSection />}
                      </Grid>
                    </Drawer>
                  </Box>
                )}
              </>
            )}
            <Grid item display="flex" alignItems="center">
              <div style={styles.cursor}>
                <Image src={Logo} alt="logo" onClick={() => navigate("/")} />
              </div>
            </Grid>
          </Grid>
          <Grid container xs={10} sx={{ paddingRight: { xs: "2.4rem", md: "1.6rem" } }}>
            <Grid container xs={8}>
              {!isQuizRoute && (
                <Grid
                  item
                  sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                  style={styles.gridContainer}>
                  <List style={{ my: 2, color: "#667085", display: "flex" }}>
                    {pages.map((page, idx) => (
                      <React.Fragment key={idx}>
                        <ListItem sx={{ width: "auto" }}>
                          <Link
                            underline="none"
                            color={
                              (pathName === "/atelier" || pathName === "/") && idx === 0
                                ? "#000"
                                : pathName === "/atelier/refine-features" && idx <= 1
                                ? "#000"
                                : pathName.split("/")[2] === "delivery" && idx <= 2
                                ? "#000"
                                : "#667085"
                            }
                            href={pathName === "/atelier" || pathName === "/" ? null : page.link}>
                            <Typography
                              sx={{
                                fontSize: "1.6rem",
                                fontWeight: "500",
                                lineHeight: "1.8rem"
                              }}>
                              {page.name}
                            </Typography>
                          </Link>
                        </ListItem>
                        {idx < pages.length - 1 && (
                          <Grid
                            item
                            display="flex"
                            alignItems="center"
                            pb={1}
                            color={
                              pathName === "/atelier/refine-features"
                                ? idx <= 1
                                  ? "#000"
                                  : "#667085"
                                : pathName.split("/")[2] === "delivery"
                                ? idx <= 1
                                  ? "#000"
                                  : "#667085"
                                : "#667085"
                            }>
                            ............
                          </Grid>
                        )}
                      </React.Fragment>
                    ))}
                  </List>
                </Grid>
              )}
            </Grid>
            <Grid container xs={4} justifyContent="flex-end" alignItems="center">
              {!isLoggedIn && (
                <Grid container display="flex" justifyContent="flex-end" spacing={2}>
                  {/* <Grid item>
                <Button
                  color="primary"
                  // onClick={() => navigate("/auth/login")}
                  className={navBackground}
                  sx={{
                    color: theme.palette.secondary.default,
                    marginRight: "10px",
                    border: "1px solid #D0D5DD",
                    height: "37px"
                  }}>
                  Talk to our experts
                </Button>
              </Grid> */}

                  <Grid item>
                    <Select
                      labelId="currency-label"
                      id="currency-select"
                      value={currenciesId}
                      onChange={(event) => handleChange(event, currencies)}
                      sx={styles?.selectText}
                      renderValue={(selected) => {
                        // Custom render function for the selected value
                        const selectedCurrencyData = currencies?.find(
                          (currency) => currency.code === selected
                        )
                        return `${selectedCurrencyData?.code}`
                      }}>
                      {currencies?.map((currency) => (
                        <MenuItem key={currency.code} value={currency.code} sx={styles?.menuText}>
                          {currency?.symbol + "  " + currency?.code}
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>
                  {/* <Grid item>
                <Button
                  color="primary"
                  onClick={() => navigate("/auth/login")}
                  className={navBackground}
                  sx={{
                    background: theme.palette.primary.main,
                    color: theme.palette.background.main,
                    marginRight: "10px",
                    height: "37px"
                  }}>
                  Sign In
                </Button>
              </Grid> */}
                </Grid>
              )}

              {isLoggedIn && (
                <Button
                  color="primary"
                  onClick={logout}
                  className={navBackground}
                  sx={{
                    background: theme.palette.primary.main,
                    color: theme.palette.secondary.main,
                    marginRight: "10px"
                  }}>
                  Logout
                </Button>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default NavBar
