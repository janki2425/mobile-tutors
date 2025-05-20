import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import Courses from './Courses'
const OurCourse = () => {
  return (
    <div id='courses' className='w-full max-w-[1360px] mx-auto mt-[60px] mb-[77px]'>
      <div className='flex flex-col gap-[40px]'>
        <div className='flex flex-col gap-[24px] max-w-[800px] mx-auto px-4'>
            <h3 className='H3-48-120 font-[500] text-center'>Our Courses</h3>
            <p className='P-16 text-center'>Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.</p>
        </div>
        <Courses/>
        <div className='w-full flex'>
          <Button variant='default'
          className='bg-gold max-w-[150px] text-black P-14 mx-auto rounded-[16px] font-[500] py-[8px] px-[24px] cursor-pointer'
          >EXPLORE MORE</Button>
        </div>
      </div>
    </div>
  )
}

export default OurCourse
