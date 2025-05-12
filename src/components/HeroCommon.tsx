import React, { ReactNode } from 'react'
import Image from 'next/image'

const HeroCommon = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex items-center min-h-screen px-[80px]'>
      <div className='flex-1 pr-8'>
        {children}
        </div>
        <div className='flex-shrink-0'>
        <Image src={'/Hero/banner.jpg'} alt='hero' width={610} height={740} 
        className='rounded-[16px] object-cover h-[740px] object-[20%_center]'
        />
      </div>
    </div>
  )
}

export default HeroCommon
