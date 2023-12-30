import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  selectedQuestion: [],
  selectedCategory: {}
}

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuestion: (state, action) => {
      state.selectedQuestion = action.payload
    },
    setCategory: (state, action) => {
      state.selectedQuestion = action.payload
    }
  }
})

export default quizSlice
