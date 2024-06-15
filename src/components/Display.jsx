import React from 'react'

function Display({calVal}) {
  return (
    <>
     <div className=" flex justify-center items-center ">
            <input type="text" className="mx-auto w-[70%] h-[60px] m-4 rounded-lg border-2 border-solid border-gray-500 text-2xl"
            value={calVal} readOnly/>
          </div>
    </>
  )
}

export default Display
