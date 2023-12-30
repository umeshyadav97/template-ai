import React from "react"
import CheckboxOnImage from "@local/assets/icons/checkbox-active.svg"
import CheckboxOffImage from "@local/assets/icons/checkbox-inactive.svg"
import CheckboxFilledOnImage from "@local/assets/icons/checkbox-active.svg"
import Image from "next/image"

const Checkbox = ({ isOn = false, style = {}, onToggle, isFilled = false }) => {
  return (
    <div
      onClick={onToggle}
      style={{
        ...style,
        cursor: "pointer"
      }}>
      <Image
        src={!isOn ? CheckboxOffImage : isFilled ? CheckboxFilledOnImage : CheckboxOnImage}
        alt="img"
        height={18}
        width={18}
        style={{ marginRight: 14 }}
      />
    </div>
  )
}

export default Checkbox
