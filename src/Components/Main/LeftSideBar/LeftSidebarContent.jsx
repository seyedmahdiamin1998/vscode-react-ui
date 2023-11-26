import React from 'react'
import Items from './LeftSidebatContent/Items'

export default function LeftSidebarContent() {
    return (
        <>
            <div className="h-full w-64
                    dark:bg-primaryDark-100 border-r-[1px] dark:border-gray-900 ">
                <div className='w-full py-2 px-4  dark:text-textDark-20 '>
                    <p className='truncate hover:text-clip cursor-default select-none'>
                        Title
                    </p>
                </div>
                <div className='flex flex-col  w-full py-2'>
                    <Items title="subTitle 1" />                    
                    <Items title="subTitle 2" />                    
                    <Items title="subTitle 3" />                    
                    <Items title="subTitle 4" />                    
                </div>
            </div>
        </>
    )
}
