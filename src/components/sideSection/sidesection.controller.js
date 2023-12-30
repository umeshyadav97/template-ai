import { useEffect, useState } from "react"
import { AmountWithSymboal } from "@local/helpers/currencyHelper/currency"
import { useSideSectionModel } from "./sidesection.model"
import { Home } from "@local/redux/dispatcher/Home"
import { useDispatch, useSelector } from "react-redux"
import { clearCategory } from "@local/redux/slices/homeSlice"
export function useSideSectionController() {
  const model = useSideSectionModel()
  const dispatch = useDispatch()
  const { category } = useSelector((store) => store.home)
  const [selectedValue, setSelectedValue] = useState(null)
  const [categoryData, setCategoryData] = useState([])
  // const [isSelected, setIsSelected] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const handleCheckBox = ({ id }) => {
    const isSelected = category.includes(id)
    const updatedCategory = isSelected ? category.filter((item) => item !== id) : [...category, id]
    Home?.setCategory({
      category: updatedCategory,
      isFromQuiz: false
    })
  }
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
  const handleRadioChange = (value, item) => {
    setSelectedValue(value)
    const amount = { min_amount: item.min_amount, max_amount: item.max_amount }
    Home?.setAmount(amount)
  }
  const handleClearSelection = () => {
    setSelectedValue(null)
    Home?.setAmount({})
  }
  const handleClearCkeckBox = () => {
    Home?.setCategory({
      category: [],
      isFromQuiz: false
    })
    // Dispatch the action to clear category selection
    dispatch(clearCategory())
  }

  const filterByCost = [
    {
      id: "7a72d6ca-aae6-4455-ba87-84f8b042317a",
      name: `Less than ${AmountWithSymboal(7000)}`,
      min_amount: 0,
      max_amount: 7000
    },
    {
      id: "7480b8fc-8259-4619-9a61-9b0e5ab1297c",
      name: `${AmountWithSymboal(7000)} to ${AmountWithSymboal(17000)}`,
      min_amount: 7000,
      max_amount: 17000
    },
    {
      id: "b76b6ba1-1aeb-4cd8-b227-0aceca050ab7",
      name: `${AmountWithSymboal(17000)} to ${AmountWithSymboal(27000)}`,
      min_amount: 17000,
      max_amount: 27000
    },
    {
      id: "911d5821-3a87-417e-acb3-c3543fdadb0c",
      name: `${AmountWithSymboal(27000)} +`,
      min_amount: 27000,
      max_amount: 0
    }
  ]
  useEffect(() => {
    // Cleanup function
    return () => {
      // Clear the data when the component is unmounted
      // Home?.setCategory([])
      // setIsSelected([])
    }
  }, [])
  return {
    selectedValue,
    handleRadioChange,
    handleCheckBox,
    // isSelected,
    handleClearSelection,
    handleClearCkeckBox,
    filterByCost,
    sideBarData,
    isLoading,
    categoryData
  }
}
