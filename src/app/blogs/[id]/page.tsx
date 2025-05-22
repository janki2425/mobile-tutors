import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import PostComment from '../PostComment'
import RelatedBlog from '../RelatedBlog'
const blog = () => {
    
    return (
        <>
        <div className='w-full max-w-[1360px] mx-auto py-[30px] lg:py-[60px] px-2 md:px-4 xxl:px-0 transition-all duration-300'>
           <div className='w-full flex flex-col gap-[20px] lg:gap-[40px] transition-all duration-300'>
                <div className='flex flex-col gap-[16px] transition-all duration-300'>
                    <div className='flex flex-wrap justify-between gap-[10px] transition-all duration-300'>
                        <div className='flex flex-wrap gap-[16px] transition-all duration-300'>
                            <Button variant='outline' className='py-[6px] px-[24px] w-fit P-12 lg:P-14 font-[500] rounded-[16px] transition-all duration-300'>MAY 07, 2025</Button>
                            <Button variant='outline' className='py-[6px] px-[24px] w-fit P-12 lg:P-14 font-[500] rounded-[16px] transition-all duration-300'>CATEGORY</Button>
                        </div>
                        <div className='flex flex-wrap gap-[16px] transition-all duration-300'>
                            <Button variant='outline' className='py-[6px] px-[24px] w-fit P-12 lg:P-14 font-[500] rounded-[16px] transition-all duration-300'>CAREER</Button>
                            <Button variant='outline' className='py-[6px] px-[24px] w-fit P-12 lg:P-14 font-[500] rounded-[16px] transition-all duration-300'>LESSONS</Button>
                        </div>
                    </div>
                    <div className='transition-all duration-300'>
                        <h2 className='H-24 md:H4-40 lg:H2-56-120 font-[700] text-center md:text-left transition-all duration-300'>Personalised Assessment</h2>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-[20px] lg:gap-[40px] transition-all duration-300'>
                    <div className='w-full h-[250px] md:h-[400px] lg:h-[500px] transition-all duration-300'>
                        <Image src="/blogs/blogs-img.jpg" alt='blogs' width={660} height={500} className='rounded-[24px] w-full h-full object-cover aspect-[2.5/1] transition-all duration-700 hover:scale-[1.02]'/>
                    </div>
                    <div className='flex flex-col gap-[20px] lg:gap-[40px] transition-all duration-300'>
                        <div className='flex flex-col gap-[8px] lg:gap-[16px] transition-all duration-300'>
                            <p className='P-12 lg:P-16 font-[500] transition-all duration-300'>Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                            <p className='P-12 lg:P-16 font-[500] transition-all duration-300'>Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                        </div>
                        <div className='flex flex-col gap-[8px] lg:gap-[16px] transition-all duration-300'>
                            <h5 className='H6-20 lg:H-24 font-[600] transition-all duration-300'>Lorem Lipsum</h5>
                            <div className='flex flex-col gap-[16px] lg:gap-[24px] transition-all duration-300'>
                                <p className='P-12 lg:P-16 font-[500] transition-all duration-300'>Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                                <p className='P-12 lg:P-16 font-[500] transition-all duration-300'>Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[8px] lg:gap-[16px] transition-all duration-300'>
                            <h5 className='H6-20 lg:H-24 font-[600] transition-all duration-300'>Lorem Lipsum</h5>
                            <div className='flex flex-col gap-[16px] lg:gap-[24px] transition-all duration-300'>
                                <p className='P-12 lg:P-16 font-[500] transition-all duration-300'>Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                                <p className='P-12 lg:P-16 font-[500] transition-all duration-300'>Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
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
