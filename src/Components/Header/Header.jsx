import React from 'react'
import HeaderLink from './HeaderLink'

export default function Header() {
    return (
        <>
            <div className='w-full'>
                <div className="flex flex-row items-center w-full h-[35px] dark:bg-primaryDark-100 border-b-[1px] dark:border-gray-900">
                    <img className="pl-2 w-fit h-[55%] select-none" src="/favicon.svg" alt="" />

                    <div className="flex justify-around pl-2 gap-0">

                        <HeaderLink name="File" />
                        <HeaderLink name="Edith" />
                        <HeaderLink name="Selection" />
                        <HeaderLink name="View" />
                        <HeaderLink name="Go" />
                        <HeaderLink name="Run" />

                        <span className="text-sm dark:text-textDark-20 hover:dark:text-textDark-10 hover:dark:bg-textDark-30 rounded-sm px-2 hover:outline-dashed hover:outline-offset-0 hover:outline-1 hover:outline-stone-900">
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </span>

                    </div>
                </div>
            </div>
        </>
    )
}

