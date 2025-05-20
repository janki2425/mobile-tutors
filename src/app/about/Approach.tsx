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
    <div className="w-full max-w-[1440px] bg-[#F5F5F5] my-[80px] mx-auto rounded-[60px]">
      <div className="w-full max-w-[1360px] mx-auto py-[80px]">
        <h3 className="H3-48-120 font-[500] text-center mb-[40px]">Our Approach</h3>
        <div className="flex flex-col gap-[40px]">
          {contentList.map((content) => {
            const isEven = content.id % 2 === 0;
            return (
              <div
                key={content.id}
                className={`w-full flex flex-col lg:flex-row gap-[24px] lg:gap-[60px] items-center border border-[#E0E0E0] lg:border-none p-2 lg:p-0 rounded-[24px] ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
              >
                {/* Image Section */}
                <div className="relative w-full max-w-[660px]">
                  <Image
                    src={content.image}
                    alt="benefit"
                    width={660}
                    height={400}
                    className="rounded-[24px] w-full h-auto md:max-h-[500px] lg:max-w-[660px] lg:max-h-[400px]"
                  />
                  <Image
                    src="/benefits/video-play.svg"
                    alt="play"
                    width={48}
                    height={48}
                    className='absolute top-[40px] right-[40px] w-[48px] h-[48px]'
                  />
                </div>

                {/* Text Section */}
                <div className="flex flex-col gap-[16px] max-w-full lg:max-w-[640px]">
                  <h4 className="H4-40-120 font-[500]">{content.title}</h4>
                  <p className="P-14 font-[500] max-w-[640px]">{content.description}</p>
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
