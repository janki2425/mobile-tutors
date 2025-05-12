'use client'
import React, { useState, ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import HeroCommon from './HeroCommon'

const Hero = () => {
  const [enrollNow, setEnrollNow] = useState(false)
  const [step, setStep] = useState(1)
  
  const handleEnrollNow = () => setEnrollNow(true)
  const handleContinue = () => setStep(step + 1)
  const handleBack = () => setStep(step - 1)

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
            className='w-auto bg-gold text-black text-sm md:text-base rounded-[16px] px-6 py-3'
            onClick={handleEnrollNow}
            >
              ENROLL NOW
            </Button>
            <Button variant="default" className='w-auto bg-white text-black rounded-[16px] px-6 py-3'>
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
        <div className='w-full flex justify-center items-center p-[60px]'>
        {step === 1 && (
          <div className='flex flex-col gap-[24px]'>
            <div className='flex flex-col gap-[8px]'>
              <div className='w-full h-[4px] bg-[#EEEEEE]'>
                <div className='w-[33%] h-[4px] bg-[#1D1A63]'></div>
              </div>
              <h4 className="mb-2">Step {step}/3</h4>
            </div>
            <h4 className="H4-40 font-[500]">Which year group is your child in?</h4>
            <p className="P-16 font-[500]">Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <div className="flex gap-[24px]">
              <div className="flex flex-col gap-[16px] bg-navy-blue text-white w-[228px] p-[24px] text-start rounded-[16px]">
                <h2 className="H2-56 font-[600]">KS3</h2>
                <h6 className="H6-20 font-[600]">Year</h6>
                <h6 className="H6-20 font-[600]">7/8/9</h6>

              </div>
              <div className="flex flex-col gap-[16px] bg-gray-100 text-black w-[228px] p-[24px] text-start rounded-[16px]">
                <h2 className="H2-56 font-[600]">KS4</h2>
                <h6 className="H6-20 font-[600]">Year</h6>
                <h6 className="H6-20 font-[600]">10/11</h6>
              </div>
            </div>
            <div className="flex w-full gap-[16px]">
              <Button 
              variant="outline" 
              className='w-1/2 text-black rounded-[16px] px-[24px] py-[8px]'
              onClick={handleBack}
              >BACK</Button>
              <Button 
              variant="default" 
              className='w-1/2 bg-gold text-black rounded-[16px] px-[24px] py-[8px]'
              onClick={handleContinue}
              >CONTINUE</Button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className='flex flex-col gap-[24px]'>
            <div className='flex flex-col gap-[8px]'>
              <div className='w-full h-[4px] bg-[#EEEEEE]'>
                <div className='w-[66%] h-[4px] bg-[#1D1A63]'></div>
              </div>
              <h4 className="mb-2">Step {step}/3</h4>
            </div>
            <h4 className="H4-40 font-[500]">Which year group is your child in?</h4>
            <p className="P-16 font-[500]">Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <div className='flex flex-wrap gap-[24px]'>
              <Button variant='default' className='bg-navy-blue w-[228px] text-white rounded-[16px] px-[24px] py-[36px] text-[24px] font-[600]'>English</Button>
              <Button variant='default' className='bg-navy-blue w-[228px] text-white rounded-[16px] px-[24px] py-[36px] text-[24px] font-[600]'>Biology</Button>
              <Button variant='default' className='bg-gray-100 w-[228px] text-black rounded-[16px] px-[24px] py-[36px] text-[24px] font-[600]'>Chemistry</Button>
              <Button variant='default' className='bg-gray-100 w-[228px] text-black rounded-[16px] px-[24px] py-[36px] text-[24px] font-[600]'>Physics</Button>
              <Button variant='default' className='bg-gray-100 w-[480px] text-black rounded-[16px] px-[24px] py-[36px] text-[24px] font-[600]'>Maths</Button>

            </div>
            <div className="flex w-full gap-[16px]">
              <Button 
              variant="outline" 
              className='w-1/2 text-black rounded-[16px] px-[24px] py-[8px]'
              onClick={handleBack}
              >BACK</Button>
              <Button 
              variant="default" 
              className='w-1/2 bg-gold text-black rounded-[16px] px-[24px] py-[8px]'
              onClick={handleContinue}
              >CONTINUE</Button>
            </div>
          </div>
        )}
        </div>
        {/* Add more steps as needed */}
      
      </HeroCommon>
    )}
    {step === 3 && (
          <div className='w-full max-w-[1280px] mx-auto flex flex-col gap-[24px]'>
              <div className='flex flex-col gap-[8px]'>
                <div className='w-full h-[4px] bg-[#EEEEEE]'>
                  <div className='w-[100%] h-[4px] bg-[#1D1A63]'></div>
                </div>
                <h4 className="mb-2">Step {step}/3</h4>
              </div>
              <div>
                <h4 className='H4-40 font-[500]'>Unlock Your Child's Full Potential</h4>
                <p className='P-16 font-[500]'>Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
              </div>
              {/* <div className='flex gap-[40px]'>
                <div className='flex flex-col bg-gold'>
                  <div className='w-full flex justify-between'>
                    <h5 className='H5-24 font-[600]'>Launch GCSE</h5>
                    <Button variant='default' className='bg-white text-black rounded-[50px] px-[16px] py-[4px] text-[16px] font-[500] '>Popular</Button>
                  </div>
                </div>
                <div></div>
              </div> */}
              <Button 
              variant="outline" 
              className='text-black rounded-[16px] px-[24px] py-[8px]'
              onClick={handleBack}
              >BACK</Button>
          </div>
        )}
    </>
  )
}

export default Hero
