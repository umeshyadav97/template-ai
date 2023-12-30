import React from "react"
import CheckboxOnImage from "@local/assets/icons/circularfilledCheckbox.svg"
import CheckboxOffImage from "@local/assets/icons/circularEmptyCheckbox.svg"
import Image from "next/image"

const CircularCheckbox = ({ isOn = false, style = {}, onToggle, isFilled = false }) => {
  // console.log(isOn)
  return (
    <div
      onClick={onToggle}
      style={{
        ...style,
        cursor: "pointer"
      }}>
      <Image
        src={!isOn ? CheckboxOffImage : isFilled ? CheckboxOnImage : CheckboxOnImage}
        alt="img"
        height={20}
        width={20}
      />
    </div>
  )
}

export default CircularCheckbox
