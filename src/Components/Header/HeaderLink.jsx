import React from 'react'

export default function HeaderLink({ name }) {

    return (
        <span className='px-2 text-sm rounded-sm
                        dark:text-textDark-20 hover:dark:text-textDark-10 hover:dark:bg-textDark-30
                        hover:outline-dashed hover:outline-offset-0 hover:outline-1 hover:outline-stone-900 select-none'>
            {name}
        </span>
    )
}


{/* <a className="px-2 text-sm dark:text-textDark-20 hover:dark:text-textDark-10 hover:dark:bg-textDark-30 rounded-sm    
hover:outline-dashed hover:outline-offset-0 hover:outline-1 hover:outline-stone-900  " href="">Edith</a> */}

