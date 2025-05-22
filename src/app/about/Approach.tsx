import React from 'react'
import Image from 'next/image'

const contentList = [
    {
        id: 1,
        title: '01 Lorem lipsum',
        description: "Our expert tutors deliver interactive, engaging lessons tailored to your child's needs. With real-time feedback and active support, students grasp key concepts and build confidence.",
        image: '/benefits/benefit-img-2.jpg',
    },
    {
        id: 2,
        title: '02 Lorem lipsum',
        description: "Our expert tutors deliver interactive, engaging lessons tailored to your child's needs. With real-time feedback and active support, students grasp key concepts and build confidence.",
        image: '/benefits/benefit-img-2.jpg',
    },
    {
        id: 3,
        title: '03 Lorem lipsum',
        description: "Our expert tutors deliver interactive, engaging lessons tailored to your child's needs. With real-time feedback and active support, students grasp key concepts and build confidence.",
        image: '/benefits/benefit-img-2.jpg',
    },
]

const Approach = () => {
  return (
    <div className="w-full max-w-[1440px] bg-[#F5F5F5] my-[80px] mx-auto rounded-[60px] px-2 md:px-4 xxl:px-0">
      <div className="w-full max-w-[1360px] mx-auto py-[30px] lg:py-[80px]">
        <h3 className="H5-32 lg:H3-48-120 font-[500] text-center mb-[20px] lg:mb-[40px] transition-all duration-300">Our Approach</h3>
        <div className="flex flex-col gap-[20px] lg:gap-[40px] transition-all duration-300">
          {contentList.map((content) => {
            const isEven = content.id % 2 === 0;
            return (
              <div
                key={content.id}
                className={`w-full flex flex-col lg:flex-row gap-[16px] lg:gap-[60px] items-center p-2 lg:p-0 transition-all duration-300 rounded-[24px] ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
              >
                {/* Image Section */}
                <div className="relative w-full max-w-[660px]">
                  <Image
                    src={content.image}
                    alt="benefit"
                    width={660}
                    height={400}
                    className="rounded-[24px] w-full h-auto md:max-h-[500px] lg:max-w-[660px] lg:max-h-[400px] transition-all duration-300"
                  />
                  <Image
                    src="/benefits/video-play.svg"
                    alt="play"
                    width={48}
                    height={48}
                    className='absolute top-[20px] right-[20px] md:top-[40px]  lg:top-[40px] lg:right-[40px] w-[30px] h-[30px] md:w-[48px] md:h-[48px] lg:w-[48px] lg:h-[48px]'
                  />
                </div>

                {/* Text Section */}
                <div className="flex flex-col gap-[8px] lg:gap-[16px] max-w-full lg:max-w-[640px] transition-all duration-300">
                  <h4 className="H-24 lg:H4-40-120 font-[500] transition-all duration-300">{content.title}</h4>
                  <p className="P-12 lg:P-18 font-[500] max-w-[640px] transition-all duration-300">{content.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Approach
