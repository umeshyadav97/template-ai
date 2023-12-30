import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  features: {},
  category: [],
  amount: {},
  template: {},
  isFromQuiz: false
}

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setFeatures: (state, action) => {
      state.features = action.payload
    },
    setCategory: (state, action) => {
      state.category = action.payload.category
      state.isFromQuiz = action.payload.isFromQuiz ? action.payload.isFromQuiz : false
    },
    setAmount: (state, action) => {
      state.amount = action.payload
    },
    setTemplateData: (state, action) => {
      state.template = action.payload
    },
    clearCategory: (state) => {
      state.selectedfeatures = []
    }
  }
})

export default homeSlice

export const { clearCategory } = homeSlice.actions
