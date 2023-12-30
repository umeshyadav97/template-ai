import {
  Box,
  Button,
  Divider,
  Drawer,
  FormHelperText,
  Grid,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography
} from "@mui/material"
import React from "react"
import { Form, FormikProvider } from "formik"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import { useStyles } from "./resultScreenStyles"
import HighlightOffIcon from "@mui/icons-material/HighlightOff"
import { useEndingPageController } from "@local/controllers/privateControllers/endingPage.controller"

function RightDrawer({ isDrawerOpen, handleCloseDrawer, formik }) {
  const classes = useStyles()
  const styles = {}
  const { companySizeArray } = useEndingPageController()
  return (
    <Drawer
      anchor={"right"}
      open={isDrawerOpen}
      onClose={() => handleCloseDrawer(formik)}
      PaperProps={{ sx: { maxWidth: "640px" } }}>
      <Box sx={{ p: "2rem 3rem" }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Typography variant="h5">Contact us</Typography>
          <IconButton disableRipple onClick={() => handleCloseDrawer(formik)}>
            <HighlightOffIcon sx={{ fontSize: "3rem" }} />
          </IconButton>
        </Box>
      </Box>
      <Divider sx={{ borderColor: "text.gray3" }} />
      <Box sx={classes.box_container}>
        <FormikProvider value={formik}>
          <Form>
            <Grid item xs={12} sx={classes?.grid_box}>
              <Grid container xs={12}>
                <Grid item xs={12}>
                  <Typography variant="p1">Name</Typography>
                  <Box sx={{ mt: "8px" }}>
                    <TextField
                      id="name"
                      placeholder="Name"
                      fullWidth
                      value={formik?.values?.name}
                      onChange={formik?.handleChange}
                      error={formik?.touched?.name && Boolean(formik?.errors?.name)}
                      helperText={
                        <FormHelperText
                          style={{ fontSize: "1.2rem", marginLeft: "0" }}
                          error={formik?.touched?.name && Boolean(formik?.errors?.name)}>
                          {formik?.touched?.name && formik?.errors?.name}
                        </FormHelperText>
                      }
                      inputProps={{ maxLength: 40 }}
                      InputProps={{
                        disableUnderline: true,
                        style: { fontSize: "1.6rem", height: "5rem", borderRadius: "8px" }
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
              <Grid container xs={12}>
                <Grid item xs={12}>
                  <Typography variant="p1">Email</Typography>
                  <Box sx={{ mt: "8px" }}>
                    <TextField
                      id="email"
                      placeholder="Eamil ID"
                      fullWidth
                      value={formik?.values?.email}
                      onChange={formik?.handleChange("email")}
                      error={formik?.touched.email && Boolean(formik?.errors.email)}
                      helperText={
                        <FormHelperText
                          style={{ fontSize: "1.2rem", marginLeft: "0" }}
                          error={formik?.touched?.email && Boolean(formik?.errors?.email)}>
                          {formik?.touched?.email && formik?.errors?.email}
                        </FormHelperText>
                      }
                      InputProps={{
                        disableUnderline: true,
                        style: { fontSize: "1.6rem", height: "5rem", borderRadius: "8px" }
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
              <Grid container xs={12}>
                <Grid item xs={12}>
                  <Typography variant="p1">Mobile No.</Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={4} sm={3}>
                      <Grid item>
                        <PhoneInput
                          placeholder="Enter country code"
                          value={formik?.values.countryCode}
                          onChange={formik.handleChange("countryCode")}
                          error={formik.touched.countryCode && Boolean(formik.errors.countryCode)}
                          helperText={
                            <FormHelperText
                              style={{ fontSize: "1.2rem", marginLeft: "0" }}
                              error={
                                formik?.touched?.countryCode && Boolean(formik?.errors?.countryCode)
                              }>
                              {formik?.touched?.countryCode && formik?.errors?.countryCode}
                            </FormHelperText>
                          }
                          inputStyle={{
                            border: "2px solid #F4F2FF",
                            borderRadius: "6px",
                            fontSize: "1.6rem",
                            width: "100%",
                            height: "5rem"
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
                    <Grid item xs={8} sm={9}>
                      <TextField
                        id="phone"
                        placeholder="Enter Phone Number"
                        type="tel"
                        fullWidth
                        value={formik.values?.phone}
                        // onKeyDown={preventNonNumericalInput}
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
                        // onChange={formik?.handleChange}
                        error={formik?.touched?.phone && Boolean(formik.errors.phone)}
                        helperText={
                          <FormHelperText
                            style={{ fontSize: "1.2rem", marginLeft: "0" }}
                            error={formik?.touched?.phone && Boolean(formik?.errors?.phone)}>
                            {formik?.touched?.phone && formik?.errors?.phone}
                          </FormHelperText>
                        }
                        InputLabelProps={{
                          shrink: true
                        }}
                        inputProps={{ maxLength: 12 }}
                        InputProps={{
                          disableUnderline: true,
                          style: { fontSize: "1.6rem", height: "5rem", borderRadius: "8px" }
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container xs={12}>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="p1">Company Name</Typography>
                      <Box sx={{ mt: "8px" }}>
                        <TextField
                          id="companyName"
                          placeholder="Company Name"
                          fullWidth
                          value={formik?.values?.companyName}
                          onChange={formik?.handleChange("companyName")}
                          error={formik?.touched.companyName && Boolean(formik?.errors.companyName)}
                          helperText={formik?.touched.companyName && formik?.errors.companyName}
                          inputProps={{ maxLength: 20 }}
                          InputProps={{
                            disableUnderline: true,
                            style: { fontSize: "1.6rem", height: "5rem", borderRadius: "8px" }
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="p1">Company Size</Typography>
                      <Box sx={{ mt: "8px" }}>
                        <Select
                          fullWidth
                          value={formik?.values?.companySize}
                          onChange={formik?.handleChange("companySize")}
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                          sx={classes?.selectDropdown}
                          MenuProps={{
                            PaperProps: {
                              style: {
                                maxHeight: 300 // Set your preferred max height here
                              }
                            }
                          }}
                          style={{
                            fontSize: formik?.values?.companySize === "" ? "1.4rem" : "1.6rem",
                            color: formik?.values?.companySize === "" && "#949494",
                            borderRadius: "8px",
                            height: "5rem"
                          }}>
                          <MenuItem value={""} sx={{ fontSize: "1.6rem" }} disabled>
                            <em> {"Select size"}</em>
                          </MenuItem>
                          {companySizeArray.map((item, index) => (
                            <MenuItem key={index} value={item.value} sx={{ fontSize: "1.6rem" }}>
                              {item.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Box width="100%" sx={{ mt: "20px" }}>
              <Button
                type="submit"
                variant="contained"
                sx={{ padding: "11px 82px", color: "#fff", width: "100%" }}>
                Submit
              </Button>
            </Box>
          </Form>
        </FormikProvider>
      </Box>
    </Drawer>
  )
}

export default RightDrawer
