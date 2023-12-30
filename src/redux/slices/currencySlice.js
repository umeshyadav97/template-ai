import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  currency: {
    code: "INR",
    icon: "b85cb3b2-b250-4834-b3ff-8cf63d2303cb",
    icon_url: "https://s3.amazonaws.com/nfx-stropeai/images/currency/icon_inr.svg",
    id: "f13292e2-66dc-4e45-a7ff-6dc3f1adc96a",
    name: "Indian Rupee",
    rate: "1.000",
    symbol: "₹"
  }
}

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.currency = action.payload
    }
  }
})

export default currencySlice
