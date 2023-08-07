'use client'

import { ShowMoreProps } from "@/types"
import { useRouter } from "next/navigation"
import CustomButton from "./CustomButton"

const ShowMore = ({pageNumber,isNext}:ShowMoreProps) => {
  const router = useRouter()
  const handleNavigation =()=>{
    const newlimit = (pageNumber+1)*10
    const searchParams = new URLSearchParams(window.location.search)
    searchParams.set('limit',`${newlimit}`)
    const newSearchParams =`${window.location.pathname}?${searchParams}`
    router.push(newSearchParams)
  }
  return (
    <div className="w-full flex-center gap-5 mt-10">
       {!isNext && (<CustomButton 
         title="Show More"
         btnType="button"
         conatainerStyles="bg-primary-blue rounded-full text-white"
         handleClick={handleNavigation}
         />)}
      
    </div>
  )
}

export default ShowMore
