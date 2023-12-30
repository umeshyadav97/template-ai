import { trackQuizData } from "@local/helpers/google-analytics-events"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Quiz } from "@local/redux/dispatcher/Quiz"
import { useSideSectionModel } from "@local/components/sideSection/sidesection.model"
import { Home } from "@local/redux/dispatcher/Home"

export function useQuizController() {
  const model = useSideSectionModel()
  const [step, setStep] = useState(1)
  const [selectedItem, setSelectedItem] = useState({})
  const [categoryData, setCategoryData] = useState([])
  // for selected option
  // eslint-disable-next-line no-unused-vars
  const [selectedOption, setSelectedOption] = useState([])
  const router = useRouter()

  useEffect(() => {
    getCategoriesData()
    Home?.setCategory({
      category: [],
      isFromQuiz: false
    })
  }, [])
  // const jsonData = [
  //   {
  //     id: "1e931ee3-2420-4a90-a2af-8b75ee48df68",
  //     name: "Business & Finance",
  //     icon: "/images/quiz/businessIcon.svg"
  //   },
  //   {
  //     id: "d290aecd-4cc8-4013-b0a8-988a5e173ab7",
  //     name: "E-commerce",
  //     icon: "/images/quiz/shoppingIcon.svg"
  //   },
  //   {
  //     id: "c331cdb6-213e-42b7-8271-e123b71f559b",
  //     name: "Education",
  //     icon: "/images/quiz/categoryIcon.svg"
  //   },
  //   {
  //     id: "b2dfb1f8-5e01-40e9-97c6-48d57f2cf0b7",
  //     name: "Events",
  //     icon: "/images/quiz/categoryIcon.svg"
  //   },
  //   {
  //     id: "64e6d350-c2ab-4aa6-aa0e-6db1dd9316d2",
  //     name: "Food & drink",
  //     icon: "/images/quiz/foodIcon.svg"
  //   },
  //   {
  //     id: "27cbbb37-50de-4719-98f0-d9c2e285c887",
  //     name: "Health & fitness",
  //     icon: "/images/quiz/healthIcon.svg"
  //   },
  //   {
  //     id: "f782b189-2236-468e-9951-d3750b43bb62",
  //     name: "Hotel & Travel",
  //     icon: "/images/quiz/travelIcon.svg"
  //   },
  //   {
  //     id: "341d1263-8e58-4a52-ae21-d6c7b71b7b78",
  //     name: "Lifestyle",
  //     icon: "/images/quiz/lifeStyleIcon.svg"
  //   },
  //   {
  //     id: "0b8bbb5a-9a57-4c00-92a1-1e42242fdb93",
  //     name: "Medical",
  //     icon: "/images/quiz/medicalIcon.svg"
  //   },
  //   {
  //     id: "f41ee79e-ebe1-4ebb-b9ab-0b1cd78512af",
  //     name: "Music",
  //     icon: "/images/quiz/musicIcon.svg"
  //   },
  //   {
  //     id: "bb4579d2-291c-408f-af5b-f47cdf89501a",
  //     name: "OTT",
  //     icon: "/images/quiz/musicIcon.svg"
  //   },
  //   {
  //     id: "6c6ab324-4216-4265-8b0d-8b3400e24001",
  //     name: "Shopping",
  //     icon: "/images/quiz/shoppingIcon.svg"
  //   },
  //   {
  //     id: "5125c820-7c8e-4313-95f7-4b431384f3f9",
  //     name: "Social Media",
  //     icon: "/images/quiz/socialIcon.svg"
  //   },
  //   {
  //     id: "9497c883-255e-41ef-862d-f5d4f6f82d8b",
  //     name: "Sports",
  //     icon: "/images/quiz/categoryIcon.svg"
  //   },
  //   {
  //     id: "18dafcd5-737b-4747-a75d-98fae52b3449",
  //     name: "Utility",
  //     icon: "/images/quiz/categoryIcon.svg"
  //   }
  // ]
  const handleNext = (questionNo, question, option) => {
    setStep((prevStep) => prevStep + 1)

    // Find if the questionNo already exists in the selectedOption array
    const existingIndex = selectedOption.findIndex((item) => item.number === questionNo)

    // If the questionNo already exists, update the answer; otherwise, add a new object
    let updatedSelection
    if (existingIndex !== -1) {
      updatedSelection = [...selectedOption]
      updatedSelection[existingIndex] = { question: question, number: questionNo, answer: option }
    } else {
      updatedSelection = [
        ...selectedOption,
        { question: question, number: questionNo, answer: option }
      ]
    }
    setSelectedOption(updatedSelection)

    if (questionNo === 5) {
      trackQuizData(updatedSelection)
      Quiz.setQuestion(updatedSelection)
    }
  }
  const handleRestart = () => {
    setSelectedOption([])
    setStep(1)
  }

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1)
  }
  const handleStepClick = (index) => {
    setStep(index)
  }
  const handleItem = (questionNo, question, item) => {
    setSelectedItem(item)
    Home?.setCategory({
      category: [item?.id],
      isFromQuiz: true
    })
    handleNext(questionNo, question, item?.name)
  }
  const handleSubmit = (questionNo, question, item) => {
    handleNext(questionNo, question, item)
    router.push("/recommendation")
  }

  const getCategoriesData = async () => {
    const param = { status: "All" }
    const response = await model.categoryFilter({}, param)
    if (response.success) {
      setCategoryData(response?.data)
    } else {
      setCategoryData([])
      // TODO: show error toast
    }
  }

  return {
    step,
    handleItem,
    handleStepClick,
    handlePrev,
    handleNext,
    // jsonData,
    selectedItem,
    handleSubmit,
    handleRestart,
    getCategoriesData,
    categoryData
  }
}
