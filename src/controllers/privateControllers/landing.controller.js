import { useRouter } from "next/router"

export function useLandingPageController() {
  const router = useRouter()
  const handleChange = () => {
    router.push("/endPage")
  }
  return {
    handleChange
  }
}
