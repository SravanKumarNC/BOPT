import React from 'react'
import {IoMdDoneAll} from "react-icons/io"

const Box = ({title, value}) => {
  return (
    <div className='bg-gray-200 w-[20%] flex flex-col items-center rounded-lg '>
        <div className='flex items-center space-x-2 p-1'>
            <IoMdDoneAll/>
            <h2 className='font-bold text-xl'>{title}</h2>
        </div>
        <div className='bg-green-500 font-semibold w-full  flex items-center justify-center rounded-b-lg p-2'>{value}</div>
    </div>
  )
}

export default Box