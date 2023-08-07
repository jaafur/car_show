"use client"
import Image from "next/image"
import { CustomButtonProps } from "@/types"
const CustomButton = ({title,btnType,conatainerStyles,handleClick,textStyle,rightIcon,isDisabled}:CustomButtonProps) => {
  return (
    <button 
     disabled={false}
     type={btnType}
     className={`custom-btn ${conatainerStyles}`}
     onClick={handleClick}
    >
      <span className={`flex-1 ${textStyle}`}>
        {title} 
      </span>
     {rightIcon &&
      (<div className="relative w-6 h-6">
         <Image 
           src={rightIcon}
           alt="right icon"
           fill
           className="object-contain"
           />
        </div>) }
    </button>
  )
}

export default CustomButton
