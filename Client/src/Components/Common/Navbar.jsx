import React from 'react'
import {Bell, House, Search} from 'lucide-react'
import Avatar from './Avatar'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex px-4 justify-between items-center'>
        <img src="/Spotify.png" className='w-8 h-8' alt="Spotify Logo" />
        <div className='flex gap-3 items-center'>
          <Link to='/' className="text-white/70 w-12 h-12 bg-white/10 flex justify-center items-center rounded-full hover:scale-105 transition-all cursor-pointer">
              <House size={25}/>
          </Link>
          <div className='relative'>
            <input type="text" placeholder='What do you want to play' className='bg-white/10 min-w-96 pl-12 outline-none focus:border-white border-2 border-black transition-all text-white placeholder-white/60 placeholder:font-semibold py-3 rounded-full' />
            <Search size={30} className='absolute top-1/2 left-2 transform -translate-y-1/2 text-white/70'/>
          </div>
        </div>
        <div className='flex items-center gap-3 '>
          <Bell size={25} className='text-white/70'/>
          <Avatar/>
        </div>
    </nav>
  )
}

export default Navbar