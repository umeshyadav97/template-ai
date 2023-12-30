import * as yup from "yup"

export const userContactFormValidator = yup.object({
  name: yup.string().required("Name is Required"),
  email: yup
    .string()
    .required("Email Id is Required")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Invalid email address"),
  phone: yup
    .string()
    .required("Mobile Number is Required")
    .min(8, "Enter Valid Mobile Number")
    .max(12, "You Can Enter Max 12 Digit Mobile Number")
    .nullable()
    .trim(),
  countryCode: yup.string(),
  companyName: yup.string(),
  companySize: yup.string()
})
