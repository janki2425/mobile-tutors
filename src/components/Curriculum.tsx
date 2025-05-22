import React from 'react'
import { Button } from './ui/button'

const Curriculum = () => {
  return (
    <div className='w-full bg-navy-blue py-[40px] lg:py-[60px] px-[40px]'>
      <div className='w-full flex flex-col gap-[24px] md:gap-[40px] mx-auto'>
        <div className='w-full flex justify-center'>
            <h2 className='w-full max-w-[1360px] flex justify-center H5-32 lg:H2-56-120 font-[500] text-white'>Curriculum</h2>
        </div>
        <div className='flex flex-col md:flex-row gap-[24px] md:gap-[40px] mx-auto transition-all duration-300'>
            <div className='flex flex-col gap-[8px] bg-gold p-[24px] rounded-[24px] transition-all duration-300'>
                <h6 className='P-18 lg:H6-20-120 font-[600] text-black'>Perfected by experts</h6>
                <p className='P-14 lg:P-16 font-[500] text-black'>Curriculum built by our teachers — all subject experts, including several experienced examiners.</p>
            </div>
            <div className='flex flex-col gap-[8px] bg-white p-[24px] rounded-[24px] transition-all duration-300'>
                <h6 className='P-18 lg:H6-20-120 font-[600] text-black'>Perfected by experts</h6>
                <p className='P-14 lg:P-16 font-[500] text-black'>Curriculum built by our teachers — all subject experts, including several experienced examiners.</p>
            </div>
        </div>
        <div className='w-full flex justify-center'>
            <Button variant='default' className='bg-white text-navy-blue P-12 lg:P-14 font-[500] rounded-[24px] py-[8px] px-[24px] cursor-pointer'>FULL YEAR 5/6 MATHS CURRICULUM</Button>
        </div>
      </div>
    </div>
  )
}

export default Curriculum
