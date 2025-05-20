import React from 'react'
import Image from 'next/image'

const Video = () => {
  return (
    <div className='w-full max-w-[1360px] relative mx-auto my-[60px]'>
      <div className='w-full'>
        <Image src="/video-section/video-img.jpg" 
        alt="video-play" 
        width={200} 
        height={200} 
        className='w-full h-[500px] object-cover rounded-[40px] mx-auto'
        />
      </div>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <Image src="/video-section/video-play.svg" 
        alt="video-play" 
        width={60} 
        height={60} 
        className='mx-auto cursor-pointer'
        />
      </div>
    </div>
  )
}

export default Video
