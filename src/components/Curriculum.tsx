import React from 'react'
import { Button } from './ui/button'

const Curriculum = () => {
  return (
    <div className='w-full max-w-[1440px] bg-navy-blue mx-auto py-[60px] px-[40px]'>
      <div className='w-full flex flex-col gap-[40px] mx-auto'>
        <div className='w-full flex justify-center'>
            <h2 className='w-full max-w-[1360px] flex justify-center H2-56-120 font-[500] text-white'>Curriculum</h2>
        </div>
        <div className='flex gap-[40px]'>
            <div className='flex flex-col gap-[8px] bg-gold p-[24px] rounded-[24px]'>
                <h6 className='H6-20 font-[600] text-black'>Perfected by experts</h6>
                <p className='P-16 font-[500] text-black'>Curriculum built by our teachers — all subject experts, including several experienced examiners.</p>
            </div>
            <div className='flex flex-col gap-[8px] bg-white p-[24px] rounded-[24px]'>
                <h6 className='H6-20 font-[600] text-black'>Perfected by experts</h6>
                <p className='P-16 font-[500] text-black'>Curriculum built by our teachers — all subject experts, including several experienced examiners.</p>
            </div>
        </div>
        <div className='w-full flex justify-center'>
            <Button variant='default' className='bg-white text-navy-blue P-14 font-[500] rounded-[24px] py-[8px] px-[24px] cursor-pointer'>FULL YEAR 5/6 MATHS CURRICULUM</Button>
        </div>
      </div>
    </div>
  )
}

export default Curriculum
