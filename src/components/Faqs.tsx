'use client'
import React, { useState } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
export const faqData = [
  {
    question: 'Question text goes here',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
    category: ['GENERAL', 'COURSES', 'PAYMENT & PRICING', 'ENROLLMENT REQUIREMENTS', 'LESSONS', 'REFERRALS']
  },
  {
    question: 'Question text goes here',
    answer: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
    category: ['GENERAL', 'COURSES', 'PAYMENT & PRICING', 'ENROLLMENT REQUIREMENTS', 'LESSONS', 'REFERRALS']
  },
  {
    question: 'Question text goes here',
    answer: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
    category: ['GENERAL', 'COURSES', 'PAYMENT & PRICING', 'ENROLLMENT REQUIREMENTS', 'LESSONS', 'REFERRALS']
  },
  {
    question: 'Question text goes here',
    answer: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
    category: ['GENERAL', 'COURSES', 'PAYMENT & PRICING', 'ENROLLMENT REQUIREMENTS', 'LESSONS', 'REFERRALS']
  },
]

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? -1 : idx)
  }

  return (
    <div className='max-w-[1360px] flex flex-col lg:flex-row px-4 mx-auto my-[60px]'>
        <div className='flex flex-col max-w-[836px] p-[40px] mx-auto gap-[24px]'>
            <h3 className='font-[600] H3-48'>FAQs</h3>
            <div className='lg:hidden block my-auto mx-auto'>
                <Image src='/faqs/faq-img.png' alt='faq' width={500} height={500} />
            </div>
            <div className='w-full'>
                {faqData.map((faq, idx) => (
                <div key={idx} className='mb-4'>
                    <div className='flex justify-between items-start font-[600] py-2'>
                        <h6 className='H6-20 font-[600] py-2'>{faq.question}</h6>
                        <div
                        className='cursor-pointer'
                        onClick={() => handleToggle(idx)}
                        > 
                            <span className='font-[500] text-[24px] px-2'>
                                {openIndex === idx ? '-' : '+'}
                            </span>
                        </div>
                    </div>
                    {openIndex === idx && faq.answer && (
                    <div className='font-[500] P-16'>
                        {faq.answer}
                    </div>
                    )}
                </div>
                ))}
            </div>
            <Button
                variant='default'
                className='bg-gold rounded-[16px] P-14 max-w-[150px]'
            >
                EXPLORE MORE
            </Button>
        </div>
        <div className='lg:block hidden my-auto mx-auto min-w-[500px] min-h-[500px]'>
            <Image src='/faqs/faq-img.png' alt='faq' width={500} height={500} />
        </div>
    </div>
  )
}

export default Faqs
