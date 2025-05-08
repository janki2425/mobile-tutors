import React from 'react'
import Image from 'next/image'

const OurCourse = () => {
  return (
    <div className='w-full max-w-[1360px] mx-auto my-[60px]'>
      <div className='flex flex-col gap-[40px]'>
        <div className='flex flex-col gap-[24px] max-w-[800px] mx-auto px-4'>
            <h3 className='H3-48 font-[500] text-center'>Our Courses</h3>
            <p className='P-16 text-center'>Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] md:gap-[40px] xl:gap-[60px] justify-items-center px-4 rounded-[24px] mb-[60px]'>
            <div className='w-full max-w-[387px]'>
            <Image src="/our-course/course-img-1.jpg" alt="course" width={387} height={300} className="rounded-t-[24px] w-full h-[300px] object-cover" />
                <div className='flex flex-col w-full bg-navy-blue py-4 gap-[8px] text-start px-4 rounded-b-[24px]'>
                  <p className='P-20 font-[500] text-white'>KS3 (Years 7-9)</p>
                  <p className='P-16 font-[500] text-white text-start'>Porem ipsum dolor sit amet, consectetur adipiscing elitunc vulputate libero et velit.</p>
                </div>
            </div>
            <div className='w-full max-w-[387px]'>
                <Image src="/our-course/course-img-2.jpg" alt="course" width={387} height={300} className='rounded-t-[24px] w-full h-[300px] object-cover'/>
                <div className='flex flex-col w-full bg-black py-4 gap-[8px] text-start px-4 rounded-b-[24px]'>
                  <p className='P-20 font-[500] text-white'>KS4 / GCSE (Years 10-11)</p>
                  <p className='P-16 font-[500] text-white text-start'>Porem ipsum dolor sit amet, consectetur adipiscing elitunc vulputate libero et velit.</p>
                </div>
            </div>
            <div className='w-full max-w-[387px]'>
                <Image src="/our-course/course-img-1.jpg" alt="course" width={387} height={300} className='rounded-t-[24px] w-full h-[300px] object-cover'/>
                <div className='flex flex-col w-full bg-gold py-4 gap-[8px] text-start px-4 rounded-b-[24px]'>
                  <p className='P-20 font-[500] text-black'>A-Level</p>
                  <p className='P-16 font-[500] text-black text-start'>Porem ipsum dolor sit amet, consectetur adipiscing elitunc vulputate libero et velit.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default OurCourse
