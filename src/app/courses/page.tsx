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
    <div className='w-full max-w-[1360px] mx-auto my-[60px]'>
      <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-[60px]'>
            {courseData.map((course, idx) => (
                <div key={idx} className='w-full max-w-[413px] cursor-pointer' onClick={() => handleCourseClick(course.id)}>
                    <Image src={course.image} alt={course.title} width={413} height={300} className="rounded-t-[24px] w-full h-[300px] object-cover" />
                    <div className={`flex flex-col w-full ${course.id === 1 || course.id === 5 ? 'bg-navy-blue text-white' : 
                        course.id === 2 || course.id === 4 ? 'bg-black text-white' : 'bg-gold text-black'
                    } gap-[8px] text-start px-[24px] py-[21px] rounded-b-[24px]`}>
                        <p className='P-20 font-[500]'>{course.title}</p>
                        <p className='P-16 font-[500] text-start'>{course.description}</p>
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
