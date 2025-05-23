import React from 'react'
import Image from 'next/image'


const Courses = () => {
  return (
    <div className='w-full max-w-[1360px] mx-auto'>
      <div className='flex flex-wrap justify-center gap-[20px] md:gap-[40px] xl:gap-[60px] rounded-[24px] transition-all duration-300'>
            <div className='w-full max-w-[250px] md:max-w-[280px] lg:max-w-[387px] cursor-pointer'>
              <div className='w-full h-[180px] md:h-[220px] lg:h-[300px]'>
                  <Image src="/our-course/course-img-1.jpg" alt="course" width={387} height={300} className="rounded-t-[24px] w-full h-full object-cover transition-all duration-300" />
              </div>
              <div className='flex flex-col w-full bg-navy-blue gap-[4px] lg:gap-[8px] text-start px-[24px] py-[12px] lg:py-[21px] rounded-b-[24px] transition-all duration-300'>
                <p className='P-18 lg:P-20 font-[500] text-white'>KS3 (Years 7-9)</p>
                <p className='P-12 lg:P-16 font-[500] text-white text-start'>Porem ipsum dolor sit amet, consectetur adipiscing elitunc vulputate libero et velit.</p>
              </div>
            </div>
            <div className='w-full max-w-[250px] md:max-w-[280px] lg:max-w-[387px] cursor-pointer'>
                <div className='w-full h-[180px] md:h-[220px] lg:h-[300px]'>
                  <Image src="/our-course/course-img-2.jpg" alt="course" width={387} height={300} className='rounded-t-[24px] w-full h-full object-cover transition-all duration-300'/>
                </div>
                <div className='flex flex-col w-full bg-black gap-[4px] lg:gap-[8px] text-start px-[24px] py-[12px] lg:py-[21px] rounded-b-[24px] transition-all duration-300'>
                  <p className='P-18 lg:P-20 font-[500] text-white'>KS4 / GCSE (Years 10-11)</p>
                  <p className='P-12 lg:P-16 font-[500] text-white text-start'>Porem ipsum dolor sit amet, consectetur adipiscing elitunc vulputate libero et velit.</p>
                </div>
            </div>
            <div className='w-full max-w-[250px] md:max-w-[280px] lg:max-w-[387px] cursor-pointer'>
                <div className='w-full h-[180px] md:h-[220px] lg:h-[300px]'>
                  <Image src="/our-course/course-img-1.jpg" alt="course" width={387} height={300} className='rounded-t-[24px] w-full h-full object-cover transition-all duration-300'/>
                </div>
                <div className='flex flex-col w-full bg-gold gap-[4px] lg:gap-[8px] text-start px-[24px] py-[12px] lg:py-[21px] rounded-b-[24px] transition-all duration-300'>
                  <p className='P-18 lg:P-20 font-[500] text-black'>A-Level</p>
                  <p className='P-12 lg:P-16 font-[500] text-black text-start'>Porem ipsum dolor sit amet, consectetur adipiscing elitunc vulputate libero et velit.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Courses
