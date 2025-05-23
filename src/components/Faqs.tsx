'use client'
import React, { useState } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
export const faqData = [
  {
    categoryId: 1,
    question: 'Question text goes here',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
  },
  {
    categoryId: 2,
    question: 'Question text goes here',
    answer: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
  },
  {
    categoryId: 3,
    question: 'Question text goes here',
    answer: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
  },
  {
    categoryId: 4,
    question: 'Question text goes here',
    answer: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
  },
]

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? -1 : idx)
  }

  return (
    <div className='max-w-[1360px] flex flex-col lg:flex-row mx-auto my-[40px] md:my-[60px] px-2 md:px-4 xxl:px-0 transition-all duration-300'>
        <div className='flex flex-col w-full p-[40px] mx-auto gap-[24px] transition-all duration-300'>
            <h3 className='font-[500] H-24 lg:H3-48-120'>FAQs</h3>
            <div className='lg:hidden block my-auto mx-auto'>
                <Image src='/faqs/faq-img.png' alt='faq' width={500} height={500} />
            </div>
            <div className='w-full max-w-[756px]'>
                {faqData.map((faq, idx) => (
                <div key={idx} 
                onClick={() => handleToggle(idx)}
                className='mb-4 cursor-pointer'>
                    <div className='flex justify-between items-start font-[600] py-[12px]'>
                        <h6 className='P-16 lg:H6-20 font-[600]'>{faq.question}</h6>
                        <div
                        className='cursor-pointer'
                        > 
                              <span className='font-[500] H6-20 lg:H-24 transition-transform duration-300'>
                                  {openIndex === idx ? '-' : '+'}
                              </span>
                        </div>
                    </div>
                    <div 
                        className={`overflow-hidden transition-all duration-400 ease-in-out ${
                            openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                    >
                        <div className='font-[500] P-12 lg:P-16'>
                            {faq.answer}
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <Button
                variant='default'
                className='bg-gold rounded-[16px] P-14 max-w-[150px] py-[8px] px-[24px] cursor-pointer'
            >
                EXPLORE MORE
            </Button>
        </div>
        <div className='lg:block hidden mt-[75px] min-w-[500px] min-h-[500px]'>
            <Image src='/faqs/faq-img.png' alt='faq' width={500} height={500} />
        </div>
    </div>
  )
}

export default Faqs
