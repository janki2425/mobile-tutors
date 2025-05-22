import React from 'react'

const About = () => {
  return (
    <div className='w-full max-w-[1360px] mx-auto my-[80px] px-2 md:px-4 xxl:px-0'>
        <div className='w-full flex flex-col gap-[20px] lg:gap-[40px]'>
            <h3 className='text-center max-w-[800px] xl:text-start mx-auto xl:mx-0 px-4 xl:px-0 font-[500] P-20 md:H5-32 lg:H3-48-120 transition-all duration-300'>
            Hi! We are Mobile Tutors
            The most effective, engaging, and affordable online learning platform
            </h3>
            <p className='P-16 font-[500] text-center xl:text-left transition-all duration-300'>John Stephen, CEO</p>
            <div className='w-full max-w-[1142px] mx-auto flex flex-wrap gap-[20px] lg:gap-[72px] justify-center'>
                <div className='max-w-[180px] lg:max-w-[231px] flex flex-col gap-[12px] lg:gap-[16px] bg-gold rounded-[24px] p-[24px] transition-all duration-300'>
                    <h2 className='H4-40-120 lg:H-74 font-[500]'>70+</h2>
                    <div className='flex flex-col gap-[4px] lg:gap-[8px]'>
                        <h6 className='P-14 lg:H6-20 font-[600]'>Options Teachers</h6>
                        <p className='P-12 lg:P-16 font-[500]'>Lorem ipsum dolor sit amet conse tel.</p>
                    </div>
                </div>
                <div className='max-w-[180px] lg:max-w-[231px] flex flex-col gap-[16px] bg-[#F5F5F5] rounded-[24px] p-[24px] items-start transition-all duration-300'>
                    <h2 className='H4-40-120 lg:H-74 font-[500]'>3K+</h2>
                    <div className='flex flex-col gap-[4px] lg:gap-[8px]'>
                        <h6 className='P-14 lg:H6-20 font-[600]'>Students</h6>
                        <p className='P-12 lg:P-16 font-[500]'>Lorem ipsum dolor sit amet conse tel.</p>
                    </div>
                </div>
                <div className='max-w-[180px] lg:max-w-[231px] flex flex-col gap-[16px] bg-navy-blue text-white rounded-[24px] p-[24px] items-start transition-all duration-300'>
                    <h2 className='H4-40-120 lg:H-74 font-[500] leading-[120%]'>23</h2>
                    <div className='flex flex-col gap-[4px] lg:gap-[8px]'>
                        <h6 className='P-14 lg:H6-20 font-[600]'>Online Courses</h6>
                        <p className='P-12 lg:P-16 font-[500]'>Lorem ipsum dolor sit amet conse tel.</p>
                    </div>
                </div>
                <div className='max-w-[180px] lg:max-w-[231px] flex flex-col gap-[16px] bg-[#F5F5F5] rounded-[24px] p-[24px] items-start transition-all duration-300'>
                    <h2 className='H4-40-120 lg:H-74 font-[500] leading-[120%]'>82%</h2>
                    <div className='flex flex-col gap-[4px] lg:gap-[8px]'>
                        <h6 className='P-14 lg:H6-20 font-[600]'>Success Rate</h6>
                        <p className='P-12 lg:P-16 font-[500]'>Lorem ipsum dolor sit amet conse tel.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
