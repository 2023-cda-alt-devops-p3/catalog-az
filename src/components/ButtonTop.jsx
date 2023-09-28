import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'; 
const ButtonTop = () => {

    const scrollTop = (e) => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

  return (

    <div >
        <AiOutlineArrowUp  onClick={scrollTop} size={60} className="flex justify-between items-center w-40 h-14 px-4 top-90 right-2 fixed rond pointer" />
    </div>
        
  )
}

export default ButtonTop
