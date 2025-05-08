import React from 'react'
import Image from 'next/image'

const Benefits = () => {
  return (
    <div className='w-full bg-[#F5F5F5] my-[80px] rounded-[60px]'>
      <div className='w-full max-w-[1360px] h-cover mx-auto'>
        <div className='w-full py-[80px] flex flex-col gap-[40px] px-4'>
            <h3 className='H3-48 font-[500] text-center'>Our Benefits</h3>
            <div className='flex flex-col gap-[40px]'>
                <div className='flex flex-col md:flex-row gap-[60px] p-4 border border-[#E0E0E0] md:border-none md:p-0 rounded-[24px]'>
                    <div className='relative'>
                        <Image src={'/benefits/benefit-img-1.jpg'} alt='benefit' width={660} height={400} 
                        className='rounded-[24px]'
                        />
                        <Image src={'/benefits/video-play.svg'} alt='play' width={60} height={60} 
                        className='absolute top-[40px] left-[40px]'
                        />
                    </div>
                    <div className='flex flex-col gap-[16px] max-w-[620px] justify-center'>
                        <h4 className='text-[28px] lg:H4-40 font-[500]'>Personalised Assessment</h4>
                        <p className='text-[16px] lg:P-16 font-[500] max-w-[580px]'>We assess your child&apos;s strengths, weaknesses, and learning style to create a customised plan that targets their unique needs and ensures clear progress.</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-[60px] p-4 border border-[#E0E0E0] md:border-none md:p-0 rounded-[24px]'>
                    <div className='flex flex-col gap-[16px] max-w-[620px] justify-center'>
                        <h4 className='text-[28px] lg:H4-40 font-[500]'>Live Lessons</h4>
                        <p className='P-16 font-[500] max-w-[580px]'>Our expert tutors deliver interactive, engaging lessons tailored to your child&apos;s needs. With real-time feedback and active support, students grasp key concepts and build confidence.</p>
                    </div>
                    <div className='relative'>
                        <Image src={'/benefits/benefit-img-2.jpg'} alt='benefit' width={660} height={400} 
                        className='rounded-[24px]'
                        />
                        <Image src={'/benefits/video-play.svg'} alt='play' width={60} height={60} 
                        className='absolute top-[40px] right-[40px]'
                        />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-[60px] p-4 border border-[#E0E0E0] md:border-none md:p-0 rounded-[24px]'>
                    <div className='relative'>
                        <Image src={'/benefits/benefit-img-3.jpg'} alt='benefit' width={660} height={400} 
                        className='rounded-[24px]'
                        />
                        <Image src={'/benefits/video-play.svg'} alt='play' width={60} height={60} 
                        className='absolute top-[40px] left-[40px]'
                        />
                    </div>
                    <div className='flex flex-col gap-[16px] max-w-[620px] justify-center'>
                        <h4 className='text-[28px] lg:H4-40 font-[500]'>Lesson Notes & Recordings</h4>
                        <p className='P-16 font-[500] max-w-[580px]'>Each session comes with comprehensive lesson notes and class recordings, offering students the perfect tools for effective revision and long-term retention.</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-[60px] p-4 border border-[#E0E0E0] md:border-none md:p-0 rounded-[24px]'>
                    <div className='flex flex-col gap-[16px] max-w-[620px] justify-center'>
                        <h4 className='text-[28px] lg:H4-40 font-[500]'>Weekly Homework</h4>
                        <p className='P-16 font-[500] max-w-[580px]'>Students receive weekly homework, carefully marked with detailed feedback, to help them stay on track and continuously improve their understanding.</p>
                    </div>
                    <div className='relative'>
                        <Image src={'/benefits/benefit-img-4.jpg'} alt='benefit' width={660} height={400} 
                        className='rounded-[24px]'
                        />
                        <Image src={'/benefits/video-play.svg'} alt='play' width={60} height={60} 
                        className='absolute top-[40px] right-[40px]'
                        />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-[60px] p-4 border border-[#E0E0E0] md:border-none md:p-0 rounded-[24px]'>
                    <div className='relative'>
                        <Image src={'/benefits/benefit-img-5.jpg'} alt='benefit' width={660} height={400} 
                        className='rounded-[24px]'
                        />
                        <Image src={'/benefits/video-play.svg'} alt='play' width={60} height={60} 
                        className='absolute top-[40px] left-[40px]'
                        />
                    </div>
                    <div className='flex flex-col gap-[16px] max-w-[620px] justify-center'>
                        <h4 className='text-[28px] lg:H4-40 font-[500]'>Regular Mock Exams</h4>
                        <p className='P-16 font-[500] max-w-[580px]'>Students take regular mock exams, complete with detailed marking and feedback. This helps them track their progress and build confidence in exam conditions.</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-[60px] p-4 border border-[#E0E0E0] md:border-none md:p-0 rounded-[24px]'>
                    <div className='flex flex-col gap-[16px] max-w-[620px] justify-center'>
                        <h4 className='text-[28px] lg:H4-40 font-[500]'>Unlimited 1:1 Support</h4>
                        <p className='P-16 font-[500] max-w-[580px]'>Your child can reach out anytime with questions, receiving instant help and guidance through unlimited one-to-one support.</p>
                    </div>
                    <div className='relative'>
                        <Image src={'/benefits/benefit-img-6.jpg'} alt='benefit' width={660} height={400} 
                        className='rounded-[24px]'
                        />
                        <Image src={'/benefits/video-play.svg'} alt='play' width={60} height={60} 
                        className='absolute top-[40px] right-[40px]'
                        />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Benefits
