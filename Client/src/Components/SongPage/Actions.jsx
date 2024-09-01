import { Play } from 'lucide-react'
import { motion } from 'framer-motion'
import LibrarySearchBar from '../LibrarySearchBar'
import React, { useEffect } from 'react';
import { getSongs, hexToRGBA } from '../../services/Songs';

const Actions = ({song}) => {
    const DATA = getSongs()
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
    const [selectedOption, setSelectedOption] = React.useState("All");
    const [data,setdata] = React.useState(DATA)
    useEffect(() => {
      if(selectedOption === "All"){
          setdata(DATA)
      }else{
          setdata(DATA.filter((item)=>item.type+"s" === selectedOption))
      }
    }, [selectedOption])
    const gradientStyle = {
      background: `linear-gradient(to bottom, ${hexToRGBA(song.color.primary,0.8)} 0%, transparent 100%)`,
    };
      
  

  return (
    <div
    className="relative flex w-full items-start justify-between p-6 h-64 gap-5"
    style={gradientStyle}
  >
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="h-20 w-20 hover:bg-green-400 bg-green-500 flex justify-center items-center rounded-full"
    >
      <Play size={32} fill="black" color="black" />
    </motion.button>
    <LibrarySearchBar
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
      isSidebarOpen={isSidebarOpen}
    />
  </div>
  )
}

export default Actions