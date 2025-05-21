'use client'

import React, { useState } from 'react'
import HeroCommon from '../../components/HeroCommon'
import { Button } from '../../components/ui/button'
import Pricing from '../../components/Pricing'

const Enroll = () => {
    const [enrollNow, setEnrollNow] = useState(false)
    const [step, setStep] = useState(1)
  
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
    <div className='w-full max-w-[1440px] mx-auto'>
      <HeroCommon hideImage={step === 3}>
        <div className='w-full flex justify-center items-center'>
          {step === 1 && (
            <div className='w-full max-w-[610px] px-[65px] py-[98px]'>
              <div className='flex flex-col gap-4 md:gap-[24px] w-full mx-auto'>
                <div className='flex flex-col gap-2 md:gap-[8px]'>
                  <div className='w-full h-[4px] bg-[#EEEEEE]'>
                    <div className='w-[33%] h-[4px] bg-[#1D1A63]'></div>
                  </div>
                  <h4 className="P-16 font-[500] mb-2">Step {step}/3</h4>
                </div>
                <h4 className="H4-40-120 font-[500]">Which year group is your child in?</h4>
                <p className="P-16 font-[500]">Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                <div className="flex flex-col md:flex-row mt-[16px] gap-4 md:gap-[24px]">
                  <div className="flex flex-col gap-[16px] bg-navy-blue text-white w-full md:max-w-[228px] p-4 md:p-[24px] text-start rounded-[16px]">
                    <h2 className="H2-56 font-[600]">KS3</h2>
                    <h6 className="H6-20 font-[600]">Year</h6>
                    <h6 className="P-16 font-[500]">7/8/9</h6>
                  </div>
                  <div className="flex flex-col gap-[16px] bg-gray-100 text-black w-full md:max-w-[228px] p-4 md:p-[24px] text-start rounded-[16px]">
                    <h2 className="H2-56 font-[600]">KS4</h2>
                    <h6 className="H6-20 font-[600]">Year</h6>
                    <h6 className="P-16 font-[500]">10/11</h6>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row w-full max-w-[480px] gap-4 md:gap-[16px] mt-[16px]">
                  <Button 
                  variant="outline" 
                  className='w-1/2 max-w-[232px] text-black P-14 rounded-[16px] px-[24px] py-[8px] cursor-pointer'
                  onClick={handleBack}
                  >BACK</Button>
                  <Button 
                  variant="default" 
                  className='w-1/2 max-w-[232px] bg-gold text-black P-14 rounded-[16px] px-[24px] py-[8px] cursor-pointer'
                  onClick={handleContinue}
                  >CONTINUE</Button>
                </div>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className='w-full max-w-[610px] px-[65px] py-[46px]'>
              <div className='flex flex-col gap-4 md:gap-[24px] w-full mx-auto'>
              <div className='flex flex-col gap-2 md:gap-[8px]'>
                <div className='w-full h-[4px] bg-[#EEEEEE]'>
                  <div className='w-[66%] h-[4px] bg-[#1D1A63]'></div>
                </div>
                <h4 className="P-16 font-[500] mb-2">Step {step}/3</h4>
              </div>
              <div className='flex flex-col gap-[8px] mb-[12px]'>
                <h4 className="H4-40-120 font-[500]">Which subject would you like to study?</h4>
                <p className="P-16 font-[500]">Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[24px] H-6 font-[600]'>
                <Button variant='default' className='bg-navy-blue w-full text-white rounded-[16px] p-[24px]'>English</Button>
                <Button variant='default' className='bg-navy-blue w-full text-white rounded-[16px] p-[24px]'>Biology</Button>
                <Button variant='default' className='bg-gray-100 w-full text-black rounded-[16px] p-[24px]'>Chemistry</Button>
                <Button variant='default' className='bg-gray-100 w-full text-black rounded-[16px] p-[24px]'>Physics</Button>
                <Button variant='default' className='bg-gray-100 w-full md:col-span-2 text-black rounded-[16px] p-[24px]'>Maths</Button>
              </div>
              <div className="flex flex-col md:flex-row w-full max-w-[480px] gap-4 md:gap-[16px] mt-4 md:mt-0">
                <Button 
                variant="outline" 
                className='w-1/2 max-w-[232px] text-black rounded-[16px] px-[24px] py-[8px] cursor-pointer'
                onClick={handleBack}
                >BACK</Button>
                <Button 
                variant="default" 
                className='w-1/2 max-w-[232px] bg-gold text-black rounded-[16px] px-[24px] py-[8px] cursor-pointer'
                onClick={handleContinue}
                >CONTINUE</Button>
              </div>
            </div>
            </div>
          )}
          {step === 3 && (
          <div className='w-full max-w-[1280px] mx-auto'>
            <div className='p-[80px]'>
                <div className='w-full flex flex-col gap-4 md:gap-[24px]'>
                  <div className='flex flex-col gap-2 md:gap-[8px]'>
                    <div className='w-full h-[4px] bg-[#EEEEEE]'>
                      <div className='w-[100%] h-[4px] bg-[#1D1A63]'></div>
                    </div>
                    <h4 className="P-16 font-[500] mb-2">Step {step}/3</h4>
                  </div>
                  <div className='flex flex-col gap-[8px]'>
                    <h4 className='H4-40-120 font-[500]'>Unlock Your Child&apos;s Full Potential</h4>
                    <p className='P-16 font-[500]'>Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                  </div>

                  <Pricing/>

                  <div className='flex w-full gap-4 md:gap-[16px]'>
                    <Button 
                    variant="outline" 
                    className='w-full max-w-[232px] text-black rounded-[16px] px-[24px] py-[8px] cursor-pointer'
                    onClick={handleBack}
                    >BACK</Button>
                  </div>
              </div>
            </div>
          </div>
        )}
        </div>
      </HeroCommon>
        
      </div>
    )
}

export default Enroll
