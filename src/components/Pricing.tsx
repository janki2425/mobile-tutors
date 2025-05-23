'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'

const launchGCSE = [
    {id:1, description: "Access to lesson notes and recordings"},
    {id:2, description: "Proven results with a proven system"},
    {id:3, description: "Weekly marked homework with feedback"},
    {id:4, description: "Marked Mock exams every 8 weeks with feedback"},
    {id:5, description: "Unlimited 1-1 out-of-hours support"},
    {id:6, description: "2 Grade improvement in 12 weeks Guaranteed"},
    {id:7, description: "Small focused interactive classes"},
    {id:8, description: "Initial assessment"},
]
    const launchMastery = [
    {id:1, description: "Access to lesson notes and recordings"},
    {id:2, description: "Proven results with a proven system"},
    {id:3, description: "Weekly homework with solutions"},
    {id:4, description: "Mock exams every 8 weeks with solutions"},
    {id:5, description: "Community support group"},
    {id:6, description: "14-day Money-back Guarantee"},
]


const Pricing = () => {
    const pathname = usePathname()
    const isHomePage = pathname === '/'
    const isCoursePage = pathname.includes('/courses')

  return (
    <div className='w-full max-w-[1360px] mx-auto my-[40px]'>
        {isCoursePage && (
            <h2 className='H-24 md:H4-40 lg:H2-56-120 font-[500] text-center mt-[20px] mb-[40px] transition-all duration-300'>Pricing</h2>
        )}
      <div className='flex flex-col lg:flex-row w-full gap-6 md:gap-[40px] mx-auto px-2 md:px-4 xxl:px-0 transition-all duration-300'>
        <div className={`flex flex-col w-full ${isHomePage ? 'lg:max-w-[555px]' : 'lg:max-w-[650px]'} bg-gold rounded-[16px] p-4 md:p-[40px] gap-4 md:gap-[16px] transition-all duration-300`}>
            <div className='w-full h-full flex  justify-between items-center'>
            <h5 className='P-14 lg:H-24 font-[600]'>Launch GCSE</h5>
            <div className='bg-white text-black rounded-[50px] px-[16px] py-[4px] P-12 lg:P-14 font-[500] cursor-pointer'>Popular</div>
            </div>
            <div className='flex flex-col gap-2 md:gap-[8px] pb-0 lg:pb-[24px] transition-all duration-300'>
            <h2 className='H5-32 lg:H2-56-120 font-[700] transition-all duration-300'>£37</h2>
            <p className='P-14 lg:P-16 font-[500] transition-all duration-300'>Cost per lesson: £18.50</p>
            <p className='P-14 lg:P-16 font-[500]'>Live Lessons per week: 2</p>
            </div>
            <hr />
            <div className='flex flex-col pt-0 lg:pt-[24px] gap-4 md:gap-[24px] transition-all duration-300'>
            <div className='flex flex-col gap-4 md:gap-[16px] mb-3 min-h-[348px] transition-all duration-300'>
                <h6 className='P-18 xl:H6-20 font-[600]'>Launch GCSE Includes:</h6>
                {launchGCSE.map((item) => (
                <div key={item.id} className='flex gap-[12px] items-start lg:gap-[16px] transition-all duration-300'>
                    <Image src='/Hero/icons/check.svg' alt="check" width={24} height={24} className='w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] transition-all duration-300'/>
                    <p className='P-14 lg:P-16 font-[500] transition-all duration-300'>{item.description}</p>
                </div>
                ))}
            </div>
            </div>
            <Button variant='default' className={`w-full ${isHomePage ? 'max-w-[475px]' : 'max-w-full'} bg-black text-white rounded-[16px] border-[1px] border-black px-[24px] py-[8px] P-12 lg:P-14 font-[500] mt-auto cursor-pointer transition-all duration-300`}>SIGN UP</Button>
        </div>
        <div className={`flex flex-col w-full ${isHomePage ? 'lg:max-w-[555px]' : 'lg:max-w-[650px]'} bg-[#F5F5F5] rounded-[16px] p-4 md:p-[40px] gap-4 md:gap-[16px]`}>
            <h5 className='P-14 lg:H-24 font-[600]'>Launch Mastery</h5>
            <div className='flex flex-col gap-2 md:gap-[8px] pb-0 lg:pb-[24px] transition-all duration-300'>
                <h2 className='H5-32 lg:H2-56-120 font-[700] transition-all duration-300'>£10</h2>
                <p className='P-14 lg:P-16 font-[500]'>Cost per lesson: £5.00</p>
                <p className='P-14 lg:P-16 font-[500]'>Live Lessons per week: 2</p>
            </div>
            <hr />
            <div className='flex flex-col pt-4 lg:pt-[24px] gap-4 md:gap-[24px] transition-all duration-300'>
                <div className='flex flex-col gap-4 md:gap-[16px] min-h-[348px] transition-all duration-300'>
                <h6 className='P-18 xl:H6-20 font-[600]'>Launch GCSE Includes:</h6>
                {launchMastery.map((item) => (
                    <div key={item.id} className='flex gap-[12px] items-start lg:gap-[16px] transition-all duration-300'>
                    <Image src='/Hero/icons/check.svg' alt="check" width={24} height={24} className='w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] transition-all duration-300'/>
                    <p className='P-14 lg:P-16 font-[500]'>{item.description}</p>
                    </div>
                ))}
                </div>
            </div>
            <Button variant='default' className={`w-full ${isHomePage ? 'max-w-[475px]' : 'max-w-full'} bg-gold text-black border-[1px] border-gold rounded-[16px] px-[24px] py-[8px] P-12 lg:P-14 font-[500] mt-auto cursor-pointer transition-all duration-300`}>SIGN UP</Button>
            </div>
        </div>
    </div>
  )
}

export default Pricing
