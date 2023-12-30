import { Toast } from "@local/helpers/toasts/toastHelper"
import { userFormValidator } from "@local/helpers/validators/formValidation"
import { useContactModel } from "@local/models/privateModels/contact.model"
import { useFormik } from "formik"

export function useContactUsController() {
  const model = useContactModel()
  const initialValues = {
    name: "",
    email: "",
    country_code: "+91",
    phone: ""
  }

  const handleSubmit = async (data) => {
    const body = {
      name: data?.name,
      email: data?.email,
      country_code: data?.country_code,
      phone: data?.phone,
      type: "GET_IN_TOUCH"
    }
    const resp = await model.addContactRecord(body)
    if (resp?.code === 200 && resp?.success === true) {
      Toast.success(resp?.message)
    } else {
      Toast.error(resp?.message || "Something went wrong..!")
    }
  }

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: userFormValidator,
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values)
      resetForm()
    }
  })
  return {
    formik
  }
}
