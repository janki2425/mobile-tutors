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
    //   <div className="w-full h-[620px]">
    //   <div className="relative w-full min-h-[620px]">
    //     <div className="absolute inset-0 bg-[url('/Hero/banner.jpg')] bg-cover bg-center bg-no-repeat"></div>
    //     <div className="absolute inset-0 bg-black/[24%]"></div>
    //     <div className="relative w-full h-[620px]">
    //       <div className='absolute w-full max-w-[1360px] top-1/2 -translate-y-1/2 left-[60px] flex flex-col items-center gap-[24px] md:items-start z-10'>
    //         <div className="w-full flex flex-col gap-[16px]">
    //           <h1 className="text-white H1-64 font-[700] text-center md:text-left">Trusted by Parents. <br /> Proven by Results.</h1>
    //           <p className="text-white text-base P-18 text-center md:text-left">Expert Tuition for KS3, GCSE & A-Level Success</p>
    //         </div>
    //         <div className="w-full flex gap-[48px] z-10 justify-center md:justify-start">
    //           <div 
    //           className='w-auto bg-gold text-black P-16 font-[500] rounded-[16px] px-[24px] py-[12px] cursor-pointer'
    //           onClick={handleEnrollNow}
    //           >
    //             ENROLL NOW
    //           </div>

    //           <div className='flex items-center w-auto gap-[8px] bg-white text-black rounded-[16px] px-[24px] py-[12px] cursor-pointer'>
    //             <div className='relative w-[23px] h-[22px] bg-transparent'>
    //                 <Image src='/Hero/icons/star.svg' alt='star' width={23} height={22}/>
    //                 <Image src='/Hero/icons/star-style.svg' alt='star' width={5} height={3} 
    //                 className='absolute top-[13px] left-[11px]'/>
    //             </div>
    //             <Image src='/Hero/icons/trustpilot.svg' width={72} height={15} alt='trustpilot'/>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="absolute top-[528px] left-[60px] flex w-[88px] h-[32px] items-center justify-center md:justify-start gap-[24px] z-10">
    //         <div className='flex w-[32px] h-[32px] items-center justify-center'>
    //           <Image src={'/Hero/icons/left-arrow.svg'} width={19} height={32} alt="left" className="w-[19px] h-[32px] cursor-pointer"/>
    //         </div>
    //         <div className='flex w-[32px] h-[32px] items-center justify-center'>
    //           <Image src={'/Hero/icons/right-arrow.svg'} width={19} height={32} alt="right" className="w-[19px] h-[32px] cursor-pointer"/>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full h-[620px]">
  <div className="relative w-full min-h-[620px]">
    {/* Background Image */}
    <div className="absolute inset-0 bg-[url('/Hero/banner.jpg')] bg-cover bg-center bg-no-repeat"></div>
    <div className="absolute inset-0 bg-black/[24%]"></div>

    <div className="relative w-full h-[620px]">
      {/* Hero Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      w-[90%] max-w-[1360px] flex flex-col items-center gap-[24px] 
                      md:left-[60px] md:translate-x-0 md:items-start z-10">
        {/* Heading + Subtext */}
        <div className="w-full flex flex-col gap-[16px]">
          <h1 className="text-white H1-64 font-[700] text-center md:text-left">
            Trusted by Parents. <br /> Proven by Results.
          </h1>
          <p className="text-white text-base P-18 text-center md:text-left">
            Expert Tuition for KS3, GCSE & A-Level Success
          </p>
        </div>

        {/* Buttons */}
        <div className="w-full flex flex-col sm:flex-row items-center gap-[16px] sm:gap-[48px] z-10 md:justify-start">
          <div 
            className="bg-gold text-black P-16 font-[500] rounded-[16px] px-[24px] py-[12px] cursor-pointer"
            onClick={handleEnrollNow}
          >
            ENROLL NOW
          </div>

          <Button variant="default" className="flex items-center gap-[8px] bg-white text-black rounded-[16px] px-[24px] py-[12px] cursor-pointer h-auto">
            <div className="relative w-[23px] h-[22px] flex items-center justify-center">
              <Image src="/Hero/icons/star.svg" alt="star" width={23} height={22} />
              <Image
                src="/Hero/icons/star-style.svg"
                alt="star"
                width={5}
                height={3}
                className="absolute top-[13px] left-[11px]"
              />
            </div>
            <Image src="/Hero/icons/trustpilot.svg" width={72} height={15} alt="trustpilot" />
          </Button>
        </div>
      </div>

      {/* Arrows */}
      <div className="absolute bottom-[16px] md:bottom-[32px] left-1/2 transform -translate-x-1/2 md:left-[60px] md:translate-x-0 
                      flex w-[88px] h-[32px] items-center justify-center gap-[24px] z-10">
        <div className="flex w-[32px] h-[32px] items-center justify-center">
          <Image src={'/Hero/icons/left-arrow.svg'} width={19} height={32} alt="left" className="w-[19px] h-[32px] cursor-pointer" />
        </div>
        <div className="flex w-[32px] h-[32px] items-center justify-center">
          <Image src={'/Hero/icons/right-arrow.svg'} width={19} height={32} alt="right" className="w-[19px] h-[32px] cursor-pointer" />
        </div>
      </div>
    </div>
  </div>
