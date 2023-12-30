import currencySlice from "../slices/currencySlice"
import { store } from "../store"

export const Currency = {
  setCurrency: (payload) => store.dispatch(currencySlice.actions.setCurrency(payload))
}
