import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import PostComment from '../PostComment'
import RelatedBlog from '../RelatedBlog'
const blog = () => {
    
    return (
        <>
        <div className='w-full max-w-[1360px] mx-auto py-[60px]'>
           <div className='w-full flex flex-col gap-[40px] px-4'>
                <div className='flex flex-col gap-[16px]'>
                    <div className='flex flex-wrap justify-between gap-[10px]'>
                        <div className='flex flex-wrap gap-[16px]'>
                            <Button variant='outline' className='py-[6px] px-[24px] w-fit P-14 font-[500] rounded-[16px]'>MAY 07, 2025</Button>
                            <Button variant='outline' className='py-[6px] px-[24px] w-fit P-14 font-[500] rounded-[16px]'>CATEGORY</Button>
                        </div>
                        <div className='flex flex-wrap gap-[16px]'>
                            <Button variant='outline' className='py-[6px] px-[24px] w-fit P-14 font-[500] rounded-[16px]'>CAREER</Button>
                            <Button variant='outline' className='py-[6px] px-[24px] w-fit P-14 font-[500] rounded-[16px]'>LESSONS</Button>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-[36px] md:H1-56 font-[700] text-center md:text-left'>Personalised Assessment</h1>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-[40px]'>
                    <Image src="/blogs/blogs-img.jpg" alt='blogs' width={660} height={500} className='rounded-[24px] w-full h-[300px] md:h-[500px]'/>
                    <div className='flex flex-col gap-[40px]'>
                        <div className='flex flex-col gap-[16px]'>
                            <p className='P-16 font-[500]'>Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                            <p className='P-16 font-[500]'>Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                        </div>
                        <div className='flex flex-col gap-[16px]'>
                            <h5 className='H-24 font-[600]'>Lorem Lipsum</h5>
                            <div className='flex flex-col gap-[24px]'>
                                <p className='P-16 font-[500]'>Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                                <p className='P-16 font-[500]'>Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[16px]'>
                            <h5 className='H-24 font-[600]'>Lorem Lipsum</h5>
                            <div className='flex flex-col gap-[24px]'>
                                <p className='P-16 font-[500]'>Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                                <p className='P-16 font-[500]'>Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
        <PostComment />
        <RelatedBlog />
        </>
    )
}

export default blog
