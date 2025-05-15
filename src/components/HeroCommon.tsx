import React, { ReactNode } from 'react'
import Image from 'next/image'

const HeroCommon = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex items-center min-h-screen px-[40px] md:px-[80px]'>
      <div className='flex-1 lg:pr-8 w-full'>
        {children}
      </div>
      <div className='hidden lg:block flex-shrink-0 w-auto mt-0 mx-0 py-[80px]'>
        <Image 
          src={'/Hero/banner.jpg'} 
          alt='hero' 
          width={610} 
          height={740} 
          className='rounded-[16px] object-cover h-[740px] object-[20%_center]'
        />
      </div>
    </div>
  )
}

export default HeroCommon
