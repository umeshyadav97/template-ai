import { Button, FormHelperText, Grid } from "@mui/material"
import React from "react"
import InputField from "../inputField"
import styles from "./Contact.module.css"
import { Form, FormikProvider } from "formik"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"

const ContactusForm = ({ formik }) => {
  return (
    <React.Fragment>
      <FormikProvider value={formik}>
        <Form>
          <Grid item xs={12}>
            <Grid container className={styles.basicBox} xs={12}>
              <Grid item xs={12} className={styles.fieldHeading} pt={1}>
                <InputField
                  id="name"
                  placeholder="Name"
                  variant="standard"
                  fullWidth
                  value={formik?.values?.name}
                  onChange={formik?.handleChange}
                  error={formik?.touched?.name && Boolean(formik?.errors?.name)}
                  helperText={formik?.touched?.name && formik?.errors?.name}
                  inputProps={{ maxLength: 20 }}
                />
              </Grid>
            </Grid>
            <Grid container className={styles.basicBox} xs={12}>
              <Grid item xs={12} className={styles.fieldHeading} pt={1}>
                <InputField
                  id="email"
                  placeholder="Eamil ID"
                  variant="standard"
                  fullWidth
                  value={formik?.values?.email}
                  onChange={formik?.handleChange("email")}
                  error={formik?.touched.email && Boolean(formik?.errors.email)}
                  helperText={formik?.touched.email && formik?.errors.email}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
            </Grid>
            <Grid container className={styles.basicBox} xs={12}>
              <Grid item xs={12} className={styles.fieldHeading}>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <Grid item>
                      <PhoneInput
                        placeholder="Enter country code"
                        value={formik?.values.country_code}
                        onChange={formik.handleChange("country_code")}
                        error={formik.touched.country_code && Boolean(formik.errors.country_code)}
                        helperText={
                          <FormHelperText
                            style={{ fontSize: "1.2rem", marginLeft: "0" }}
                            error={
                              formik?.touched?.country_code && Boolean(formik?.errors?.country_code)
                            }>
                            {formik?.touched?.country_code && formik?.errors?.country_code}
                          </FormHelperText>
                        }
                        inputStyle={{
                          border: "1px solid #41393E",
                          borderRadius: "6px",
                          fontSize: "1.6rem",
                          width: "100%",
                          height: "50px"
                        }}
                        dropdownStyle={{
                          width: "550%",
                          marginBottom: 30
                        }}
                        buttonStyle={{
                          borderRadius: "4px"
                        }}></PhoneInput>

                      <div className={styles.country_code_error}>
                        {formik.touched.countryCode && formik.errors.countryCode}
                      </div>
                    </Grid>
                  </Grid>
                  <Grid item xs={9}>
                    <InputField
                      id="phone"
                      placeholder="Enter Phone Number"
                      variant="standard"
                      type="tel"
                      value={formik?.values?.phone}
                      onChange={(e) => {
                        const numericValue = e.target.value.replace(/\D/g, "")
                        formik.setFieldValue("phone", numericValue)
                      }}
                      onPaste={(e) => {
                        const pastedText = e.clipboardData.getData("text/plain")
                        const numericPastedText = pastedText.replace(/\D/g, "")
                        formik.setFieldValue("phone", numericPastedText)
                        e.preventDefault()
                      }}
                      style={{ width: "100%" }}
                      error={formik?.touched?.phone && Boolean(formik.errors.phone)}
                      helperText={formik?.touched?.phone && formik.errors?.phone}
                      InputLabelProps={{
                        shrink: true
                      }}
                      InputProps={{ disableUnderline: true }}
                      inputProps={{ maxLength: 12 }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} className={styles.fieldHeading}>
            <Button
              type="submit"
              variant="contained"
              className={styles.button}
              sx={{ color: "#fff" }}>
              Contact Us
            </Button>
          </Grid>
        </Form>
      </FormikProvider>
    </React.Fragment>
  )
}

export default ContactusForm
