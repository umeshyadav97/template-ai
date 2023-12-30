import { userFormValidator } from "@local/helpers/validators/formValidation"
import { useFormik } from "formik"
import { useState } from "react"

export function useDetailsFormController() {
  const [userFormData, setUserFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
    country_code: 1
  })
  const formik = useFormik({
    initialValues: userFormData,
    enableReinitialize: true,
    validationSchema: userFormValidator,
    onSubmit: () => {
      // handleFormSubmit(values)
    }
  })
  const currentDescriptionLength = formik?.values?.description?.length
  return { setUserFormData, formik, currentDescriptionLength }
}
