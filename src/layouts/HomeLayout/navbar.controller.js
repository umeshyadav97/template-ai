import { useEffect, useRef, useState } from "react"
import { useTheme } from "@mui/system"
import { useUserSession } from "@local/hooks/userSession"
import { useRouter } from "next/router"

const useStyles = () => {
  const theme = useTheme()
  return {
    appBarTransparent: {
      backgroundColor: `${theme.palette.background.main}`,
      boxShadow: "none ",
      transition: "0.3s, backgroundColor"
    },
    appBarSolid: {
      backgroundColor: `${theme.palette.background.main}`,
      transition: "0.3s, backgroundColor ",
      boxShadow: "0px 2px 10px gray;"
    }
  }
}

export function useNavbarController() {
  const [navBackground, setNavBackground] = useState("appBarTransparent")
  const [open, setOpen] = useState(false)
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [authOpen, setAuthOpen] = useState(false)

  const navRef = useRef()
  const theme = useTheme()
  const classes = useStyles()
  const router = useRouter()
  const { isValidSession, deleteSession } = useUserSession()

  navRef.current = navBackground
  const userSession = isValidSession()

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 20
      if (show) {
        setNavBackground("appBarSolid")
      } else {
        setNavBackground("appBarTransparent")
      }
    }
    document.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    setLoggedIn(userSession)
  }, [userSession])

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const navigate = (route) => {
    router.push(route)
  }

  const handleRoute = (route) => {
    router.push(route)
    handleDrawerClose()
  }
  return {
    open,
    theme,
    classes,
    handleDrawerOpen,
    handleDrawerClose,
    navRef,
    navBackground,
    isLoggedIn,
    navigate,
    logout: deleteSession,
    authOpen,
    setAuthOpen,
    handleRoute
  }
}
