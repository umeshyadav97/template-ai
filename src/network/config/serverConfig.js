export const APIConfig = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || process.env.API_URL,
  TIMEOUT: 50000,
  API_AUTH_HEADER: "Authorization",
  AUTH_TYPE: "Bearer",
  DEFAULT_VERSION: null, // OR set it to null if no version mentioned
  CONTENT_TYPE: {
    JSON: "application/json",
    MULTIPART: "multipart/form-data"
  },
  MAX_REFRESH_ATTEMPTS: 2
}
