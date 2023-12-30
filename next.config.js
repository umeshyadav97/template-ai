require("dotenv").config({
  path: `env/.env.${process.env.APP_ENV || "dev"}`
})

module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_ENV: process.env.NEXT_PUBLIC_ENV,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_GOOGLE_TAG_ID: process.env.NEXT_PUBLIC_GOOGLE_TAG_ID
  },
  images: {
    domains: ["s3.amazonaws.com"]
  }
}
