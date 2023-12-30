import { trackContactUsClick, trackContactUsSubmit } from "@local/helpers/google-analytics-events"
import { Toast } from "@local/helpers/toasts/toastHelper"
import { userContactFormValidator } from "@local/helpers/validators/contactFormValidation"
import { useContactModel } from "@local/models/privateModels/contact.model"
import { useFormik } from "formik"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export function useEndingPageController() {
  const words = "Recommended for you".split(" ")
  const router = useRouter()
  const model = useContactModel()
  const { selectedQuestion } = useSelector((store) => store.quiz)
  const [visibleWords, setVisibleWords] = useState([])
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [userFormData, setUserFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    companyName: "",
    companySize: ""
  })

  useEffect(() => {
    setIsLoading(false)
    if (selectedQuestion && selectedQuestion?.length !== 5) {
      router.push("/")
    } else {
      setIsLoading(true)
    }
  }, [selectedQuestion])

  const data = [
    {
      title: "Honest Commitments",
      description: "Pricing with no hidden charges, competitive timelines - guaranteed"
    },
    {
      title: "Adaptability",
      description: "Unleash creativity - build without complexity constraints"
    },
    {
      title: "Post Launch",
      description: "Ensure security, updates, and bug-free software with Aftercare"
    },
    {
      title: "Complete Management",
      description: "Smooth project execution ensured by dedicated product experts"
    }
  ]
  const data2 = [
    {
      title: "Future proof",
      description: "Aftercare keeps your software secure, up-to-date and bug-free"
    },
    {
      title: "Fully managed",
      description: "Dedicated product experts who ensure your project runs smoothly"
    }
  ]

  const companySizeArray = [
    {
      value: "startup",
      label: "Startup"
    },
    {
      value: "self-employed",
      label: "Self-employed"
    },
    {
      value: "1-10",
      label: "1-10"
    },
    {
      value: "10-50",
      label: "10-50"
    },
    {
      value: "50+",
      label: "50+"
    }
  ]

  useEffect(() => {
    const animationDelay = 300 // milliseconds

    const showWordsOneByOne = async () => {
      for (let i = 0; i < words.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, animationDelay))
        setVisibleWords([words.slice(0, i + 1).join(" ")])
      }
    }

    showWordsOneByOne()
  }, [])

  const handleNavigate = () => {
    router.push("/atelier")
  }

  const handleCloseDrawer = (formik) => {
    setIsDrawerOpen(false)
    if (formik) {
      formik.resetForm()
    }
  }

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true)
    trackContactUsClick()
  }

  const handleSubmit = async (data) => {
    console.log("here")
    handleCloseDrawer()
    const body = {
      name: data?.name,
      email: data?.email,
      country_code: data?.countryCode,
      phone: data?.phone,
      company_name: data?.companyName,
      company_size: data?.companySize,
      quiz_info: selectedQuestion,
      type: "CONTACT"
    }
    const resp = await model.addContactRecord(body)
    if (resp?.code === 200 && resp?.success === true) {
      Toast.success(resp?.message)
    } else {
      Toast.error(resp?.message || "Something went wrong..!")
    }
    setIsDrawerOpen(false)
  }
  const formik = useFormik({
    initialValues: userFormData,
    enableReinitialize: true,
    validationSchema: userContactFormValidator,
    onSubmit: (values, { resetForm }) => {
      // Your submit logic goes here
      handleSubmit(values)
      trackContactUsSubmit(values)
      // Reset the form after successful submission
      resetForm()
    }
  })

  return {
    data,
    data2,
    handleNavigate,
    visibleWords,
    isDrawerOpen,
    handleCloseDrawer,
    handleOpenDrawer,
    setUserFormData,
    formik,
    companySizeArray,
    isLoading
  }
}
