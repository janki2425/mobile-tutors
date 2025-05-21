import React, { ReactNode } from 'react'
import Image from 'next/image'

const HeroCommon = ({ children, hideImage = false }: { children: ReactNode, hideImage?: boolean }) => {
  return (
    <div className='flex items-center h-auto'>
      <div className='flex-1 w-full'>
        {children}
      </div>
      {!hideImage && (
        <div className='hidden cs:block flex-shrink-0 w-auto mt-0 mx-0 py-[80px] mr-[80px]'>
          <Image 
            src={'/Hero/banner.jpg'}
            alt='hero' 
            width={500} 
            height={400} 
            className='rounded-[16px] object-cover max-w-[500px] lg:max-w-[610px] h-auto lg:w-[610px] lg:h-[740px] object-[20%_center]'
          />
        </div>
      )}
    </div>
  )
}

export default HeroCommon
