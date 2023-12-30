import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  selectedfeatures: [],
  selectedItem: {},
  selectedValue: {}
}

export const refinefeatureSlice = createSlice({
  name: "refinefeature",
  initialState,
  reducers: {
    setSelectedFeatures: (state, action) => {
      state.selectedfeatures = action.payload
    },
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload
    },
    setSelectedValue: (state, action) => {
      state.selectedValue = action.payload
    },

    clearSelectedFeatures: (state) => {
      state.selectedfeatures = []
    }
  }
})

export default refinefeatureSlice

export const { clearSelectedFeatures } = refinefeatureSlice.actions

// export default refinefeatureSlice.reducer
