import homeSlice from "../slices/homeSlice"
import { store } from "../store"

export const Home = {
  setFeatures: (payload) => store.dispatch(homeSlice.actions.setFeatures(payload)),
  setCategory: (payload) => store.dispatch(homeSlice.actions.setCategory(payload)),
  setAmount: (payload) => store.dispatch(homeSlice.actions.setAmount(payload)),
  setTemplateData: (payload) => store.dispatch(homeSlice.actions.setTemplateData(payload))
}
