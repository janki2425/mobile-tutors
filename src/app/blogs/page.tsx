'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import SuccessStory from '@/components/SuccessStory'
import Contact from '@/components/Contact'
import { useRouter } from 'next/navigation'
import { blogData } from '@/utils/data'

const blogCategory = [
    'TIPS FOR EXAM SUCCESS',
    'SUBJECTS INSIGHTS',
    'OTHERS',
]

const Blogs = () => {
    const [openIndex, setOpenIndex] = useState(0)
    const router = useRouter()
    const [selectedBlog, setSelectedBlog] = useState<number | null>(null)

    const handleBlogClick = (id: number) => {
        setSelectedBlog(id)
        router.push(`/blogs/${id}`)
    }


    const handleToggle = (idx: number) => {
        setOpenIndex(openIndex === idx ? 0 : idx)
    }
  return (
    <>
    <div className='w-full max-w-[1360px] mx-auto my-[60px] px-2 md:px-4 xxl:px-0'>
      <div className='flex flex-col gap-[24px] lg:gap-[40px]'>
        <div className='flex flex-wrap items-center'>
            {blogCategory.map((category, idx) => (
                <div key={idx} className='py-[6px] lg:py-[10px] cursor-pointer'>
                <div className={`flex justify-between items-center py-[6px] px-[24px] cursor-pointer rounded-[16px] transition-all duration-300 ease-in-out ${openIndex === idx ? 'bg-gold' : 'hover:bg-gray-100'}`} onClick={() => handleToggle(idx)}>
                    <h6 className='P-14 md:P-16 lg:P-18 xl:H-24 font-[600] transition-all duration-300'>{category}</h6>
                </div>
                </div>
            ))}
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 mx-auto gap-[40px]'>
            {blogData.map((blog, idx) => (
                <div 
                key={idx} 
                onClick={() => handleBlogClick(blog.id)}
                className='flex flex-col gap-[16px] lg:gap-[24px] max-w-[660px] h-auto cursor-pointer transition-all duration-300'>
                        <div className='w-full h-full overflow-hidden rounded-[24px] hover:scale-[5.02] transition-all duration-700'>
                            <Image src={blog.image} alt={blog.title} width={660} height={400}  className='rounded-[24px] h-[200px] md:h-[300px] xl:h-[400px] object-cover transition-all duration-300 hover:scale-110'/>
                        </div>
                        <div className='flex flex-col gap-[8px] lg:gap-[16px] transition-all duration-300'>
                            <h4 className='H-24 xl:H4-40-120 font-[500] transition-all duration-300'>{blog.title}</h4>
                            <p className='P-14 xl:P-16 font-[500] transition-all duration-300'>{blog.description}</p>
                        </div>
                        <Button variant='outline' className='py-[6px] xl:py-[8px] px-[12px] xl:px-[24px] w-fit P-12 xl:P-14 rounded-[16px] cursor-pointer transition-all duration-300'>READ MORE</Button>
                </div>
            ))}
        </div>
      </div>
    </div>
    <SuccessStory/>
    <Contact/>
    </>
  )
}

export default Blogs
