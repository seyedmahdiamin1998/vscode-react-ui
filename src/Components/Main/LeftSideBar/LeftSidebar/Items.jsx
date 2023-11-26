import React from 'react'

export default function Items({ isActive = false, children }) {
  return (
    <>
      <div className={`flex relative justify-center items-center hover:cursor-pointer
                      ${ isActive ? "text-textDark-10": "dark:text-textDark-40"}  hover:dark:text-textDark-10`} >

        {isActive ? <div className='absolute h-full w-[2px] bg-textDark-10 left-0'></div> : null}
        {children}
      </div>
    </>
  )
}
