'use client'

import React, { useState } from 'react'
import HeroCommon from '../../components/HeroCommon'
import { Button } from '../../components/ui/button'
import Pricing from '../../components/Pricing'
import { useRouter } from 'next/navigation'

const Enroll = () => {
  const router = useRouter()
    const [enrollNow, setEnrollNow] = useState(false)
    const [step, setStep] = useState(1)
    const [selectCourse, setSelectCourse] = useState<string>('')
    const [selectedSubjects, setSelectedSubjects] = useState<string[]>([])
  
  const handleContinue = () => setStep(step + 1)
  const handleBack = () => {
    if (step === 1) {
      setEnrollNow(false)
      router.push('/')
      setStep(1)
    } else {
      setStep(step - 1)
    }
  } 
  const toggleCourse = (course: string) => {
    setSelectCourse(course === selectCourse ? '' : course)
  }

  const toggleSubject = (subject: string) => {
    setSelectedSubjects(prev => 
      prev.includes(subject) 
        ? prev.filter(s => s !== subject)
        : [...prev, subject]
    )
  }
  return (
    <div className='w-full max-w-[1440px] mx-auto'>
      <HeroCommon hideImage={step === 3}>
        <div className='w-full flex justify-center items-center'>
          {step === 1 && (
            <div className='w-full max-w-[610px] px-[40px] lg:px-[65px] py-[40px] lg:py-[98px] transition-all duration-300'>
              <div className='flex flex-col gap-[12px] md:gap-[24px] w-full mx-auto'>
                <div className='flex flex-col gap-2 md:gap-[8px]'>
                  <div className='w-full h-[4px] bg-[#EEEEEE]'>
                    <div className='w-[33%] h-[4px] bg-[#1D1A63]'></div>
                  </div>
                  <h4 className="P-12 lg:P-14 xl:P-16 font-[500] mb-2 transition-all duration-300">Step {step}/3</h4>
                </div>
                <h4 className="H-24 lg:H5-32-120 xl:H4-40-120 font-[500] transition-all duration-300">Which year group is your child in?</h4>
                <p className="P-12 lg:P-16 font-[500] transition-all duration-300">Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                <div className="flex flex-col md:flex-row mt-[16px] gap-4 md:gap-[24px]">
                  <Button 
                  variant="default"
                  onClick={()=>toggleCourse('KS3')}
                  className={`flex flex-col gap-[8px] md:gap-[12px] xl:gap-[16px] ${selectCourse === 'KS3' ? 'bg-navy-blue text-white' : 'bg-gray-100 text-black'} w-full md:max-w-[228px] p-4 md:p-[24px] items-start rounded-[16px]`}>
                    <h2 className="text-[36px] lg:H3-48-120 xl:H2-56 font-[600] transition-all duration-300">KS3</h2>
                    <h6 className="H6-20 font-[600]">Year</h6>
                    <h6 className="P-16 font-[500]">7/8/9</h6>
                  </Button>
                  <Button 
                  variant="default"
                  onClick={()=>toggleCourse('KS4')}
                  className={`flex flex-col gap-[8px] md:gap-[12px] xl:gap-[16px] ${selectCourse === 'KS4' ? 'bg-navy-blue text-white' : 'bg-gray-100 text-black'} w-full md:max-w-[228px] p-4 md:p-[24px] items-start rounded-[16px]`}>
                    <h2 className="text-[36px] lg:H3-48-120 xl:H2-56 font-[600] transition-all duration-300">KS4</h2>
                    <h6 className="H6-20 font-[600]">Year</h6>
                    <h6 className="P-16 font-[500]">10/11</h6>
                  </Button>
                </div>
                <div className="flex flex-col md:flex-row w-full max-w-[480px] gap-4 md:gap-[16px] mt-[16px] transition-all duration-300">
                  <Button 
                  variant="outline" 
                  className='w-1/2 max-w-[232px] text-black P-12 lg:P-14 rounded-[16px] px-[24px] py-[8px] cursor-pointer'
                  onClick={handleBack}
                  >BACK</Button>
                  <Button 
                  variant="default" 
                  className='w-1/2 max-w-[232px] bg-gold text-black P-12 lg:P-14 rounded-[16px] px-[24px] py-[8px] cursor-pointer'
                  onClick={handleContinue}
                  >CONTINUE</Button>
                </div>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className='w-full max-w-[610px] px-[40px] lg:px-[65px] py-[40px] lg:py-[98px] transition-all duration-300'>
              <div className='flex flex-col gap-4 md:gap-[24px] w-full mx-auto'>
              <div className='flex flex-col gap-2 md:gap-[8px]'>
                <div className='w-full h-[4px] bg-[#EEEEEE]'>
                  <div className='w-[66%] h-[4px] bg-[#1D1A63]'></div>
                </div>
                <h4 className="P-12 lg:P-14 xl:P-16 font-[500] mb-2 transition-all duration-300">Step {step}/3</h4>
              </div>
              <div className='flex flex-col gap-[8px] mb-[12px]'>
                <h4 className="H-24 lg:H5-32-120 xl:H4-40-120 font-[500] transition-all duration-300">Which subjects would you like to study?</h4>
                <p className="P-12 lg:P-16 font-[500] transition-all duration-300">Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[24px] font-[600] transition-all duration-300'>
                <Button 
                  variant='default' 
                  className={`w-full rounded-[16px] p-[16px] lg:p-[24px] transition-all duration-300 ${selectedSubjects.includes('English') ? 'bg-navy-blue text-white' : 'bg-gray-100 text-black'}`}
                  onClick={() => toggleSubject('English')}
                >
                  English
                </Button>
                <Button 
                  variant='default' 
                  className={`w-full rounded-[16px] p-[16px] lg:p-[24px] transition-all duration-300 ${selectedSubjects.includes('Biology') ? 'bg-navy-blue text-white' : 'bg-gray-100 text-black'}`}
                  onClick={() => toggleSubject('Biology')}
                >
                  Biology
                </Button>
                <Button 
                  variant='default' 
                  className={`w-full rounded-[16px] p-[16px] lg:p-[24px] transition-all duration-300 ${selectedSubjects.includes('Chemistry') ? 'bg-navy-blue text-white' : 'bg-gray-100 text-black'}`}
                  onClick={() => toggleSubject('Chemistry')}
                >
                  Chemistry
                </Button>
                <Button 
                  variant='default' 
                  className={`w-full rounded-[16px] p-[16px] lg:p-[24px] transition-all duration-300 ${selectedSubjects.includes('Physics') ? 'bg-navy-blue text-white' : 'bg-gray-100 text-black'}`}
                  onClick={() => toggleSubject('Physics')}
                >
                  Physics
                </Button>
                <Button 
                  variant='default' 
                  className={`w-full md:col-span-2 rounded-[16px] p-[16px] lg:p-[24px] transition-all duration-300 ${selectedSubjects.includes('Maths') ? 'bg-navy-blue text-white' : 'bg-gray-100 text-black'}`}
                  onClick={() => toggleSubject('Maths')}
                >
                  Maths
                </Button>
              </div>
              <div className="flex flex-col md:flex-row w-full max-w-[480px] gap-4 md:gap-[16px] mt-4 md:mt-0 transition-all duration-300">
                <Button 
                variant="outline" 
                className='w-1/2 max-w-[232px] text-black rounded-[16px] P-12 lg:P-14 px-[24px] py-[8px] cursor-pointer'
                onClick={handleBack}
                >BACK</Button>
                <Button 
                variant="default" 
                className='w-1/2 max-w-[232px] bg-gold text-black rounded-[16px] P-12 lg:P-14 px-[24px] py-[8px] cursor-pointer'
                onClick={handleContinue}
                >CONTINUE</Button>
              </div>
            </div>
            </div>
          )}
          {step === 3 && (
          <div className='w-full max-w-[1280px] mx-auto'>
            <div className='p-[10px] md:p-[40px] lg:p-[80px] transition-all duration-300'>
                <div className='w-full flex flex-col gap-4 md:gap-[24px]'>
                  <div className='flex flex-col gap-2 md:gap-[8px]'>
                    <div className='w-full h-[4px] bg-[#EEEEEE]'>
                      <div className='w-[100%] h-[4px] bg-[#1D1A63]'></div>
                    </div>
                    <h4 className="P-12 lg:P-14 xl:P-16 font-[500] mb-2 transition-all duration-300">Step {step}/3</h4>
                  </div>
                  <div className='flex flex-col gap-[8px]'>
                    <h4 className='H-24 lg:H5-32-120 xl:H4-40-120 font-[500] transition-all duration-300'>Unlock Your Child&apos;s Full Potential</h4>
                    <p className='P-12 lg:P-16 font-[500] transition-all duration-300'>Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                  </div>

                  <Pricing/>

                  <div className='flex w-full gap-4 md:gap-[16px] justify-center md:justify-start'>
                    <Button 
                    variant="outline" 
                    className='w-full max-w-[232px] text-black rounded-[16px] P-12 lg:P-14 px-[16px] lg:px-[24px] py-[6px] lg:py-[8px] cursor-pointer'
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
