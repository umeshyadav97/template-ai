import { RefineFeature } from "@local/redux/dispatcher/RefineFeature"
import { clearSelectedFeatures } from "@local/redux/slices/refineFeatureSlice"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export function useSideController() {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const [open, setOpen] = useState(false)
  const [product, setProduct] = useState()
  const { features } = useSelector((store) => store.home)
  const { selectedfeatures } = useSelector((store) => store.refinefeature)
  const { currency } = useSelector((store) => store.currency)
  const handleOpen = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }
  const handleOpenPopup = (product) => {
    setOpen(true)
    setProduct(product)
  }
  const handleClosePopUp = () => {
    setOpen(false)
  }
  const [selectedProducts, setSelectedProducts] = useState([])

  const handleChange = (product) => {
    // e?.stopPropagation()
    const updatedFeatures = selectedProducts.filter((feature) => feature.id !== product.id)
    setSelectedProducts(updatedFeatures)
    RefineFeature.setSelectedFeatures(updatedFeatures)
    setOpen(false)
  }

  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(0)

  const handleShowFeature = (index, feature, e) => {
    e.stopPropagation()
    setSelectedFeatureIndex(index)
    RefineFeature.setSelectedItem(feature || [])
  }
  const handleRemoveFeature = () => {
    setSelectedProducts([])
    RefineFeature.setSelectedFeatures(selectedProducts || [])
    setIsOpen(false)
    // Dispatch the action to clear selectedfeatures
    dispatch(clearSelectedFeatures())
  }

  useEffect(() => {
    setSelectedProducts([...selectedfeatures])
  }, [selectedfeatures])

  useEffect(() => {
    RefineFeature.setSelectedItem(selectedfeatures[0] || {})
  }, [selectedProducts])

  const filterData = ["A-Z", "Z-A", "Date/Time Added", "Bundle Name"]
  return {
    isOpen,
    handleOpen,
    handleClose,
    filterData,
    handleChange,
    selectedProducts,
    setSelectedProducts,
    features,
    selectedfeatures,
    handleShowFeature,
    selectedFeatureIndex,
    handleRemoveFeature,
    currency,
    handleOpenPopup,
    handleClosePopUp,
    open,
    product
  }
}
