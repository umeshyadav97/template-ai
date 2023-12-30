export function trackEvent(event, params = {}) {
  let eventParams = { event: event, ...params, user_identifier: "anonymous" }
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", event, eventParams)
  }
}

export function trackStudioPageView() {
  trackEvent("studio_page_view", {
    page_url: window?.location?.href
  })
}

export function trackQuizPageView() {
  trackEvent("quiz_page_view", {
    page_url: window?.location?.href
  })
}

export function trackRecommendationPageView() {
  trackEvent("quiz_recommendation_page_view", {
    page_url: window?.location?.href
  })
}

export function trackFeaturesPageView(user_id) {
  trackEvent("refine_features_page_view", {
    page_url: window?.location?.href,
    unique_id: user_id || "N/A"
  })
}

export function trackDeliveryPageView(user_id) {
  trackEvent("plan_delivery_page_view", {
    page_url: window?.location?.href,
    unique_id: user_id || "N/A"
  })
}

export function trackQuizStart() {
  trackEvent("quiz_start", {
    page_url: window?.location?.href
  })
}

export function trackQuizStep(step) {
  trackEvent("quiz_step", {
    step: step || ""
  })
}

export function trackQuizData(quiz) {
  trackEvent("quiz_data", {
    ...quiz
  })
}

export function trackContactUsClick() {
  trackEvent("contact_us_click", {
    page_url: window?.location?.href
  })
}

export function trackContactUsSubmit(info) {
  trackEvent("user_contact_details", {
    page_url: window?.location?.href,
    ...info
  })
}

export function trackSelectedProduct(product) {
  trackEvent("product_selected", {
    page_url: window?.location?.href,
    amount: product.amount,
    app_image: product.app_image?.image_url,
    category: product?.category,
    description: product?.description,
    duration: product?.duration,
    features: product?.features?.map((feat) => feat?.name),
    id: product?.id,
    logo_url: product?.logo_url,
    name: product?.name,
    phase: product?.phase,
    platform: product?.platform?.map((platform) => platform?.name),
    status: product?.status,
    thumbnail: product?.thumbnail_url,
    web_image: product?.web_image?.image_url
  })
}

export function trackSelectedFeatures(features, name) {
  trackEvent("selected_fetaures", {
    page_url: window?.location?.href,
    product_name: name,
    features_name: features?.map((feat) => feat?.name)
  })
}

export function trackSelectedPlatform(platform) {
  trackEvent("selected_platform", {
    page_url: window?.location?.href,
    phase: platform?.map((item) => item)
  })
}

export function trackSelectedPhases(phases) {
  trackEvent("selected_phases", {
    page_url: window?.location?.href,
    phase: phases?.map((item) => item)
  })
}

export function trackPlanDeliverySubmit(values) {
  trackEvent("plan_delivery_submit", {
    page_url: window?.location?.href,
    name: values?.name,
    email: values?.email,
    country_code: "+" + values?.country_code || "+1",
    phone: values?.phone,
    message: values?.description
  })
}

// most visited currncy by location
