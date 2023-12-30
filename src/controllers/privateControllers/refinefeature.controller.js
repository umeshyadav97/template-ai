import { trackSelectedFeatures } from "@local/helpers/google-analytics-events"
import { RefineFeature } from "@local/redux/dispatcher/RefineFeature"
import { useRouter } from "next/router"
import { useState } from "react"
import { useSelector } from "react-redux"

export function useRefineFeatureController() {
  const router = useRouter()
  const [selectedButton, setSelectedButton] = useState("app")
  const [isOpen, setIsOpen] = useState(false)
  const { features } = useSelector((store) => store.home)
  const { selectedValue } = useSelector((store) => store.refinefeature)
  const { selectedfeatures } = useSelector((store) => store.refinefeature)

  const handleButtonChange = (event, newSelectedButton) => {
    if (newSelectedButton !== null) {
      setSelectedButton(newSelectedButton)
    }
  }
  const handleOpen = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }

  const handleNavigate = () => {
    router.push({
      pathname: `/atelier/delivery/`,
      query: {
        product_id: features?.[0]?.id
      }
    })
    trackSelectedFeatures(selectedfeatures, features?.[0]?.name)
    RefineFeature.setSelectedFeatures(selectedfeatures || [])
  }

  return {
    selectedButton,
    handleButtonChange,
    isOpen,
    handleClose,
    handleOpen,
    handleNavigate,
    features,
    selectedValue
  }
}
