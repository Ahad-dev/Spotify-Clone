import React from 'react'
import SelectedItem from '../Components/SongPage/SelectedItem'
import Actions from '../Components/SongPage/Actions'
import SongsTable from '../Components/SongPage/SongsTable'
import { getSongById } from '../services/Songs'
import { useParams } from 'react-router-dom'
import { Loader } from 'lucide-react'


const SongsPage = () => {
    const {id} = useParams()
    //get ID from url
    console.log(id,getSongById(id))
    //get song by ID
    const [song, setSong] = React.useState(null)
    React.useEffect(() => {
        setSong(getSongById(id))
    }, [id])

    
  return (
    <div className='bg-white/10 rounded-lg mt-2 flex-1 min-w-96  overflow-auto'>
        {song?(<><SelectedItem song = {song} /><Actions song = {song}/><SongsTable/></>):<Loader className='size-10 animate-spin mx-auto h-full'></Loader>}
    </div>
  )
}

export default SongsPage