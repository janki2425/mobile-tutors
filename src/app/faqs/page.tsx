'use client'
import React, { useState } from 'react'
import { faqData } from '@/components/Faqs'

const faqCategory = [
  { id: 1, title: 'GENERAL' },
  { id: 2, title: 'COURSES' },
  { id: 3, title: 'PAYMENT & PRICING' },
  { id: 4, title: 'ENROLLMENT REQUIREMENTS' },
  { id: 5, title: 'LESSONS' },
  { id: 6, title: 'REFERRALS' }
]

const FaqsPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [activeCategoryId, setActiveCategoryId] = useState(1)

  const handleCategoryClick = (id: number) => {
    setActiveCategoryId(id)
    setOpenIndex(null) // reset any open question on category change
  }

  const handleQuestionToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? -1 : idx)
  }

  return (
    <div className='w-full max-w-[1360px] mx-auto my-[60px] px-2 md:px-4 xxl:px-0 transition-all duration-300'>
      <div className='flex flex-col gap-[24px]'>
        <div className='flex flex-wrap items-center'>
          {faqCategory.map((category) => (
            <div key={category.id} className='py-[10px] cursor-pointe'
            onClick={() => handleCategoryClick(category.id)}>
              <div
                className={`flex justify-between items-center py-[6px] px-[24px] cursor-pointer transition-all duration-300 rounded-[16px] ${activeCategoryId === category.id ? 'bg-gold' : ''}`}
              >
                <h6 className='P-14 md:P-16 lg:P-20 xl:H-24-120 font-[600] transition-all duration-300'>{category.title}</h6>
              </div>
            </div>
          ))}
        </div>
        <div className='w-full'>
          {faqData.map((faq, idx) => (
            <div key={idx} className='mb-4 border-[1px] border-black/16 px-[16px] rounded-[16px]'>
              <div className='flex justify-between items-start font-[600] py-2'>
                <h6 className='P-16 lg:P-20 xl:H6-20-120 font-[600] py-2 transition-all duration-300'>{faq.question}</h6>
                <div
                  className='cursor-pointer'
                  onClick={() => handleQuestionToggle(idx)}
                >
                  <span className='font-[500] text-[20px] xl:text-[24px] p-2'>
                    {openIndex === idx ? '-' : '+'}
                  </span>
                </div>
              </div>
              {openIndex === idx && faq.answer && (
                <div className='font-[500] P-12 md:P-14 lg:P-16 pb-[16px]'>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FaqsPage
