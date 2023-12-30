import * as yup from "yup"
export const EmailValidator = yup.object({
  email: yup
    .string()
    .required("Email Id is Required")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Invalid email address")
})
