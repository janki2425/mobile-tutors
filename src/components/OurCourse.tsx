import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

const OurCourse = () => {
  return (
    <div id='courses' className='w-full max-w-[1360px] mx-auto mt-[60px] mb-[77px]'>
      <div className='flex flex-col gap-[40px] px-4'>
        <div className='flex flex-col gap-[24px] max-w-[800px] mx-auto px-4'>
            <h3 className='H3-48-120 font-[500] text-center'>Our Courses</h3>
            <p className='P-16 text-center'>Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] md:gap-[40px] xl:gap-[60px] justify-items-center rounded-[24px]'>
            <div className='w-full max-w-[387px]'>
              <Image src="/our-course/course-img-1.jpg" alt="course" width={387} height={300} className="rounded-t-[24px] w-full h-[300px] object-cover" />
              <div className='flex flex-col w-full bg-navy-blue gap-[8px] text-start px-[24px] py-[21px] rounded-b-[24px]'>
                <p className='P-20 font-[500] text-white'>KS3 (Years 7-9)</p>
                <p className='P-16 font-[500] text-white text-start'>Porem ipsum dolor sit amet, consectetur adipiscing elitunc vulputate libero et velit.</p>
              </div>
            </div>
            <div className='w-full max-w-[387px]'>
                <Image src="/our-course/course-img-2.jpg" alt="course" width={387} height={300} className='rounded-t-[24px] w-full h-[300px] object-cover'/>
                <div className='flex flex-col w-full bg-black gap-[8px] text-start px-[24px] py-[21px] rounded-b-[24px]'>
                  <p className='P-20 font-[500] text-white'>KS4 / GCSE (Years 10-11)</p>
                  <p className='P-16 font-[500] text-white text-start'>Porem ipsum dolor sit amet, consectetur adipiscing elitunc vulputate libero et velit.</p>
                </div>
            </div>
            <div className='w-full max-w-[387px]'>
                <Image src="/our-course/course-img-1.jpg" alt="course" width={387} height={300} className='rounded-t-[24px] w-full h-[300px] object-cover'/>
                <div className='flex flex-col w-full bg-gold gap-[8px] text-start px-[24px] py-[21px] rounded-b-[24px]'>
                  <p className='P-20 font-[500] text-black'>A-Level</p>
                  <p className='P-16 font-[500] text-black text-start'>Porem ipsum dolor sit amet, consectetur adipiscing elitunc vulputate libero et velit.</p>
                </div>
            </div>
        </div>
        <div className='w-full flex'>
          <Button variant='default'
          className='bg-gold max-w-[150px] text-black P-14 mx-auto rounded-[16px] font-[500] py-[8px] px-[24px]'
          >EXPLORE MORE</Button>
        </div>
      </div>
    </div>
  )
}

export default OurCourse
