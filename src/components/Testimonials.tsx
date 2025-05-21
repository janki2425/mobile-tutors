'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const testimonials = [
    {
        id: 1,
        name: 'John Stephen',
        rating: 5,
        position: 'CEO',
        testimonial: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.'
    },
    {
        id: 2,
        name: 'John Stephen',
        rating: 5,
        position: 'CEO',
        testimonial: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.'
    },
    {
        id: 3,
        name: 'John Stephen',
        rating: 4,
        position: 'CEO',
        testimonial: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.'
    },
    {
        id: 4,
        name: 'John Stephen',
        rating: 3,
        position: 'CEO',
        testimonial: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.'
    }
]

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);
  return isMobile;
}

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0)
  const isMobile = useIsMobile();
  const maxIndex = isMobile ? testimonials.length - 1 : testimonials.length - 2;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  }

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, maxIndex));
  }

  return (
    <div className='w-full max-w-[1440px] my-[60px] bg-[#F5F5F5] rounded-[24px] mx-auto px-2 md:px-4 xxl:px-0'>
      <div className='w-full max-w-[1360px] flex flex-col lg:flex-row gap-[40px] md:gap-[80px] lg:gap-[120px] py-[20px] lg:py-[80px] mx-auto'>
        <h6 className='text-[28px] lg:H^-20 font-[600] mx-auto lg:mx-0'>TESTIMONIALS</h6>
        <div className='flex flex-col lg:flex-row gap-[40px] items-start mx-auto lg:mx-0'>
            <div className='flex items-center justify-center w-[100px] h-[100px]'>
            <Image src="/testimonials/quotes.svg" alt="quotes" width={83} height={67} 
            className='w-[83px] h-[67px]'
            />
            </div>
            <div className='flex flex-col gap-[40px]'>
                <div className={`overflow-hidden w-full ${isMobile ? 'max-w-[325px]' : 'max-w-[916px]'}`}> 
                    <div
                        className='flex transition-transform duration-500 ease-in-out'
                        style={{
                        transform: `translateX(-${startIndex * (isMobile ? 100 : 50)}%)`
                        }}
                    >
                        {testimonials.map((testimonial, idx) => (
                        <div
                            key={testimonial.id}
                            className={`w-full flex-shrink-0 flex flex-col gap-[24px] px-2 box-border ${!isMobile ? 'md:w-[50%] md:max-w-[458px]' : ''}`}
                        >
                            <div className='flex gap-[4px]'>
                            {Array.from({ length: testimonial.rating }).map((_, index) => (
                                <div key={index} className='relative w-[27px] h-[26px] p-1 bg-[#00B67A]'>
                                <Image src='/testimonials/star.svg' alt='star' width={23} height={22} />
                                <Image src='/testimonials/star-style.svg' alt='star-style' width={5} height={3}
                                    className='absolute top-[15px] left-[13px]' />
                                </div>
                            ))}
                            </div>
                            <div className='max-w-[458px] flex flex-col gap-[24px]'>
                            <h5 className='H-24 font-[600]'>{testimonial.testimonial}</h5>
                            <div className='flex flex-col items-start'>
                                <p className='P-16 font-[500]'>{testimonial.name}</p>
                                <p className='P-16 font-[500]'>{testimonial.position}</p>
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                <div className='flex w-full max-w-[88px] justify-between'> 
                    <Image
                    src='/testimonials/left-arrow.svg'
                    alt='left'
                    width={32}
                    height={32}
                    className={`cursor-pointer ${startIndex === 0 ? 'opacity-50 pointer-events-none' : ''}`}
                    onClick={handlePrev}
                    />
                    <Image
                    src='/testimonials/right-arrow.svg'
                    alt='right'
                    width={32}
                    height={32}
                    className={`cursor-pointer ${startIndex === maxIndex ? 'opacity-50 pointer-events-none' : ''}`}
                    onClick={handleNext}
                    />

                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
