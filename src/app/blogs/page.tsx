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
    <div className='w-full max-w-[1360px] mx-auto my-[60px] px-4'>
      <div className='flex flex-col gap-[40px]'>
        <div className='flex flex-wrap items-center'>
            {blogCategory.map((category, idx) => (
                <div key={idx} className='py-[10px]'>
                <div className={`flex justify-between items-center py-[6px] px-[24px] cursor-pointer rounded-[16px] ${openIndex === idx ? 'bg-gold' : ''}`} onClick={() => handleToggle(idx)}>
                    <h6 className='text-[24px] font-[600]'>{category}</h6>
                </div>
                </div>
            ))}
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 mx-auto gap-[40px]'>
            {blogData.map((blog, idx) => (
                <div 
                key={idx} 
                onClick={() => handleBlogClick(blog.id)}
                className='flex flex-col gap-[24px] max-w-[660px]'>
                        <Image src={blog.image} alt={blog.title} width={660} height={400}  className='rounded-[24px]'/>
                        <div className='flex flex-col gap-[16px]'>
                            <h4 className='H4-40 font-[500]'>{blog.title}</h4>
                            <p className='P-16 font-[500]'>{blog.description}</p>
                        </div>
                        <Button variant='outline' className='py-[8px] px-[24px] w-fit P-14 rounded-[16px]'>READ MORE</Button>
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
