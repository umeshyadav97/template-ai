import refinefeatureSlice from "../slices/refineFeatureSlice"
import { store } from "../store"

export const RefineFeature = {
  setSelectedFeatures: (payload) =>
    store.dispatch(refinefeatureSlice.actions.setSelectedFeatures(payload)),
  setSelectedItem: (payload) => store.dispatch(refinefeatureSlice.actions.setSelectedItem(payload)),
  setSelectedValue: (payload) =>
    store.dispatch(refinefeatureSlice.actions.setSelectedValue(payload))
}
