import React from 'react'
import About from '@/components/About'
import Faqs from '@/components/Faqs'
import Testimonials from '@/components/Testimonials'
import Video from '@/components/Video'
import Contact from '@/components/Contact'
import Courses from '@/components/Courses'
import { Button } from '@/components/ui/button'
import Approach from './Approach'
import Mission from './Mission'

const Page = () => {
  return (
    <>
      <About/>
      <Video/>
      <Mission/>
      <Approach/>
      <Testimonials/>
      <div className='w-full max-w-[1360px] mx-auto px-2 md:px-4 xxl:px-0'>
        <div className='flex flex-col gap-[40px]'>
            <div className='flex flex-col max-w-[800px] mx-auto gap-[24px]'>
            <h3 className='H3-48-120 font-[500] text-center'>Choose Your Subject</h3>
            <p className='P-16 text-center'>Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.</p>
            </div>
            <Courses/>
            <div className='w-full flex'>
            <Button variant='default'
            className='bg-gold max-w-[150px] text-black P-14 mx-auto rounded-[16px] font-[500] py-[8px] px-[24px]'
            >EXPLORE MORE</Button>
            </div>
        </div>
      </div>
      <Faqs/>
      <Contact/>
    </>
  )
}

export default Page
