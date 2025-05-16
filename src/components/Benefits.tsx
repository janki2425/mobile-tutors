import React from 'react'
import Image from 'next/image'

const benefitList = [
  {
    id: 1,
    title: 'Personalised Assessment',
    description: 'We assess your child&apos;s strengths, weaknesses, and learning style to create a customised plan that targets their unique needs and ensures clear progress.',
    image: '/benefits/benefit-img-1.jpg',
  },
  {
    id: 2,
    title: 'Live Lessons',
    description: 'Our expert tutors deliver interactive, engaging lessons tailored to your child&apos;s needs. With real-time feedback and active support, students grasp key concepts and build confidence.',
    image: '/benefits/benefit-img-2.jpg',
  },
  {
    id: 3,
    title: 'Lesson Notes & Recordings',
    description: 'Each session comes with comprehensive lesson notes and class recordings, offering students the perfect tools for effective revision and long-term retention.',
    image: '/benefits/benefit-img-3.jpg',
  },
  {
    id:4,
    title: 'Weekly Homework',
    description: 'Students receive weekly homework, carefully marked with detailed feedback, to help them stay on track and continuously improve their understanding.',
    image: '/benefits/benefit-img-4.jpg',
  },
  {
    id:5,
    title: 'Regular Mock Exams',
    description: 'Students take regular mock exams, complete with detailed marking and feedback. This helps them track their progress and build confidence in exam conditions.',
    image: '/benefits/benefit-img-5.jpg',
  },
  {
    id:6,
    title: 'Unlimited 1:1 Support',
    description: 'Your child can reach out anytime with questions, receiving instant help and guidance through unlimited one-to-one support.',
    image: '/benefits/benefit-img-6.jpg',
  },
]

const Benefits = () => {
  return (
    <div className='w-full bg-[#F5F5F5] my-[80px] rounded-[60px]'>
      <div className='w-full max-w-[1360px] h-cover mx-auto'>
        <div className='w-full py-[80px] flex flex-col gap-[40px]'>
            <h3 className='H3-48-120 font-[500] text-center'>Our Benefits</h3>
            <div className='flex flex-col gap-[40px]'>
                {benefitList.map((benefit) => (
                    <div key={benefit.id} className='w-full flex flex-col md:flex-row justify-between border border-[#E0E0E0] md:border-none md:p-0 rounded-[24px]'>
                        {(benefit.id == 1 || benefit.id == 3 || benefit.id == 5) &&
                            <>
                                <div className='relative w-full max-w-[660px] h-[400px]'>
                                    <Image src={benefit.image} alt='benefit' width={660} height={400} 
                                    className='rounded-[24px] w-full h-[400px] object-cover'
                                    />
                                    <Image src={'/benefits/video-play.svg'} alt='play' width={60} height={60} 
                                    className='absolute top-[40px] left-[40px]'
                                    />
                                </div>
                                <div className='flex flex-col gap-[16px] max-w-[620px] justify-center'>
                                    <h4 className='text-[28px] lg:H4-40-120 font-[500]'>{benefit.title}</h4>
                                    <p className='text-[16px] lg:P-16 font-[500] max-w-[580px]'>{benefit.description}</p>
                                </div>
                            </>
                        }
                        {(benefit.id == 2 || benefit.id == 4 || benefit.id == 6) &&
                            <>
                                <div className='flex flex-col gap-[16px] max-w-[620px] justify-center'>
                                <h4 className='text-[28px] lg:H4-40-120 font-[500]'>{benefit.title}</h4>
                                <p className='P-16 font-[500] max-w-[580px]'>{benefit.description}</p>
                            </div>
                            <div className='relative'>
                                <Image src={benefit.image} alt='benefit' width={660} height={400} 
                                className='rounded-[24px]'
                                />
                                <Image src={'/benefits/video-play.svg'} alt='play' width={60} height={60} 
                                className='absolute top-[40px] right-[40px]'
                                />
                                </div>
                            </>
                        }
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Benefits
