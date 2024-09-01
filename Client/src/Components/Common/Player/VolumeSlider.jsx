import React from 'react'
import { Volume,Volume1,Volume2,VolumeOff } from 'lucide-react'

const VolumeSlider = () => {
    const circleref = React.useRef(null)
    const VolumeSliderRef = React.useRef(null)
    const Barref = React.useRef(null)
    const [width, setWidth] = React.useState(0)

  
    //Also want to add when user Drag the VolumeSlider to change the position of the Volume also cahge the Icon of the Volume
    const handleClick = (e) => {
        const rect = Barref.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const percent = (x/rect.width)*100
        setWidth(percent)

    }
    const onHover = (e) => {
      //show the circle
      circleref.current.classList.remove('hidden')
      VolumeSliderRef.current.classList.remove('bg-white')
      VolumeSliderRef.current.classList.add('bg-green-500')
    }
    const onHoverOut = (e) => {
      //hide the circle
      VolumeSliderRef.current.classList.remove('bg-green-500')
      VolumeSliderRef.current.classList.add('bg-white')
      circleref.current.classList.add('hidden')
    }
  return (
    <div className='flex justify-center items-center gap-2 mr-8'>
    {width===0?<VolumeOff size={20} className='text-white/70'/>:width<33?<Volume size={20} className='text-white/70'/>:width<66?<Volume1 size={20} className='text-white/70'/>:<Volume2 size={20} className='text-white/70'/>}
    <div className=' min-w-32  bg-white/10 h-1 rounded-full'
        ref={Barref}
        onMouseEnter={onHover}
        onMouseLeave={onHoverOut}
        onClick={handleClick}       
    >
      <div 
      ref={VolumeSliderRef}
        className={`h-full  relative bg-white rounded-full`} style={{width:width+"%"}}>
        <div 
        ref={circleref}
        className='w-3 h-3 hidden absolute right-0 cursor-pointer -top-1 rounded-full bg-white hover:h-3'></div>
      </div>
    </div>

  </div>
  )
}

export default VolumeSlider