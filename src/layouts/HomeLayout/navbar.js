import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Container from "@mui/material/Container"
import Drawer from "@mui/material/Drawer"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import ListItem from "@mui/material/ListItem"
import List from "@mui/material/List"
import { Button, Grid, IconButton } from "@mui/material"
import { useNavbarController } from "./navbar.controller"
import Close from "@mui/icons-material/CloseRounded"
import Image from "next/image"
import Logo from "@local/assets/icons/logo.svg"
import Menu from "@mui/icons-material/MenuRounded"
import { useStyles } from "./layoutStyles"
import Link from "next/link"
import { useRouter } from "next/router"

const pages = [
  {
    name: "Products",
    link: "/products"
  },
  {
    name: "About Us",
    link: "/about-us"
  },
  {
    name: "FAQ’s",
    link: "/faqs"
  },
  {
    name: "Compare",
    link: "/compare"
  }
]
const drawerWidth = 350

function NavBar() {
  const {
    open,
    theme,
    classes,
    handleDrawerOpen,
    handleDrawerClose,
    navRef,
    navigate,
    handleRoute
  } = useNavbarController()
  const styles = useStyles()
  const router = useRouter()
  const handleNavigate = () => {
    router.push("/quiz")
  }

  return (
    <>
      <AppBar sx={classes[navRef.current]} position="fixed">
        <Container
          maxWidth="xxl"
          sx={{
            padding: { lg: "21px 40px !important", xs: "21px 20px !important" },
            borderBottom: "1px solid #F6F8EF"
          }}>
          <Toolbar disableGutters className={styles.navbar}>
            <Grid container xs={4}>
              <Grid container xs={1} mr={1.5} sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleDrawerOpen}
                  style={{ padding: "0rem" }}>
                  <Menu sx={{ fontSize: { xs: "3rem", md: "4rem" } }} />
                </IconButton>
              </Grid>
              <Grid container xs={9}>
                <Image
                  src={Logo}
                  alt="logo"
                  onClick={() => handleRoute("/")}
                  style={styles.logo_img}
                />
              </Grid>
            </Grid>
            <Grid container xs={8} alignItems="center" justifyContent="flex-end">
              <Grid
                container
                xs={12}
                justifyContent="flex-end"
                alignItems="center"
                sx={{ display: { xs: "none", md: "flex" } }}>
                <List style={{ display: "flex" }}>
                  {pages.map((page, idx) => (
                    <ListItem
                      key={idx}
                      sx={{
                        width: "auto",
                        padding: {
                          lg: "0.5rem 1.75rem 0.5rem",
                          md: "0.5rem 1rem 0.5rem"
                        }
                      }}>
                      <Link
                        onClick={() => navigate(page.link)}
                        underline="none"
                        href={page.link}
                        style={styles.Link}>
                        {page.name}
                      </Link>
                    </ListItem>
                  ))}
                </List>
                <Grid style={styles.divider} sx={{ display: { xs: "none", md: "flex" } }} />
                <Grid item mr={3}>
                  <Button sx={styles.secondary_button}>Contact Sales</Button>
                </Grid>
                <Grid item>
                  <Button color="primary" sx={styles.primary_button} onClick={handleNavigate}>
                    Get Started
                  </Button>
                </Grid>
              </Grid>
              <Grid
                container
                sx={{
                  display: { xs: "flex", md: "none" },
                  justifyContent: "flex-end",
                  alignItems: "center"
                }}>
                <Grid item>
                  <Button sx={styles.secondary_button}>Contact Sales</Button>
                </Grid>
                <Grid item>
                  <Button color="primary" sx={styles.primary_button} onClick={handleNavigate}>
                    Get Started
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Drawer
              sx={{
                width: 0,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: { sm: drawerWidth, xs: "100%" },
                  boxSizing: "border-box"
                }
              }}
              variant="persistent"
              anchor="left"
              open={open}>
              <Grid item sx={{ padding: "0px 1.875rem" }}>
                <Grid container justifyContent="space-between" pt={4}>
                  <Grid item>
                    <Image
                      src={Logo}
                      style={styles.logo_img}
                      alt="logo"
                      onClick={() => handleRoute("/")}
                    />
                  </Grid>
                  <Grid item onClick={handleDrawerClose}>
                    {theme.direction === "ltr" ? (
                      <Close
                        sx={{ fontSize: "3rem" }}
                        color={theme.palette.text.main}
                        style={{ cursor: "pointer" }}
                      />
                    ) : (
                      <ChevronRightIcon />
                    )}
                  </Grid>
                </Grid>
                <Grid item pt={1}>
                  <List>
                    {pages.map((page, idx) => (
                      <ListItem
                        key={idx}
                        sx={{
                          width: "auto",
                          padding: "1rem"
                        }}>
                        <Link
                          onClick={() => handleRoute(page.link)}
                          underline="none"
                          href={page.link}
                          style={styles.Link}>
                          {page.name}
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              </Grid>
            </Drawer>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default NavBar
