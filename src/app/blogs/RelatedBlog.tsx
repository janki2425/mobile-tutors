'use client'
import React ,{ useState } from 'react'
import Image from 'next/image'
import { blogData } from '@/utils/data' 
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

const RelatedBlog = () => {
    const router = useRouter()
    const [selectedBlog, setSelectedBlog] = useState<number | null>(null)

    const handleBlogClick = (id: number) => {
        setSelectedBlog(id)
        router.push(`/blogs/${id}`)
    }

  return (
    <div className='w-full max-w-[1360px] mx-auto my-[60px]'>
      <div className='flex flex-col gap-[40px]'>
        <div className='flex justify-between items-center px-4'>
            <h3 className='H3-48-120 font-[500]'>Related Blogs</h3>
            <div className="flex w-[88px] h-[32px] items-center gap-[24px] z-10">
                    <div className="flex w-[32px] h-[32px] items-center justify-center">
                    <Image src={'/testimonials/left-arrow.svg'} width={19} height={32} alt="left" className="w-[19px] h-[32px] cursor-pointer" />
                    </div>
                    <div className="flex w-[32px] h-[32px] items-center justify-center">
                    <Image src={'/testimonials/right-arrow.svg'} width={19} height={32} alt="right" className="w-[19px] h-[32px] cursor-pointer" />
                    </div>
                </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 mx-auto gap-[40px]'>
                {blogData.slice(0, 2).map((blog, idx) => (
                    <div 
                    key={idx} 
                    onClick={() => handleBlogClick(blog.id)}
                    className='flex flex-col gap-[24px] max-w-[660px] cursor-pointer'>
                            <Image src={blog.image} alt={blog.title} width={660} height={400}  className='rounded-[24px] h-[400px]'/>
                            <div className='flex flex-col gap-[16px] px-4'>
                              <div className='flex flex-col gap-[16px]'>
                                  <h4 className='H4-40-120 font-[500]'>{blog.title}</h4>
                                  <p className='P-16 font-[500]'>{blog.description}</p>
                              </div>
                              <Button variant='outline' className='py-[8px] px-[24px] w-fit P-14 rounded-[16px] cursor-pointer'>READ MORE</Button>
                            </div>
                    </div>
                ))}
            </div>
      </div>
    </div>
  )
}

export default RelatedBlog
