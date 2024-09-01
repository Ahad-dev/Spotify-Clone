import React from 'react'
import Sidebar from '../Components/Sidebar'
import MainMedia from '../Components/MainMedia'
import InfoBar from '../Components/InfoBar'

const HomePage = () => {
  return (
    <div className='text-white flex gap-3 relative h-[78vh]'>
      <Sidebar/>
      <MainMedia/>
      <InfoBar/>
    </div>
  )
}

export default HomePage