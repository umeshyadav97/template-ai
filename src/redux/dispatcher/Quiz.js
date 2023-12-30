import quizSlice from "../slices/quizSlice"
import { store } from "../store"

export const Quiz = {
  setQuestion: (payload) => store.dispatch(quizSlice.actions.setQuestion(payload))
}
