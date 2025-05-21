'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import HeroCommon from './HeroCommon'
import Pricing from './Pricing'
import Enroll from '../app/get-started/page'


const Hero = () => {
  const [enrollNow, setEnrollNow] = useState(false)

  const handleEnrollNow = () => {

  }
  return (
    <>
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
              <Button 
                variant="default"
                onClick={handleEnrollNow}
                className="bg-gold text-black P-16 font-[500] rounded-[16px] px-[24px] py-[12px] cursor-pointer"
              >
                ENROLL NOW
              </Button>

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
    </>
  )
}

export default Hero
