import React from 'react'
import Image from 'next/image'

const Mission = () => {
  return (
    <div className='w-full max-w-[1440px] bg-black mx-auto py-[80px] px-[40px] rounded-[60px]'>
      <div className='w-full flex flex-col-reverse lg:flex-row gap-[100px] max-w-[1360px] mx-auto text-white'>
        <div className='w-full max-w-[638px] flex flex-col gap-[24px] justify-center mx-auto lg:mx-0'>
            <div className='flex flex-col gap-[16px]'>
                <h4 className='H4-40-120 font-[500]'>Our Mission</h4>
                <p className='P-16 font-[500]'>We assess your child&apos;s strengths, weaknesses, and learning style to create a customised plan that targets their unique needs and ensures clear progress.</p>
            </div>
            <div className='flex flex-col gap-[16px]'>
                <h3 className='H-24 font-[600]'>Our Vision</h3>
                <p className='P-16 font-[500]'>We assess your child&apos;s strengths, weaknesses, and learning style to create a customised plan that targets their unique needs and ensures clear progress.</p>
            </div>
            <div className='flex flex-col gap-[16px]'>
                <h3 className='H-24 font-[600]'>Our Values</h3>
                <p className='P-16 font-[500]'>We assess your child&apos;s strengths, weaknesses, and learning style to create a customised plan that targets their unique needs and ensures clear progress.</p>
            </div>
        </div>
        <div className='w-full flex justify-center lg:justify-end'>
            <Image src='/about/mission.jpg' width={622} height={400} alt='mission'
            className='rounded-[150px] lg:rounded-t-[150px] lg:rounded-br-[150px] min-w-[250px] lg:min-h-[300px] max-w-[622px] max-h-[400px] object-cover'
            />
        </div>
      </div>
    </div>
  )
}

export default Mission
