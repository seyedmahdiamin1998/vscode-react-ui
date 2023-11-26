import React from 'react'
import LeftSidebar from './LeftSideBar/LeftSidebar'
import LeftSidebarContent from './LeftSideBar/LeftSidebarContent'
import Content from './Content/Content'

export default function Main() {
  return (
    <>
      <div className='w-full h-full'>

        <div className="flex flex-row h-full ">
          <LeftSidebar />
          <LeftSidebarContent />
          <Content />
        </div>

      </div>
    </>
  )
}
