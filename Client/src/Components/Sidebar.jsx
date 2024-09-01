import { Library, Plus, Search } from 'lucide-react'
import React, { useEffect } from 'react'
import LibrarySearchBar from './LibrarySearchBar'
import InfoCard from './InfoCard'
import { motion } from 'framer-motion'

const DATA = [
    {
        id: 1,
        type: 'Playlist',
        lable:"This is Atif Aslam",
        img:'./AtifAslamp.png'
    },
    {
        id: 2,
        type: 'Album',
        lable:"Teffa In Trouble",
        img:'./TITA.png'
    },
    {
        id: 3,
        type: 'Artist',
        lable:"Atif Aslam",
        img:'./AtifAslama.png'
    }
]

const Sidebar = () => {
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
    

  return (
    <motion.div
     animate={{ width: isSidebarOpen ? 288 : 90 }} className={`bg-white/10 rounded-lg mt-2 p-4 space-y-8 ${isSidebarOpen?"w-72":"w-24"}`} >
        <div className='flex gap-3 items-center justify-between'>
            <div className='flex gap-3 text-white/70 cursor-pointer hover:text-white font-semibold text-lg'>
                <Library onClick={()=>setIsSidebarOpen(!isSidebarOpen)}/>
                <span className={`${!isSidebarOpen&&"hidden"}`}>Your Library</span>
            </div>
            <div className=' cursor-pointer  rounded-full p-2 hover:bg-white/10'>
                <Plus className='text-white/70'/>
            </div>
        </div>
        {/*Search*/}
        <LibrarySearchBar selectedOption={selectedOption} setSelectedOption={setSelectedOption} isSidebarOpen ={isSidebarOpen}/>
        <div className='space-y-3 '>
            {data.map((item) => (
                <InfoCard isSidebarOpen ={isSidebarOpen} key={item.id} img={item.img} type={item.type} lable={item.lable}/>
            ))}
        </div>

    </motion.div>
  )
}

export default Sidebar