</div>

    }
    {enrollNow === true && (step === 1 || step === 2) && (
      <div className='w-full max-w-[1360px]'>
        <HeroCommon>
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
        </div>
        
      
      </HeroCommon>
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

                  <div className='flex flex-col lg:flex-row w-full gap-6 md:gap-[40px] mx-auto'>
                    <div className='flex flex-col w-full lg:max-w-[555px] bg-gold rounded-[16px] p-4 md:p-[40px] gap-4 md:gap-[16px]'>
                      <div className='w-full h-full flex  justify-between items-center'>
                        <h5 className='H5-24 font-[600]'>Launch GCSE</h5>
                        <div className='bg-white text-black rounded-[50px] px-[16px] py-[4px] P-14 font-[500] cursor-pointer'>Popular</div>
                      </div>
                      <div className='flex flex-col gap-2 md:gap-[8px] pb-4 md:pb-[24px]'>
                        <h2 className='H2-56-120 font-[700]'>£37</h2>
                        <p className='P-16 font-[500]'>Cost per lesson: £18.50</p>
                        <p className='P-16 font-[500]'>Live Lessons per week: 2</p>
                      </div>
                      <hr />
                      <div className='flex flex-col pt-4 md:pt-[24px] gap-4 md:gap-[24px]'>
                        <div className='flex flex-col gap-4 md:gap-[16px] mb-3 min-h-[348px]'>
                          <h6 className='H6-20 font-[600]'>Launch GCSE Includes:</h6>
                          {launchGCSE.map((item) => (
                            <div key={item.id} className='flex gap-[16px]'>
                              <Image src='/Hero/icons/check.svg' alt="check" width={24} height={24} />
                              <p className='P-16 font-[500]'>{item.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Button variant='default' className='w-full max-w-[475px] bg-black text-white rounded-[16px] border-[1px] border-black px-[24px] py-[8px] P-14 font-[500] mt-auto cursor-pointer'>SIGN UP</Button>
                    </div>
                    <div className='flex flex-col w-full lg:max-w-[555px] bg-[#F5F5F5] rounded-[16px] p-4 md:p-[40px] gap-4 md:gap-[16px]'>
                        <h5 className='H5-24 font-[600]'>Launch Mastery</h5>
                        <div className='flex flex-col gap-[8px] pb-[24px]'>
                          <h2 className='H2-56-120 font-[700]'>£10</h2>
                          <p className='P-16 font-[500]'>Cost per lesson: £5.00</p>
                          <p className='P-16 font-[500]'>Live Lessons per week: 2</p>
                        </div>
                        <hr />
                        <div className='flex flex-col pt-4 md:pt-[24px] gap-4 md:gap-[24px]'>
                          <div className='flex flex-col gap-4 md:gap-[16px] min-h-[348px]'>
                            <h6 className='P-20 font-[600]'>Launch GCSE Includes:</h6>
                            {launchMastery.map((item) => (
                              <div key={item.id} className='flex gap-[16px]'>
                                <Image src='/Hero/icons/check.svg' alt="check" width={24} height={24} />
                                <p className='P-16 font-[500]'>{item.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        <Button variant='default' className='w-full max-w-[475px] bg-gold text-black border-[1px] border-gold rounded-[16px] px-[24px] py-[8px] P-14 font-[500] mt-auto cursor-pointer'>SIGN UP</Button>
                      </div>
                    </div>

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
    </>
  )
}

export default Hero
