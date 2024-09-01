import React from 'react'

const Slider = () => {
    const circleref = React.useRef(null)
    const sliderRef = React.useRef(null)
    const Barref = React.useRef(null)
    const [width, setWidth] = React.useState(0)
  
    //Also want to add when user Drag the slider to change the position of the song
    const handleClick = (e) => {
      const rect = Barref.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const percent = (x/rect.width)*100
      setWidth(percent
      )
    }
    const onHover = (e) => {
      //show the circle
      circleref.current.classList.remove('hidden')
      sliderRef.current.classList.remove('bg-white')
      sliderRef.current.classList.add('bg-green-500')
    }
    const onHoverOut = (e) => {
      //hide the circle
      sliderRef.current.classList.remove('bg-green-500')
      sliderRef.current.classList.add('bg-white')
      circleref.current.classList.add('hidden')
    }
  return (
    <div className='flex justify-center items-center gap-2'>
    <span className='text-white/70'>{width.toFixed(2)}%</span>
    <div className=' min-w-96 w-[32rem] bg-white/10 h-1 rounded-full'
        ref={Barref}
        onMouseEnter={onHover}
        onMouseLeave={onHoverOut}
        onClick={handleClick}       
    >
      <div 
      ref={sliderRef}
        className={`h-full  relative bg-white rounded-full`} style={{width:width+"%"}}>
        <div 
        ref={circleref}
        className='w-3 h-3 hidden absolute right-0 cursor-pointer -top-1 rounded-full bg-white hover:h-3'></div>
      </div>
    </div>
    <span className='text-white/70'>100%</span>

  </div>
  )
}

export default Slider