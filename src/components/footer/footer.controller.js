import { Toast } from "@local/helpers/toasts/toastHelper"
import { useFormik } from "formik"
import { useFooterModel } from "./footer.model"
import { EmailValidator } from "@local/helpers/validators/home"

export function useFooterController() {
  const model = useFooterModel()
  const initialValues = {
    email: ""
  }

  const handleSubmit = async (data) => {
    const body = {
      email: data?.email,
      type: "SUBSCRIBE"
    }
    const resp = await model.addSubscribed(body)
    if (resp?.code === 200 && resp?.success === true) {
      Toast.success(resp?.message)
    } else if (resp?.code === 400) Toast.error(resp?.error.message || "Already Subscribed.")
    else {
      Toast.error(resp?.message || "Something went wrong..!")
    }
  }

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: EmailValidator,
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values)
      resetForm()
    }
  })
  return {
    formik
  }
}
