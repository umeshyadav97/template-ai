import * as React from "react"
import { styled } from "@mui/material/styles"
import {
  Box,
  Drawer,
  List,
  Typography,
  ListItemIcon,
  Divider,
  ListItemText,
  ListItemButton
} from "@mui/material"
import { DashboardMenus } from "@local/constants/dashboardMenu"
import { useStyles } from "./privateLayoutStyles"
import LogoutIcon from "@mui/icons-material/Logout"
import { useCookies } from "react-cookie"
import { CookieKeys, CookieOptions } from "@local/constants/cookieKeys"
import { useRouter } from "next/router"
import { useIsLoggedIn } from "@local/hooks/state"

const drawerWidth = 270

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    })
  })
)

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  height: "100px",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "center"
}))

export default function PrivateLayout({ children }) {
  const router = useRouter()
  const styles = useStyles()
  const currentRoute = router.pathname
  const isLoggedIn = useIsLoggedIn()
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies([CookieKeys.Auth])

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  React.useEffect(() => {
    if (!isLoggedIn) {
      router.replace("/auth/login", "/auth/login")
    }
  }, [isLoggedIn, router])

  const handleLogout = () => {
    removeCookie(CookieKeys.Auth, CookieOptions)
  }

  const navigate = (route) => {
    router.push(route)
  }

  const activeMenu = (item) => currentRoute.includes(item.route)

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer sx={styles.drawer} variant="persistent" anchor="left" open={true}>
        <List>
          <DrawerHeader>
            <Typography sx={styles.drawerHeader} variant="h4">
              {process.env.NEXT_PUBLIC_APP_NAME}
            </Typography>
          </DrawerHeader>
          <Divider sx={styles.divider} />
          {DashboardMenus.map((item) => {
            return (
              <ListItemButton
                sx={activeMenu(item) ? styles.activeListItem : styles.listItem}
                key={item.alias}
                onClick={() => navigate(item.route)}>
                <ListItemIcon sx={activeMenu(item) ? styles.iconActive : styles.icon}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText>
                  <Typography sx={styles.listItemText}>{item.title}</Typography>
                </ListItemText>
              </ListItemButton>
            )
          })}
        </List>
        <List sx={styles.logout}>
          <Divider sx={styles.divider} />
          <ListItemButton onClick={handleLogout}>
            <ListItemIcon sx={styles.icon}>
              <LogoutIcon color="secondary" />
            </ListItemIcon>
            <ListItemText>
              <Typography sx={styles.listItemText}>Logout</Typography>
            </ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
      <Main open={true}>{children}</Main>
    </Box>
  )
}
