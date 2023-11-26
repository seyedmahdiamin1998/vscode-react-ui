import React from 'react'
import HeaderLink from '../Header/HeaderLink'

export default function Footer() {
    return (
        <>
            <div className='w-full border-t-[1px] dark:border-gray-900'>
                <div className="flex flex-row justify-between w-full h-6 dark:bg-primaryDark-100 border-b-[1px] dark:border-gray-900">
                    {/* left */}
                    <div className='flex flex-row justify-start w-full h-full'>
                        <img className="px-2 w-fit h-fit bg-panel-30 hover:dark:bg-textDark-30 select-none" src="/favicon.svg" alt="" />

                        <div className="w-full flex justify-start  pl-1 gap-1 select-none">


                            <span className="text-sm dark:text-textDark-20 hover:dark:text-textDark-10 hover:dark:bg-textDark-30 px-2">
                                test
                            </span>

                            <span className="text-sm dark:text-textDark-20 hover:dark:text-textDark-10 hover:dark:bg-textDark-30 px-2">
                                test
                            </span>

                        </div>
                    </div>

                    {/* right */}
                    <div className='flex flex-row-reverse  w-full h-full select-none'>
                        <img className="px-2 w-fit h-fit bg-panel-30 hover:dark:bg-textDark-30" src="/favicon.svg" alt="" />

                        <div className="w-full flex flex-row-reverse  pl-1 gap-1">


                            <span className="text-sm dark:text-textDark-20 hover:dark:text-textDark-10 hover:dark:bg-textDark-30 px-2">
                                test 1
                            </span>

                            <span className="text-sm dark:text-textDark-20 hover:dark:text-textDark-10 hover:dark:bg-textDark-30 px-2">
                                test 2
                            </span>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

