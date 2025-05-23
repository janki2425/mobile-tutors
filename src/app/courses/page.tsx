'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Testimonials from '@/components/Testimonials'
import Faqs from '@/components/Faqs'
import Contact from '@/components/Contact'

const courseData = [
    {
        id: 1,
        image: '/our-course/course-img-1.jpg',
        title: 'KS3 (Years 7-9)',
        description: 'Porem ipsum dolor sit amet, consectetur adipiscing elitunc vulputate libero et velit.',
    },
    {
        id: 2,
        image: '/our-course/course-img-2.jpg',
        title: 'KS4 / GCSE (Years 10-11)',
        description: 'Porem ipsum dolor sit amet, consectetur adipiscing elitunc vulputate libero et velit.',
    },
    {
        id: 3,
        image: '/our-course/course-img-1.jpg',
        title: 'A-Level',
        description: 'Porem ipsum dolor sit amet, consectetur adipiscing elitunc vulputate libero et velit.',
    },
    {
        id: 4,
        image: '/our-course/course-img-2.jpg',
        title: 'KS4 / GCSE (Years 10-11)',
        description: 'Porem ipsum dolor sit amet, consectetur adipiscing elitunc vulputate libero et velit.',
    },
    {
        id: 5,
        image: '/our-course/course-img-1.jpg',
        title: 'KS3 (Years 7-9)',
        description: 'Porem ipsum dolor sit amet, consectetur adipiscing elitunc vulputate libero et velit.',
    },
    {
        id: 6,
        image: '/our-course/course-img-1.jpg',
        title: 'A-Level',
        description: 'Porem ipsum dolor sit amet, consectetur adipiscing elitunc vulputate libero et velit.',
    },
    
]
const Page = () => {
    const [openIndex, setOpenIndex] = useState(0)
    const router = useRouter()
    const [selectedCourse, setSelectedCourse] = useState<number | null>(null)

    const handleCourseClick = (id: number) => {
        setSelectedCourse(id)
        router.push(`/courses/${id}`)
    }

  return (
    <>
    <div className='w-full max-w-[1360px] mx-auto my-[60px] px-2 md:px-4 xxl:px-0'>
      <div className='w-full mx-auto'>
      <div className='flex flex-wrap justify-items-center gap-[20px] md:gap-[40px] lg:gap-[60px] transition-all duration-300'>
            {courseData.map((course, idx) => (
                <div key={idx} className='w-full max-w-[250px] md:max-w-[280px] lg:max-w-[413px] transition-all duration-300 mx-auto cursor-pointer' onClick={() => handleCourseClick(course.id)}>
                    <Image src={course.image} alt={course.title} width={413} height={300} className="rounded-t-[24px] h-[180px] md:h-[220px] lg:h-[300px] object-cover transition-all duration-300" />
                    <div className={`flex flex-col w-full ${course.id === 1 || course.id === 5 ? 'bg-navy-blue text-white' : 
                        course.id === 2 || course.id === 4 ? 'bg-black text-white' : 'bg-gold text-black'
                    } gap-[4px] lg:gap-[8px] text-start px-[24px] py-[12px] lg:py-[21px] rounded-b-[24px] transition-all duration-300`}>
                        <p className='P-18 lg:P-20 font-[500]'>{course.title}</p>
                        <p className='P-12 lg:P-16 font-[500] text-start'>{course.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
    <Testimonials />
    <Faqs/>
    <Contact/>
    </>
  )
}

export default Page
