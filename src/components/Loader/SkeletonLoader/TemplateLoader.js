import { Grid } from "@mui/material"
import React from "react"
import ContentLoader from "react-content-loader"

const TemplateLoader = (props) => (
  <Grid container xs={12}>
    <Grid item xs={6} display="flex" justifyContent="center">
      <ContentLoader
        speed={1}
        width={427}
        height={646}
        viewBox="0 0 427 646"
        backgroundColor="#EAECF0"
        foregroundColor="#fbf9f9"
        {...props}>
        <rect x="114" y="1" rx="14" ry="14" width="183" height="376" />
        <path d="M 122.585 9.586 h 165.829 v 358.977 H 122.585 z" />
        <rect x="102" y="402" rx="5" ry="5" width="207" height="18" />
        <path d="M 277.5 452.147 a 8 8 0 0 -8 -8 h -64 v 46.5 h 64 a 8 8 0 8 -8 v -30.5 z" />
        <rect x="0" y="515" rx="5" ry="5" width="99" height="142" />
        <rect x="109" y="515" rx="5" ry="5" width="99" height="142" />
        <rect x="218" y="515" rx="5" ry="5" width="99" height="142" />
        <rect x="327" y="515" rx="5" ry="5" width="99" height="142" />
      </ContentLoader>
    </Grid>
    <Grid item xs={6} display="flex" justifyContent="center">
      <ContentLoader
        speed={1}
        width={427}
        height={646}
        viewBox="0 0 427 646"
        backgroundColor="#EAECF0"
        foregroundColor="#fbf9f9"
        {...props}>
        <rect x="0" y="0" rx="5" ry="5" width="34" height="40" />
        <rect x="47" y="0" rx="5" ry="5" width="120" height="40" />
        <rect x="0" y="53" rx="5" ry="5" width="345" height="18" />
        <rect x="0" y="83" rx="5" ry="5" width="394" height="128" />
        <path d="M 0 223 h 394" />
        <rect x="0" y="235" rx="5" ry="5" width="207" height="18" />
        <rect x="0" y="265" rx="5" ry="5" width="299" height="32" />
        <path d="M 0 309 h 394" />
        <rect x="0" y="321" rx="5" ry="5" width="207" height="18" />
        <rect x="0" y="351" rx="5" ry="5" width="326" height="22" />
        <rect x="0" y="385" rx="5" ry="5" width="326" height="22" />
        <rect x="0" y="419" rx="5" ry="5" width="326" height="22" />
        <path d="M 0 453 h 394" />
        <rect x="0" y="465" rx="5" ry="5" width="34" height="40" />
        <rect x="47" y="465" rx="5" ry="5" width="120" height="40" />
        <rect x="0" y="518" rx="5" ry="5" width="394" height="128" />
      </ContentLoader>
    </Grid>
  </Grid>
)

export default TemplateLoader
