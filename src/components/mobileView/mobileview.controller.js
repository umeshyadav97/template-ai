import { RefineFeature } from "@local/redux/dispatcher/RefineFeature"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export function useMobileViewController() {
  const { selectedfeatures } = useSelector((store) => store.refinefeature)
  const [selectedProducts, setSelectedProducts] = useState([])
  const [open, setOpen] = useState(false)
  const { currency } = useSelector((store) => store.currency)

  const handleOpenPopup = () => {
    setOpen(true)
  }
  const handleClosePopUp = () => {
    setOpen(false)
  }

  const handleChange = (product) => {
    // e?.stopPropagation()
    const updatedFeatures = selectedProducts.filter((feature) => feature.id !== product.id)
    setSelectedProducts(updatedFeatures)
    RefineFeature.setSelectedFeatures(updatedFeatures)
    setOpen(false)
  }

  useEffect(() => {
    setSelectedProducts([...selectedfeatures])
  }, [selectedfeatures])
  return { handleChange, handleOpenPopup, handleClosePopUp, open, currency }
}
