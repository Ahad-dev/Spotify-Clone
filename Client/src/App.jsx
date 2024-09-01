import {Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Navbar from './Components/Common/Navbar'
import Player from './Components/Common/Player/Player'
import SongsPage from './Pages/SongsPage'
import MainMedia from './Components/MainMedia'
import Sidebar from './Components/Sidebar'
import InfoBar from './Components/InfoBar'

export default function App() {
  return (
      <div className="h-screen bg-black overflow-y-hidden overflow-x-auto py-2 px-2">
        <Navbar/>
        <div className='text-white flex gap-3 relative h-[78vh]'>
          <Sidebar/>
        <Routes>
          <Route path='/' element={<MainMedia/>}/>
          <Route path='/:id' element={<SongsPage/>}/>
        </Routes>
          <InfoBar/>
        </div>
        <Player/>
      </div>
  )
}