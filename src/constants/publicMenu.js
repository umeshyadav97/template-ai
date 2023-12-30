function options(title, link) {
  return {
    title,
    link
  }
}

export const MenuOptions = [
  options("Privacy Policy", "/public/privacy-policy"),
  options("Refine Feature", "/public/atelier/refine-features"),
  options("Custom", "/auth/login")
]
