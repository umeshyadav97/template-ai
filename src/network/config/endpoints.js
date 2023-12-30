// List all endpoints here
import { OFFLINE } from "@local/network/offline"
import { HTTP_METHODS, APIRouter, APIWithOfflineRouter, APICustomRouter } from "../core/httpHelper"

// ******************
// Endpoint class takes 3 params in constructor ==> "endpoint", "http-method", "API-version"
// By default, version is set to v1
// ******************
export const API = {
  AUTH: {
    // if you want to return offline json if api fails
    LOGIN: new APIWithOfflineRouter("/user/login/", HTTP_METHODS.POST, OFFLINE.LOGIN),
    LOGIN_GOOGLE: new APIWithOfflineRouter(
      "/user/google-login/",
      HTTP_METHODS.POST,
      OFFLINE.LOGINGOOGLE
    ),
    LOGIN_FACEBOOK: new APIWithOfflineRouter(
      "/user/facebook-login/",
      HTTP_METHODS.POST,
      OFFLINE.LOGINFACEBOOK
    ),
    SIGNUP: new APIWithOfflineRouter("/user/signup/", HTTP_METHODS.POST, OFFLINE.SIGNUP),
    FORGOTPASSWORD: new APIWithOfflineRouter(
      "/user/forgot-password/",
      HTTP_METHODS.POST,
      OFFLINE.FORGOTPASSWORD
    ),
    RESETPASSWORD: new APIWithOfflineRouter(
      "/user/reset-password/",
      HTTP_METHODS.PATCH,
      OFFLINE.RESETPASSWORD
    ),
    VERIFYOTP: new APIWithOfflineRouter("/auth/login", HTTP_METHODS.POST, OFFLINE.LOGIN),
    REFRESH_TOKEN: new APIRouter("/user/token/refresh", HTTP_METHODS.POST)
  },
  USER: {
    PROFILE: new APIWithOfflineRouter("/user/profile/", HTTP_METHODS.GET, OFFLINE.PROFILE),
    LOGOUT: new APIWithOfflineRouter("/user/logout/", HTTP_METHODS.DEL, OFFLINE.LOGOUT)
  },
  MEDIA: {
    // if you want to upload a file with or without data
    UPLOAD: new APIRouter("/user/media/", HTTP_METHODS.POST)
  },
  THIRD_PARTY: {
    // If the base url is different from default
    CHECK: new APICustomRouter("https://example.com", "/test", HTTP_METHODS.GET)
  },
  FILTER: {
    CATEGORYFILTER: new APIRouter("/studio/categories/", HTTP_METHODS.GET),
    CATEGORY_FEATURE: new APIRouter("/studio/feature-categories/", HTTP_METHODS.GET)
  },
  STUDIO: {
    BLUEPRINT: new APIRouter("/studio/blueprints/", HTTP_METHODS.GET),
    CURRENCY: new APIRouter("/studio/currencies/", HTTP_METHODS.GET),
    DELIVERY_COST: new APIRouter("/studio/pricing-estimates/", HTTP_METHODS.POST),
    PHASES: new APIRouter("/studio/phases/", HTTP_METHODS.GET),
    PLATFORM: new APIRouter("/studio/platforms/", HTTP_METHODS.GET),
    SUBMIT_PLAN: new APIRouter("/buildplan/", HTTP_METHODS.POST)
  },
  CONTACT: {
    CONTACT_FORM: new APIRouter("/studio/contact/", HTTP_METHODS.POST),
    SUBSCRIBED: new APIRouter("/studio/subscribe/", HTTP_METHODS.POST)
  }
}
