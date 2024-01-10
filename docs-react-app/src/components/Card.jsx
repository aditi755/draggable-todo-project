import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import {motion} from 'framer-motion'
function Card({info, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}}><div className='relative w-60 h-72 rounded-[50px] bg-grey-900/90 text-white px-8 py-10 overflow-hidden'>
  <FaRegFileAlt />
  <p className="text-xm leading-tight mt-5 font-semibold">{info.description}</p>
<div className='footer absolute bottom-0  w-full h-20 bg-sky-500 left-0 py-3 px-8'>
   <div className="flex items-center justify-center px-8 py-3 mb-3 ">
    
    <span className=" w-30 h-10 border-4 border-black  rounded-full flex items-center justify-center">
    <LuDownload size=".8em" color="#fff"/>
    </span>
    <div className='mx-3 w-40 h-7 border-5 border-black flex items-center justify-center'>
    <h3>Download Now</h3>
   </div>
   </div>
   
  </div>
    </div>
    </motion.div>
  )
}

export default Card
