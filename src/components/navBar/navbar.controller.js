import { useEffect, useRef, useState } from "react"
import { useTheme } from "@mui/system"
import { useUserSession } from "@local/hooks/userSession"
import { useRouter } from "next/router"
import { Currency } from "@local/redux/dispatcher/Currency"
import { useNavbarModel } from "./navbar.model"
import { Toast } from "@local/helpers/toasts/toastHelper"
const useStyles = () => {
  return {
    appBarTransparent: {
      backgroundColor: "transparent",
      boxShadow: "none ",
      transition: "0.3s, backgroundColor"
    },
    appBarSolid: {}
  }
}

export function useNavbarController() {
  const [navBackground, setNavBackground] = useState("appBarTransparent")
  const [open, setOpen] = useState(false)
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [currencies, setCurrencies] = useState([{ name: "Indian Rupee", symbol: "₹", code: "INR" }])
  const [currenciesId, setCurrenciesId] = useState("INR")

  const model = useNavbarModel()
  const navRef = useRef()
  const theme = useTheme()
  const classes = useStyles()
  const router = useRouter()
  const { isValidSession, deleteSession } = useUserSession()

  navRef.current = navBackground
  const userSession = isValidSession()

  useEffect(() => {
    Currency.setCurrency({
      code: "INR",
      icon: "b85cb3b2-b250-4834-b3ff-8cf63d2303cb",
      icon_url: "https://s3.amazonaws.com/nfx-stropeai/images/currency/icon_inr.svg",
      id: "f13292e2-66dc-4e45-a7ff-6dc3f1adc96a",
      name: "Indian Rupee",
      rate: "1.000",
      symbol: "₹"
    })
  }, [])
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

  const handleCurrency = async () => {
    const resp = await model.currency()
    if (resp?.code === 200) {
      setCurrencies(resp?.data)
    } else {
      setCurrencies([{ name: "Indian Rupee", symbol: "₹", code: "INR" }])
      Toast.error(resp?.message || "Please reload the page")
    }
  }

  const handleChange = (event, currenciesData) => {
    let tempData = event?.target?.value
    setCurrenciesId(tempData)

    const selectedCurrencyData = currenciesData.find((currency) => currency.code === tempData)

    // set selected currency data on redux state
    Currency.setCurrency(selectedCurrencyData)
  }

  const pathName = router.pathname

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
    currencies,
    handleChange,
    currenciesId,
    pathName,
    handleCurrency
  }
}
