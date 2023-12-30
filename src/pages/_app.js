import React from "react"
import "../themes/fonts.scss"
import "../styles/globals.css"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { useRouter } from "next/router"
import { Provider as ReduxProvider } from "react-redux"
import PublicLayout from "@local/layouts/publicLayout"
import PrivateLayout from "@local/layouts/privateLayout"
import { defaultTheme } from "@local/themes/defaultTheme"
import { store, persistor } from "@local/redux/store"
import { CookiesProvider } from "react-cookie"
import CommonLayout from "@local/layouts/commonLayout"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { PersistGate } from "redux-persist/integration/react"
import HomeLayout from "@local/layouts/HomeLayout"

function MyApp({ Component, pageProps }) {
  const currentTheme = createTheme(defaultTheme)
  const path = useRouter()
  const isPublic = path.pathname.includes("/auth/")
  const isPrivate = path.pathname.includes("/user/")
  const isCommon =
    path.pathname.includes("/quiz") ||
    path.pathname.includes("/recommendation") ||
    path.pathname.includes("/atelier")

  const Wrapper = isPublic
    ? PublicLayout
    : isPrivate
    ? PrivateLayout
    : isCommon
    ? CommonLayout
    : HomeLayout

  return (
    <CookiesProvider>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={currentTheme}>
            <Wrapper>
              <Component {...pageProps} />
            </Wrapper>
            <ToastContainer />
          </ThemeProvider>
        </PersistGate>
      </ReduxProvider>
    </CookiesProvider>
  )
}

export default MyApp
