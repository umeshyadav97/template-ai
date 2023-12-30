import { useEffect, useState } from "react"
import { useDeliveryModel } from "@local/models/privateModels/delivery.model"
import { Toast } from "@local/helpers/toasts/toastHelper"
import { useSelector } from "react-redux"
import dayjs from "dayjs"
import { DaysWeekConverter } from "@local/helpers/common/common"
import moment from "moment"
import { useFormik } from "formik"
import { userFormValidator } from "@local/helpers/validators/formValidation"
import { useRouter } from "next/router"
import {
  trackPlanDeliverySubmit,
  trackSelectedPhases,
  trackSelectedPlatform
} from "@local/helpers/google-analytics-events"

export function useDeliveryController() {
  const [checkedState, setCheckedState] = useState([])
  const [isAdvanced, setIsAdvanced] = useState(false)
  const [tooltipOpen, setTooltipOpen] = useState(false)
  const [selectedPhase, setSelectedPhase] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [showLoader, setShowLoader] = useState(false)
  const [phase, setPhase] = useState([])
  const [platform, setPlatform] = useState()
  const [loading, setLoading] = useState(false)
  const [selectedPlatform, setSelectedPlatform] = useState([])
  const [quotation, setQuotation] = useState([])
  const [phasePlatform, setPhasePlatform] = useState([])
  const model = useDeliveryModel()
  const { features } = useSelector((store) => store.home)
  const { selectedfeatures } = useSelector((store) => store.refinefeature)
  const { template } = useSelector((store) => store.home)
  const { currency } = useSelector((store) => store.currency)
  const [openCalender, setOpenCalender] = useState(false)
  const [date, setDate] = useState(dayjs(new Date()))
  const router = useRouter()

  const handleCheckboxChange = (item) => {
    const updatedPhasesData = phase?.map((phase) => {
      if (phase.id === item?.id) {
        return {
          ...phase,
          is_selected: !phase.is_selected // Toggle the is_selected property
        }
      }
      return phase
    })
    setPhase([...updatedPhasesData])
  }

  const handleAdvance = () => {
    setIsAdvanced(!isAdvanced)
  }

  const handleTooltipClose = () => {
    setTooltipOpen(false)
    setSelectedPhase(null)
  }
  const handleToolTip = (index) => {
    // Toggle tooltip visibility
    setTooltipOpen((prev) => !prev)
    // Store the selected phase for additional actions if needed
    setSelectedPhase(index)
  }
  const cardData = [
    {
      type: "Fixed Cost",
      price: quotation?.fixed_cost ?? 0,
      tootTip: "Cost includes Fixed costs and customisation costs",
      discount: true
    },
    {
      type: "Discounted Cost",
      price: quotation?.discount_price ?? 0
      // tootTip: "Cost including per feature and platform"
    }
    // {
    //   type: "Total Cost",
    //   price: quotation?.total_cost ?? 0,
    //   tootTip: "Cost includes Fixed costs and customisation costs"
    // }
  ]

  const handleOpen = () => {
    setIsOpen(!isOpen)
    router.push(`/atelier`)
  }

  const handlePhase = async (id) => {
    setShowLoader(true)
    setLoading(true)
    const resp = await model.phases(id)
    if (resp?.code === 200) {
      const updatedPhasesData = resp?.data?.map((phase) => {
        return {
          ...phase,
          platform: [platform?.[0]]
        }
      })
      setPhase([...updatedPhasesData])
      const isSelected = []
      resp?.data?.map((item) => item.is_selected && isSelected?.push(item))
      setCheckedState(isSelected)
      setLoading(false)
    } else {
      Toast.error(resp?.message || "Please reload the page")

      setLoading(false)
    }
    setLoading(false)
    setShowLoader(false)
  }

  const handlePlatform = async (id) => {
    setShowLoader(true)
    setLoading(true)
    const resp = await model.platform(id)
    if (resp?.code === 200) {
      setPlatform(resp?.data)
      setSelectedPlatform([resp?.data?.[0]])
      setLoading(false)
    } else {
      Toast.error(resp?.message || "Please reload the page")

      setLoading(false)
    }
    setLoading(false)
    setShowLoader(false)
  }

  const fetchQuotation = async () => {
    const featureId = selectedfeatures.map((item) => item.id)
    const platformId = selectedPlatform.map((item) => item.id)
    const phaseData = phase?.map((item) => ({
      id: item?.id,
      name: item?.name,
      is_selected: item?.is_selected,
      ...(isAdvanced ? { platform_ids: item?.platform?.map((platform) => platform?.id) } : [])
    }))
    const payload = {
      is_advance: isAdvanced,
      ...(!isAdvanced ? { platform_ids: platformId } : null),
      phases: phaseData,
      blueprints: [features[0]?.id],
      features: featureId
    }
    const response = await model.quotation(payload)
    if (response.success) {
      setQuotation(response.data)
    }
  }

  const handlePlatformData = (item, type, id) => {
    if (type === "basic") {
      const isAvailable = selectedPlatform.some((platform) => platform.id === item.id)
      if (isAvailable) {
        const updatedItems = selectedPlatform.filter((platform) => platform.id !== item.id)
        setSelectedPlatform(updatedItems)
        const updatedPhasesData = phase?.map((phase) => {
          return {
            ...phase,
            platform: updatedItems
          }
        })
        setPhase([...updatedPhasesData])
      } else {
        setSelectedPlatform([...selectedPlatform, item])
        const updatedPhasesData = phase?.map((phase) => {
          return {
            ...phase,
            platform: [...selectedPlatform, item]
          }
        })
        setPhase([...updatedPhasesData])
      }
    } else {
      const isAvailable = selectedPlatform.some((platform) => platform.id === item.id)
      if (isAvailable) {
        const updatedItems = selectedPlatform.filter((platform) => platform.id !== item.id)
        setSelectedPlatform(updatedItems)
        const updatedPhasesData = phase?.map((phase) => {
          if (phase.id === id) {
            return {
              ...phase,
              platform: updatedItems
            }
          }
          return phase
        })
        setPhase([...updatedPhasesData])
      } else {
        setSelectedPlatform([...selectedPlatform, item])
        const updatedPhasesData = phase?.map((phase) => {
          if (phase.id === id) {
            return {
              ...phase,
              platform: [...selectedPlatform, item]
            }
          }
          return phase
        })
        setPhase([...updatedPhasesData])
      }
    }
  }

  useEffect(() => {
    if (phase) {
      fetchQuotation()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPlatform, phase, isAdvanced])

  const closeCalender = () => {
    setOpenCalender(false)
  }

  const EstimatedDate = (period, date) => {
    if (!date) {
      return null
    }
    const weeks = DaysWeekConverter(period, "number")
    const estimetedDate = moment(date?.$d)
    const NewDate = estimetedDate.add(weeks, "weeks").format("DD MMM YYYY")
    return NewDate
  }

  const initialValues = {
    name: "",
    email: "",
    country_code: "1",
    phone: "",
    description: "",
    projectName: ""
  }
  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: userFormValidator,
    onSubmit: () => {
      SubmitPlan(formik?.values)
    }
  })

  const SubmitPlan = async (values) => {
    const featureId = selectedfeatures.map((item) => item.id)
    const platformId = selectedPlatform.map((item) => item.id)
    const phaseData = phase.filter((item) => item.is_selected).map((item) => item.id)
    const advancePhaseData = phase
      .filter((item) => item.is_selected)
      ?.map((item) => ({
        phase_id: item.id,
        is_selected: item.is_selected,
        ...(isAdvanced ? { platform_ids: item.platform?.map((platform) => platform.id) } : [])
      }))
    const advancePhaseNames = phase.filter((item) => item.is_selected)?.map((item) => item?.name)
    const payload = {
      user_info: {
        name: values?.name,
        email: values?.email,
        country_code: "+" + values?.country_code || "+1",
        phone: values?.phone
      },
      message: values?.description,
      name: values?.projectName || features[0]?.name,
      status: "CREATED",
      start_date: moment(date).format("YYYY-MM-DD"),
      is_advance: isAdvanced,
      ...(!isAdvanced ? { platform: platformId } : []),
      ...(!isAdvanced ? { phase: phaseData } : []),
      blueprint: [features[0]?.id],
      feature: featureId,
      ...(isAdvanced ? { buildphase: advancePhaseData } : null)
    }
    const response = await model.submitPlan(payload)
    if (response.success) {
      Toast.success(response?.data?.message)
      trackSelectedPlatform(selectedPlatform.map((item) => item.name))
      trackSelectedPhases(advancePhaseNames)
      trackPlanDeliverySubmit(values)
      setIsOpen(true)
    } else {
      Toast.error("Something went wrong, Please try again later")
    }
    formik.resetForm({
      name: "",
      email: "",
      phone: "",
      description: "",
      country_code: 1
    })
  }

  return {
    checkedState,
    isAdvanced,
    handleCheckboxChange,
    handleAdvance,
    handleTooltipClose,
    handleToolTip,
    tooltipOpen,
    selectedPhase,
    cardData,
    setIsOpen,
    handleOpen,
    isOpen,
    template,
    handlePhase,
    showLoader,
    loading,
    phase,
    selectedfeatures,
    handlePlatform,
    platform,
    fetchQuotation,
    selectedPlatform,
    handlePlatformData,
    quotation,
    currency,
    phasePlatform,
    setPhasePlatform,
    setCheckedState,
    setSelectedPlatform,
    openCalender,
    setOpenCalender,
    closeCalender,
    date,
    setDate,
    EstimatedDate,
    SubmitPlan,
    formik
  }
}
