import { Dates } from "@local/helpers/app-dates/dates"

export const CookieKeys = {
  Auth: "Auth-Token",
  API_TOKEN: "api-key",
  REFRESH_TOKEN: "Refresh-Token"
}

console.log(process.env.APP_ENV, process.env.APP_ENV)

export const CookieOptions = {
  expires: Dates().addInCurrent(10, "days")._d,
  sameSite: "strict",
  path: "/",
  ...(process.env.APP_ENV !== "dev" &&
    process.env.NEXT_PUBLIC_ENV !== "dev" && {
      secure: true
    })
}
