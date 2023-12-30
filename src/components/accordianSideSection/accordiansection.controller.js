import { useEffect, useState } from "react"
import { useAccordianSectionModal } from "./accordiansection.modal"
import { useSelector } from "react-redux"
import { RefineFeature } from "@local/redux/dispatcher/RefineFeature"
import { Toast } from "@local/helpers/toasts/toastHelper"

export function useAccordianSectionController() {
  const [categoryData, setCategoryData] = useState([])
  const [selectedProducts, setSelectedProducts] = useState([])
  const [selectedFeature, setSelectedFeature] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [phaseData, setPhaseData] = useState([])
  const { features } = useSelector((store) => store.home)
  const { selectedfeatures } = useSelector((store) => store.refinefeature)
  const { currency } = useSelector((store) => store.currency)
  const model = useAccordianSectionModal()
  const sideBarData = async () => {
    setIsLoading(true)
    const response = await model.categoryFilter()
    if (response.success) {
      const temp = response.data
      setCategoryData(temp)
      setIsLoading(false)
    } else {
      // TODO: show error toast
    }
  }

  const initialSelectedFeature = categoryData?.map((product) => ({
    features: product?.features
  }))

  const filteredFeature = initialSelectedFeature?.flatMap((product) => product?.features)
  const initialSelectedProducts = features?.[0]?.features?.map((product) => ({
    id: product?.id
  }))

  function filterDataById(filteredFeature, initialSelectedProducts) {
    const filteredData = []
    const filteredIds = []

    initialSelectedProducts?.forEach((idObj) => {
      const idToFind = idObj.id
      const foundData = filteredFeature.find((dataObj) => dataObj.id === idToFind)

      if (foundData) {
        filteredData.push(foundData)
        filteredIds.push({ id: idToFind })
      }
    })

    return { filteredData, filteredIds }
  }

  const getSelectedData = () => {
    setSelectedFeature([...selectedfeatures])
  }

  const handleFetchPhases = async () => {
    const resp = await model.phasesData(features[0]?.id)
    if (resp?.success) {
      setPhaseData(resp.data)
    } else {
      Toast.error(resp?.message || "Please reload the page")
    }
  }

  const estimationCostData = async () => {
    const featureId = selectedfeatures.map((item) => item.id)
    const filterData = phaseData?.map((item) => ({
      id: item.id,
      name: item.name,
      is_selected: item.is_selected
    }))

    const payload = {
      blueprints: [features[0]?.id],
      features: featureId,
      phases: filterData
    }
    const response = await model.estimationCostData(payload)
    if (response.success) {
      // navigate.push("/auth/login")
      RefineFeature.setSelectedValue(response.data || {})
    }
  }

  useEffect(() => {
    getSelectedData()
    estimationCostData()
  }, [selectedfeatures])

  useEffect(() => {
    const { filteredIds, filteredData } = filterDataById(filteredFeature, initialSelectedProducts)
    setSelectedProducts(filteredIds)
    setSelectedFeature(filteredData)
    RefineFeature.setSelectedFeatures(filteredData || [])
    estimationCostData()
  }, [categoryData])

  // Commented for future reference
  // const handleSelectAll = (accordion) => {
  //   console.log("accordion", accordion)
  //   const allSelected = selectedProducts.length === accordion?.features.length
  //   setSelectAll(!allSelected)
  //   setSelectedProducts(allSelected ? [] : accordion?.features.map((item) => ({ id: item.id })))
  // }
  const handleChange = (selectedItem) => {
    let tempData = [...selectedFeature]
    const selectedIndex = tempData.findIndex((item) => item.id === selectedItem.id)

    if (selectedIndex !== -1) {
      tempData.splice(selectedIndex, 1)
    } else {
      tempData.unshift(selectedItem)
    }
    setSelectedFeature(tempData)
    RefineFeature.setSelectedFeatures(tempData || [])
    estimationCostData()
  }

  // const handleChange = ({ id }) => {
  //   let tempData = [...selectedProducts]
  //   if (tempData.findIndex((item) => item.id === id) !== -1) {
  //     tempData = tempData.filter((item) => item.id !== id)
  //   } else {
  //     tempData.push({ id })
  //   }

  //   setSelectedProducts(tempData)
  // }

  // For Future reference

  // const handleEyeChange = (item) => {
  //   // Toggle the state by checking if the clicked item is the same as the currently selected one
  //   if (productDetails && productDetails.id === item.id) {
  //     setProductDetails(null) // Deselect the item
  //   } else {
  //     setProductDetails(item) // Select the clicked item
  //   }
  // }

  useEffect(() => {
    handleFetchPhases()
    estimationCostData()
  }, [])

  return {
    sideBarData,
    categoryData,
    handleChange,
    selectedProducts,
    isLoading,
    initialSelectedProducts,
    selectedFeature,
    currency
  }
}
