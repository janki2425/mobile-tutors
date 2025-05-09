import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full max-w-[1360px] mx-auto my-[80px] px-4'>
      <div className='flex flex-col xl:flex-row gap-[40px] xl:gap-[110px] justify-content-around xl:itmes-start'>
        <div className='mx-auto xl:mx-0'>
            <h6 className='H6-20 font-[600] whitespace-nowrap'>ABOUT US</h6>
        </div>
        <div className='flex flex-col gap-[40px]'>
            <h3 className='text-center max-w-[800px] xl:text-start mx-auto xl:mx-0 px-4 xl:px-0 font-[500] H3-48'>
            Hi! We are Mobile Tutors
            The most effective, engaging, and affordable online learning platform
            </h3>
            <p className='P-16 font-[500] text-center xl:text-left'>John Stephen, CEO</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-4 gap-[73px] mx-auto xl:mx-0'>
                <div className='max-w-[230px] flex flex-col gap-[16px] bg-gold rounded-[24px] p-[24px] items-start justify-center'>
                    <h2 className='text-[74px] font-[500] leading-[120%]'>70+</h2>
                    <div className='flex flex-col gap-[8px]'>
                        <h6 className='H6-20 font-[600]'>Options Teachers</h6>
                        <p className='P-16 font-[500]'>Lorem ipsum dolor sit amet conse tel.</p>
                    </div>
                </div>
                <div className='max-w-[230px] flex flex-col gap-[16px] bg-[#F5F5F5] rounded-[24px] p-[24px] items-start justify-center'>
                    <h2 className='text-[74px] font-[500] leading-[120%]'>3K+</h2>
                    <div className='flex flex-col gap-[8px]'>
                        <h6 className='H6-20 font-[600]'>Students</h6>
                        <p className='P-16 font-[500]'>Lorem ipsum dolor sit amet conse tel.</p>
                    </div>
                </div>
                <div className='max-w-[230px] flex flex-col gap-[16px] bg-navy-blue text-white rounded-[24px] p-[24px] items-start justify-center'>
                    <h2 className='text-[74px] font-[500] leading-[120%]'>23</h2>
                    <div className='flex flex-col gap-[8px]'>
                        <h6 className='H6-20 font-[600]'>Online Courses</h6>
                        <p className='P-16 font-[500]'>Lorem ipsum dolor sit amet conse tel.</p>
                    </div>
                </div>
                <div className='max-w-[230px] flex flex-col gap-[16px] bg-[#F5F5F5] rounded-[24px] p-[24px] items-start justify-center'>
                    <h2 className='text-[74px] font-[500] leading-[120%]'>82%</h2>
                    <div className='flex flex-col gap-[8px]'>
                        <h6 className='H6-20 font-[600]'>Success Rate</h6>
                        <p className='P-16 font-[500]'>Lorem ipsum dolor sit amet conse tel.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
