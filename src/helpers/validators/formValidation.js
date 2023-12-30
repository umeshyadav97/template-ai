import * as yup from "yup"

export const userFormValidator = yup.object({
  name: yup.string().required("Name is Required"),
  email: yup
    .string()
    .required("*Email Is Required")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "*Invalid email address"),
  phone: yup
    .string()
    .required("Phone Number Is Required")
    .min(8, "Enter Valid Mobile Number")
    .max(12, "You Can Enter Max 12 Digit Mobile Number")
    .nullable()
    .trim(),
  country_code: yup.string().required("Country Code is required")
  // description: yup.string().required("Description is Required")
})
