'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import HeroCommon from './HeroCommon'

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

const Hero = () => {
  const [enrollNow, setEnrollNow] = useState(false)
  const [step, setStep] = useState(1)
  
  const handleEnrollNow = () => setEnrollNow(true)
  const handleContinue = () => setStep(step + 1)
  const handleBack = () => {
    if (step === 1) {
      setEnrollNow(false)
      setStep(1)
    } else {
      setStep(step - 1)
    }
  }

  return (
    <>
    {enrollNow === false &&
      <div className="w-full min-h-screen">
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0 bg-[url('/Hero/banner.jpg')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-black/[24%]"></div>
        <div className="absolute w-full max-w-[1360px] top-1/2 -translate-y-1/2 left-0 gap-4 md:gap-6 flex flex-col items-center md:items-start z-10">
          <div className="w-full px-4 md:px-8 lg:px-16">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[700] text-center md:text-left">Trusted by Parents. <br /> Proven by Results.</h1>
            <p className="text-white text-base md:text-lg lg:text-xl text-center md:text-left">Expert Tuition for KS3, GCSE & A-Level Success</p>
          </div>
          <div className="flex flex-col md:flex-row w-full px-4 md:px-8 lg:px-16 items-center justify-center md:justify-start gap-4 md:gap-6 z-10">
            <Button 
            variant="default" 
            className='w-full md:w-auto bg-gold text-black text-sm md:text-base rounded-[16px] px-6 py-3 cursor-pointer'
            onClick={handleEnrollNow}
            >
              ENROLL NOW
            </Button>
            <Button variant="default" className='w-full md:w-auto bg-white text-black rounded-[16px] px-6 py-3 cursor-pointer'>
              <Image src="/footer-icon/star.svg" alt="star" width={23} height={22} />
              <p className='text-black text-sm md:text-base font-[500]'>Trustpilot</p>
            </Button>
          </div>
          <div className="flex w-full px-4 md:px-8 lg:px-16 items-center justify-center md:justify-start gap-6 z-10">
            <Image src={'/Hero/icons/left-arrow.svg'} width={40} height={24} alt="left" className="invert cursor-pointer"/>
            <Image src={'/Hero/icons/right-arrow.svg'} width={40} height={24} alt="right" className="invert cursor-pointer"/>
          </div>
        </div>
      </div>
    </div>
    }
    {enrollNow === true && (step === 1 || step === 2) && (
      <HeroCommon>
        <div className='w-full flex justify-center items-center p-4 md:p-[60px]'>
        {step === 1 && (
          <div className='flex flex-col gap-4 md:gap-[24px] w-full max-w-[600px]'>
            <div className='flex flex-col gap-2 md:gap-[8px]'>
              <div className='w-full h-[4px] bg-[#EEEEEE]'>
                <div className='w-[33%] h-[4px] bg-[#1D1A63]'></div>
              </div>
              <h4 className="text-sm md:text-base mb-2">Step {step}/3</h4>
            </div>
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-[500]">Which year group is your child in?</h4>
            <p className="text-sm md:text-base font-[500]">Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-[24px]">
              <div className="flex flex-col gap-[16px] bg-navy-blue text-white w-full md:max-w-[228px] p-4 md:p-[24px] text-start rounded-[16px]">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-[600]">KS3</h2>
                <h6 className="text-base md:text-lg font-[600]">Year</h6>
                <h6 className="text-base md:text-lg font-[600]">7/8/9</h6>
              </div>
              <div className="flex flex-col gap-[16px] bg-gray-100 text-black w-full md:max-w-[228px] p-4 md:p-[24px] text-start rounded-[16px]">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-[600]">KS4</h2>
                <h6 className="text-base md:text-lg font-[600]">Year</h6>
                <h6 className="text-base md:text-lg font-[600]">10/11</h6>
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-full gap-4 md:gap-[16px] mt-4 md:mt-0">
              <Button 
              variant="outline" 
              className='w-full md:w-1/2 text-black rounded-[16px] px-[24px] py-[8px] cursor-pointer'
              onClick={handleBack}
              >BACK</Button>
              <Button 
              variant="default" 
              className='w-full md:w-1/2 bg-gold text-black rounded-[16px] px-[24px] py-[8px] cursor-pointer'
              onClick={handleContinue}
              >CONTINUE</Button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className='flex flex-col gap-4 md:gap-[24px] w-full max-w-[600px]'>
            <div className='flex flex-col gap-2 md:gap-[8px]'>
              <div className='w-full h-[4px] bg-[#EEEEEE]'>
                <div className='w-[66%] h-[4px] bg-[#1D1A63]'></div>
              </div>
              <h4 className="text-sm md:text-base mb-2">Step {step}/3</h4>
            </div>
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-[500]">Which subject would you like to study?</h4>
            <p className="text-sm md:text-base font-[500]">Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[24px]'>
              <Button variant='default' className='bg-navy-blue w-full text-white rounded-[16px] px-4 md:px-[24px] py-4 md:py-[36px] text-lg md:text-[24px] font-[600]'>English</Button>
              <Button variant='default' className='bg-navy-blue w-full text-white rounded-[16px] px-4 md:px-[24px] py-4 md:py-[36px] text-lg md:text-[24px] font-[600]'>Biology</Button>
              <Button variant='default' className='bg-gray-100 w-full text-black rounded-[16px] px-4 md:px-[24px] py-4 md:py-[36px] text-lg md:text-[24px] font-[600]'>Chemistry</Button>
              <Button variant='default' className='bg-gray-100 w-full text-black rounded-[16px] px-4 md:px-[24px] py-4 md:py-[36px] text-lg md:text-[24px] font-[600]'>Physics</Button>
              <Button variant='default' className='bg-gray-100 w-full md:col-span-2 text-black rounded-[16px] px-4 md:px-[24px] py-4 md:py-[36px] text-lg md:text-[24px] font-[600]'>Maths</Button>
            </div>
            <div className="flex flex-col md:flex-row w-full gap-4 md:gap-[16px] mt-4 md:mt-0">
              <Button 
              variant="outline" 
              className='w-full md:w-1/2 text-black rounded-[16px] px-[24px] py-[8px] cursor-pointer'
              onClick={handleBack}
              >BACK</Button>
              <Button 
              variant="default" 
              className='w-full md:w-1/2 bg-gold text-black rounded-[16px] px-[24px] py-[8px] cursor-pointer'
              onClick={handleContinue}
              >CONTINUE</Button>
            </div>
          </div>
        )}
        </div>
        
      
      </HeroCommon>
    )}
    {step === 3 && (
          <div className='w-full max-w-[1280px] mx-auto flex flex-col gap-4 md:gap-[24px] px-4 md:px-8 lg:px-[65px] my-8 md:my-[80px]'>
              <div className='flex flex-col gap-2 md:gap-[8px]'>
                <div className='w-full h-[4px] bg-[#EEEEEE]'>
                  <div className='w-[100%] h-[4px] bg-[#1D1A63]'></div>
                </div>
                <h4 className="text-sm md:text-base mb-2">Step {step}/3</h4>
              </div>
              <div>
                <h4 className='text-2xl md:text-3xl lg:text-4xl font-[500]'>Unlock Your Child&apos;s Full Potential</h4>
                <p className='text-sm md:text-base font-[500] mt-2 md:mt-4'>Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
              </div>

              <div className='flex flex-col lg:flex-row w-full gap-6 md:gap-[40px] mx-auto'>
                <div className='flex flex-col w-full lg:max-w-[555px] bg-gold rounded-[16px] p-4 md:p-[40px] gap-4 md:gap-[16px]'>
                  <div className='w-full h-full flex  justify-between items-center'>
                    <h5 className='text-lg md:text-xl lg:text-2xl font-[600]'>Launch GCSE</h5>
                    <Button variant='default' className='bg-white text-black rounded-[50px] px-3 md:px-[16px] py-2 md:py-[4px] text-sm md:text-[16px] font-[500] cursor-pointer'>Popular</Button>
                  </div>
                  <div className='flex flex-col gap-2 md:gap-[8px] pb-4 md:pb-[24px]'>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-[700]'>£37</h2>
                    <p className='text-sm md:text-base font-[500]'>Cost per lesson: £18.50</p>
                    <p className='text-sm md:text-base font-[500]'>Live Lessons per week: 2</p>
                  </div>
                  <hr />
                  <div className='flex flex-col pt-4 md:pt-[24px] gap-4 md:gap-[24px]'>
                    <div className='flex flex-col gap-4 md:gap-[16px] mb-3 min-h-[348px]'>
                      <h6 className='text-base md:text-lg lg:text-xl font-[600]'>Launch GCSE Includes:</h6>
                      {launchGCSE.map((item) => (
                        <div key={item.id} className='flex gap-3 md:gap-[16px]'>
                          <Image src='/Hero/icons/check.svg' alt="check" width={20} height={20} className="w-5 h-5 md:w-6 md:h-6" />
                          <p className='text-sm md:text-base font-[500]'>{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button variant='default' className='w-full bg-black text-white rounded-[16px] px-4 md:px-[24px] py-2 md:py-[8px] text-sm md:text-[14px] font-[500] mt-auto cursor-pointer'>SIGN UP</Button>
                </div>
                <div className='flex flex-col w-full lg:max-w-[555px] bg-[#F5F5F5] rounded-[16px] p-4 md:p-[40px] gap-4 md:gap-[16px]'>
                    <h5 className='text-lg md:text-xl lg:text-2xl font-[600] py-2'>Launch Mastery</h5>
                    <div className='flex flex-col gap-2 md:gap-[8px] pb-4 md:pb-[24px]'>
                      <h2 className='text-3xl md:text-4xl lg:text-5xl font-[700]'>£10</h2>
                      <p className='text-sm md:text-base font-[500]'>Cost per lesson: £5.00</p>
                      <p className='text-sm md:text-base font-[500]'>Live Lessons per week: 2</p>
                    </div>
                    <hr />
                    <div className='flex flex-col pt-4 md:pt-[24px] gap-4 md:gap-[24px]'>
                      <div className='flex flex-col gap-4 md:gap-[16px] min-h-[348px]'>
                        <h6 className='text-base md:text-lg lg:text-xl font-[600]'>Launch GCSE Includes:</h6>
                        {launchMastery.map((item) => (
                          <div key={item.id} className='flex gap-3 md:gap-[16px]'>
                            <Image src='/Hero/icons/check.svg' alt="check" width={20} height={20} className="w-5 h-5 md:w-6 md:h-6" />
                            <p className='text-sm md:text-base font-[500]'>{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button variant='default' className='w-full bg-gold text-black rounded-[16px] px-4 md:px-[24px] py-2 md:py-[8px] text-sm md:text-[14px] font-[500] mt-auto cursor-pointer'>SIGN UP</Button>
                  </div>
                </div>

              <div className='flex w-full gap-4 md:gap-[16px]'>
                <Button 
                variant="outline" 
                className='w-full md:max-w-[234px] text-black rounded-[16px] px-4 md:px-[24px] py-2 md:py-[8px] cursor-pointer'
                onClick={handleBack}
                >BACK</Button>
              </div>
          </div>
        )}
    </>
  )
}

export default Hero
