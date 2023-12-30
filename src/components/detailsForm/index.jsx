import { Box, Button, Grid } from "@mui/material"
import React from "react"
import FieldHeading from "../fieldHeading"
import InputField from "../inputField"
import styles from "./DetailsForm.module.css"
import DescriptionBox from "../descriptionBox"
import { Form, FormikProvider } from "formik"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import TextCounter from "../textCounter"

const DetailsForm = ({ formik }) => {
  return (
    <React.Fragment>
      <FormikProvider value={formik}>
        <Form>
          <Grid item xs={12}>
            <Grid container className={styles.basicBox} xs={12}>
              <Grid item xs={12} className={styles.fieldHeading}>
                <FieldHeading title="Name" />
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
              <Grid item xs={12} className={styles.fieldHeading}>
                <FieldHeading title=" Email" />
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
                <FieldHeading title="Mobile No." />
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <Grid item>
                      <PhoneInput
                        country={"us"}
                        placeholder="Enter country code"
                        value={formik?.values?.country_code}
                        onChange={formik?.handleChange("country_code")}
                        error={formik?.touched.country_code && Boolean(formik.errors.country_code)}
                        helperText={formik?.touched.country_code && formik.errors.country_code}
                        inputStyle={{
                          border: "1px solid #F4F2FF",
                          borderRadius: "6px",
                          fontSize: "15px",
                          width: "100%",
                          height: 39
                        }}
                        dropdownStyle={{
                          width: "550%",
                          marginBottom: 30,
                          height: 100
                        }}
                        buttonStyle={{
                          borderRadius: "4px"
                        }}></PhoneInput>

                      <div className={styles.country_code_error}>
                        {formik?.touched.countryCode && formik.errors.countryCode}
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
            <Grid item xs={12} mb={2} className={styles.fieldHeading}>
              <FieldHeading title="Build Card Name" />
              <InputField
                id="projectName"
                placeholder="Enter Build Card Name"
                variant="standard"
                fullWidth
                value={formik?.values?.projectName}
                onChange={formik?.handleChange}
                error={formik?.touched?.projectName && Boolean(formik?.errors?.projectName)}
                helperText={formik?.touched?.projectName && formik?.errors?.projectName}
                inputProps={{ maxLength: 20 }}
              />
            </Grid>
            <Grid container className={styles.basicBox} xs={12}>
              <Grid item xs={12} className={styles.fieldHeading}>
                <FieldHeading title="Message" />
                <DescriptionBox
                  id="description"
                  placeholder="Add Description"
                  variant="standard"
                  fullWidth
                  rows={2}
                  multiline
                  value={formik?.values?.description}
                  onChange={formik?.handleChange("description")}
                  InputLabelProps={{
                    shrink: true
                  }}
                  InputProps={{
                    disableUnderline: true
                  }}
                  error={formik?.touched?.description && Boolean(formik.errors.description)}
                  helperText={formik?.touched?.description && formik.errors.description}
                />
                <TextCounter
                  wordLength={200}
                  currentDescriptionLength={formik?.values?.description?.length}
                  maxLength={200}
                />
              </Grid>
            </Grid>
            {/* <Grid item py={2}>
              <Typography fontSize={"1.6rem"} fontFamily={"Inter SemiBold"} lineHeight={"1rem"}>
                Quotation
              </Typography>
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  padding: "0px 0px 20px 3px",
                  flexWrap: "wrap"
                }}>
                {cardData.map((item, index) => (
                  <Box key={index}>
                    <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
                      <Typography className={styles.typeText}>{item.type}</Typography>
                    </Box>
                    <Box sx={{ mt: "8px" }}>
                      <Typography className={styles.priceText}>{item.price}</Typography>
                    </Box>
                  </Box>
                ))}
                <Box item display="flex" alignItems="center">
                  =
                </Box>
                <Box>
                  <Typography className={styles.typeText}>Indicative Duration</Typography>
                  <Typography sx={{ mt: "5px" }} className={styles.priceText}>
                    45 weeks
                  </Typography>
                </Box>
              </Box>
            </Box> */}
          </Grid>
          <Box width="100%" display="flex" justifyContent="center" pl={2}>
            <Button type="submit" variant="contained" sx={{ padding: "11px 82px", color: "#fff" }}>
              Submit
            </Button>
          </Box>
        </Form>
      </FormikProvider>
    </React.Fragment>
  )
}

export default DetailsForm
