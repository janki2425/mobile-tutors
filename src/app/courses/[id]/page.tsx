import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Content from '../Content'
import Pricing from '@/components/Pricing'
import Curriculum from '@/components/Curriculum'
import OurCourse from '@/components/OurCourse'
import Testimonials from '@/components/Testimonials'
import Faqs from '@/components/Faqs'
import Contact from '@/components/Contact'

const Page = () => {
  return (
    <>
    <div className='w-full max-w-[1360px] mx-auto my-[60px] px-2 md:px-4 xxl:px-0 transition-all duration-300'>
      <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-[32px] transition-all duration-300'>
        <div className='flex flex-col w-full max-w-full lg:max-w-[700px] gap-[24px] transition-all duration-300'>
          <div className='flex flex-col gap-[16px]'>
            <h2 className='text-[36px] md:H5-32 lg:H2-56-120 font-[500] transition-all duration-300'>Maths</h2>
            <div className='flex flex-wrap gap-[16px] transition-all duration-300'>
              <Button variant='outline' className='py-[6px] px-[24px] P-12 xl:P-14 font-[500] rounded-[16px] transition-all duration-300'>KS3 (Years 7-9)</Button>
              <Button variant='outline' className='py-[6px] px-[24px] P-12 xl:P-14 font-[500] rounded-[16px] transition-all duration-300'>60 hours of learning</Button>
            </div>
          </div>
          <div className='flex flex-col gap-[24px]'>
            <p className='P-14 xl:P-16 font-[500] transition-all duration-300'>Build a strong foundation for Secondary School Maths with our Key Stage 2 course. It will cover the full curriculum for Year 5 and 6 maths in 10 months.</p>
            <p className='P-14 xl:P-16 font-[500] transition-all duration-300'>Lorem lipsum <br />
              Head of Maths at Mobile Tutors</p>
          </div>
        </div>
        <div className='w-full max-w-[600px]'>
          <Image 
            src='/blogs/blogs-img.jpg'
            alt='course'
            width={600} 
            height={400} 
            className='rounded-[24px] w-full lg:w-[500px] xl:w-full h-auto object-cover transition-all duration-300' />
        </div>
      </div>
    </div>
    <Content/>
    <Pricing/>
    <Curriculum/>
    <OurCourse/>
    <Testimonials/>
    <Faqs/>
    <Contact/>
    </>
  )
}

export default Page
