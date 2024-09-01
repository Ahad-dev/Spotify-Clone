import React from 'react'

const InfoBar = () => {
  return (
    <div className='bg-white/10 rounded-lg mt-2 flex-1 max-w-96 min-w-24 p-3 overflow-hidden relative'>
        <h1 className='text-xl font-semibold text-white bg-white/10 p-2 mb-2 rounded-xl'>Now Playing</h1>
        <div className='relative'>
        <div className='absolute w-full h-full bg-gradient-to-t from-black to-transparent'></div>
        <img src="https://m.media-amazon.com/images/M/MV5BYmY1ZWJjZjItNzhiYy00YTI0LTk3OGUtYmM4MDk5YThjYzBmXkEyXkFqcGdeQXVyNTM3MzQ3NzE@._V1_.jpg" className=' w-full aspect-auto  object-contain' alt="" />
        </div>
        <div className='absolute bottom-10 left-5 flex flex-col gap-2 mt-2 '>
            <h1 className='text-xl font-semibold text-white'>Teffa in Trouble</h1>
            <p className='text-white/70'>Ali Zafar</p>
        </div>
    </div>
  )
}

export default InfoBar