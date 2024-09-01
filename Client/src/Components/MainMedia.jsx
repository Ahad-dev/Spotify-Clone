import React from 'react'
import SongCard from './SongCard'
import { getSongs } from '../services/Songs'


const MainMedia = () => {
  const [songs,setSongs] = React.useState([])
  React.useEffect(() => {
    setSongs(getSongs())
  },[])
  
  return (
    <div className='bg-white/10 rounded-lg mt-2 flex-1 min-w-96 space-y-5 p-6 overflow-auto'>
      <div>
        <h1 className='text-xl font-semibold text-white'>Your Mixes</h1>
        <div className='flex overflow-auto '>
          {songs.map(song => <SongCard key={song.id} song={song}/>)}
          {songs.map(song => <SongCard key={song.id} song={song}/>)}
        </div>
      </div>
      <div>
        <h1 className='text-xl font-semibold text-white'>Your Mixes</h1>
        <div className='flex overflow-auto '>

          {songs.map(song => <SongCard key={song.id} song={song}/>)}
          {songs.map(song => <SongCard key={song.id} song={song}/>)}
        </div>
      </div>

      
    </div>

  )
}

export default MainMedia