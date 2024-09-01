import React from 'react'
import SongInfo from './SongInfo'
import Manipulator from './Manipulator'
import VolumeSlider from './VolumeSlider'
import { motion } from 'framer-motion'

const Player = () => {
  return (
    <motion.div 
      initial={{y:100}}
      animate={{y:0}}
      transition={{type:'spring',stiffness:100,delay:0.3}}
    className='text-white fixed bottom-0 px-2 py-3 mb-3 min-w-full flex justify-between'>
      <SongInfo/>
      <Manipulator/>
      <VolumeSlider/>
    </motion.div>
  )
}

export default Player