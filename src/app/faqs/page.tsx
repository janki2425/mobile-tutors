'use client'
import React, { useState } from 'react'
import { faqData } from '@/components/Faqs'

const faqCategory = [
  'GENERAL',
  'COURSES',
  'PAYMENT & PRICING',
  'ENROLLMENT REQUIREMENTS',
  'LESSONS',
  'REFERRALS'
]

const FaqsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [openIndex, setOpenIndex] = useState(0)

  const handleCategoryToggle = (idx: number) => {
    setSelectedCategory(idx)
  }

  const handleQuestionToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? -1 : idx)
  }
  const filteredFaqs = faqData.filter(
    (faq) => faq.category.includes(faqCategory[selectedCategory])
  )

  return (
    <div className='w-full max-w-[1360px] mx-auto my-[60px] px-4'>
      <div className='flex flex-col gap-[24px]'>
        <div className='flex flex-wrap items-center'>
          {faqCategory.map((category, idx) => (
            <div key={idx} className='py-[10px] cursor-pointe'
            onClick={() => {
              handleCategoryToggle(idx)
            }}>
              <div
                className={`flex justify-between items-center py-[6px] px-[24px] cursor-pointer rounded-[16px] ${selectedCategory === idx ? 'bg-gold' : ''}`}
              >
                <h6 className='H-24 font-[600]'>{category}</h6>
              </div>
            </div>
          ))}
        </div>
        <div className='w-full'>
          {filteredFaqs.map((faq, idx) => (
            <div key={idx} className='mb-4'>
              <div className='flex justify-between items-start font-[600] py-2'>
                <h6 className='H6-20 font-[600] py-2'>{faq.question}</h6>
                <div
                  className='cursor-pointer'
                  onClick={() => handleQuestionToggle(idx)}
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
      </div>
    </div>
  )
}

export default FaqsPage
