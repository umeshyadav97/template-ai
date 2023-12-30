import { useState } from "react"

export function useAddNotesController() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  const [addNotes, setAddNotes] = useState()
  const handleInputChange = (event) => {
    const inputValue = event.target.value
    setAddNotes(inputValue)
    setIsButtonDisabled(inputValue === "") // Disable the button if the input is empty
  }
  return { handleInputChange, addNotes, isButtonDisabled }
}
