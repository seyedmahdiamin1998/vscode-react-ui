import React from 'react'

export default function Items({ title }) {
  return (
    <>
      <p className='w-full px-4 
                  hover:dark:bg-textDark-60  dark:text-textDark-40 hover:dark:text-textDark-10 
                    cursor-pointer select-none' >{title}</p>
    </>
  )
}
