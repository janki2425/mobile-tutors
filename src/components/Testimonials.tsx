import React from 'react'
import Image from 'next/image'
const Testimonials = () => {

  return (
    <div className='w-full max-w-[1440px] my-[60px] bg-[#F5F5F5] rounded-[24px] mx-auto'>
      <div className='w-full max-w-[1360px] flex flex-col lg:flex-row gap-[40px] md:gap-[80px] lg:gap-[120px] py-[80px] px-[40px] mx-auto'>
        <h6 className='H-20 font-[600] mx-auto lg:mx-0'>TESTIMONIALS</h6>
        <div className='flex flex-col lg:flex-row gap-[40px] items-start mx-auto lg:mx-0'>
            <div className='flex items-center justify-center w-[100px] h-[100px]'>
            <Image src="/testimonials/quotes.svg" alt="quotes" width={83} height={67} />
            </div>
            <div className='flex flex-col gap-[40px]'>
                <div className='flex flex-col md:flex-row gap-[40px]'>
                    <div className='flex flex-col gap-[24px]'>
                        <div className='flex gap-[4px]'>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <div key={index} className='relative w-[27px] h-[26px] p-1 bg-[#00B67A]'>
                                <Image src='/testimonials/star.svg' alt='star' width={23} height={22} />
                                <Image src='/testimonials/star-style.svg' alt='star' width={5} height={3} 
                                className='absolute top-[15px] left-[13px]'/>
                            </div>
                            ))}
                        </div>
                        <div className='max-w-[458px] flex flex-col gap-[24px]'>
                            <h5 className='H-24 font-[600]'>Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.</h5>
                            <div className='flex flex-col items-start'>
                                <p className='P-16 font-[500]'>John Stephen</p>
                                <p className='P-16 font-[500]'>CEO</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[24px]'>
                        <div className='flex gap-[4px]'>
                        {Array.from({ length: 5 }).map((_, index) => (
                                <div key={index} className='relative w-[27px] h-[26px] p-1 bg-[#00B67A]'>
                                <Image src='/testimonials/star.svg' alt='star' width={23} height={22} />
                                <Image src='/testimonials/star-style.svg' alt='star' width={5} height={3} 
                                className='absolute top-[15px] left-[13px]'/>
                            </div>
                            ))}
                        </div>
                        <div className='max-w-[458px] flex flex-col gap-[24px]'>
                            <h5 className='H-24 font-[600]'>Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.</h5>
                            <div className='flex flex-col items-start'>
                                <p className='P-16 font-[500]'>John Stephen</p>
                                <p className='P-16 font-[500]'>CEO</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex w-full max-w-[88px] justify-between'> 
                    <Image src='/testimonials/left-arrow.svg' alt='star' width={32} height={32} className='cursor-pointer'/>
                    <Image src='/testimonials/right-arrow.svg' alt='star' width={32} height={32} className='cursor-pointer'/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
