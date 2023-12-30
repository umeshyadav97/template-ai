import { useTheme } from "@emotion/react"
import { trackSelectedProduct } from "@local/helpers/google-analytics-events"
import { Toast } from "@local/helpers/toasts/toastHelper"
import { useHomeModel } from "@local/models/privateModels/home.model"
import { Home } from "@local/redux/dispatcher/Home"
import { useMediaQuery } from "@mui/material"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Loader } from "@local/redux/dispatcher/Loader"
export function useHomeController() {
  const theme = useTheme()
  const router = useRouter()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))
  const [selectedButton, setSelectedButton] = useState("all")
  const [selectedCards, setSelectedCards] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [templateDetail, setTemplateDetail] = useState(null)
  const [record, setRecord] = useState()
  const [moreTemplate, setMoreTemplate] = useState([])
  const [hasMore, setHasMore] = useState(false)
  const [page, setPage] = useState(1)
  const model = useHomeModel()
  const [warningModal, setWarningModal] = useState(isSmallScreen ? true : false)
  const { category, amount, isFromQuiz } = useSelector((store) => store.home)
  const { visible } = useSelector((store) => store.loader)

  useEffect(() => {
    if (isFromQuiz) {
      getAllTemplate()
    }
  }, [])
  // update this const value for template selection
  const maxSelect = 1

  const handleButtonChange = (event, newSelectedButton) => {
    if (newSelectedButton !== null) {
      setSelectedButton(newSelectedButton)
    }
  }

  const handleCardSelect = (templateCard) => {
    // If maxSelect is reached, prevent further selection
    if (
      selectedCards.length === maxSelect &&
      !selectedCards.some((template) => template?.id === templateCard?.id)
    ) {
      return
    }

    // Toggle selection
    const newSelectedCards = selectedCards.some((template) => template?.id === templateCard?.id)
      ? selectedCards.filter((template) => template.id !== templateCard.id)
      : [...selectedCards, templateCard]

    setSelectedCards(newSelectedCards)
    Home.setTemplateData(templateCard)
  }

  const handleClear = () => {
    setSelectedCards([])
  }
  const handleRemove = () => {
    setSelectedCards([])
    setTemplateDetail(null)
    setIsOpen(false)
  }
  const handleView = (template) => {
    setIsOpen(true)
    setTemplateDetail(template)
  }
  const handleClose = () => {
    setIsOpen(false)
    setTemplateDetail(null)
  }
  const handleAdd = (templateDetail) => {
    setSelectedCards([...selectedCards, templateDetail])
    handleClose()
  }

  const handleChnage = (selectedCards) => {
    router.push("/atelier/refine-features")
    const feature = selectedCards
    Home.setFeatures(feature || [])
    trackSelectedProduct(selectedCards?.[0])
  }
  const handleLandingPage = () => {
    router.push("/landing")
  }

  const handleRecord = async (filter, category, amount) => {
    Loader.show()

    const resp = await model.blueprint(filter, category, amount)
    if (resp?.code === 200 && resp?.success) {
      if (resp?.data?.results.length > 0) {
        setRecord(resp?.data?.results)
      } else if (isFromQuiz === true) {
        Home?.setCategory({
          category: [],
          isFromQuiz: false
        })
      } else {
        setRecord([])
      }
      Loader.hide()
      if (resp?.data?.next !== null) {
        setHasMore(true)
      } else {
        setHasMore(false)
      }
    } else {
      Toast.error(resp?.message || "Please reload the page")
      setHasMore(false)
      Loader.hide()
    }
    Loader.hide()
  }

  const getAllTemplate = async () => {
    Loader.show()
    if (isFromQuiz) {
      const resp = await model.blueprint()
      if (resp?.code === 200 && resp?.success) {
        if (resp?.data?.results.length > 0) {
          const updatedTemplateArray = resp?.data?.results.filter(
            (item) => !category.includes(item.category)
          )
          setMoreTemplate(updatedTemplateArray)
        }

        Loader.hide()
      } else {
        Toast.error(resp?.message || "Please reload the page")
        setHasMore(false)
        Loader.hide()
      }
    }
    Loader.hide()
  }

  const fetchMoreData = async () => {
    Loader.show()
    const newPage = page + 1 // Increment page count
    const filter = { page: newPage, page_size: 10 }
    const resp = await model.blueprint(filter, category, amount)
    if (resp?.code === 200) {
      setPage(newPage)
      setRecord([...record, ...resp.data.results])
      if (resp?.data?.next !== null) {
        setHasMore(true) // Set hasMore to true if there are more results
      } else {
        setHasMore(false) // Set hasMore to false if no more results
      }
      Loader.hide()
    } else {
      Toast.error(resp?.message || `Error in fetching Staff List`)
      setHasMore(false)
    }
    Loader.hide()
  }

  return {
    selectedButton,
    selectedCards,
    handleButtonChange,
    handleCardSelect,
    handleClear,
    handleView,
    isOpen,
    handleClose,
    templateDetail,
    handleAdd,
    handleChnage,
    handleRemove,
    handleLandingPage,
    handleRecord,
    record,
    hasMore,
    fetchMoreData,
    page,
    category,
    amount,
    setPage,
    warningModal,
    setWarningModal,
    isFromQuiz,
    visible,
    moreTemplate
  }
}
