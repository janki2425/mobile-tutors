import React from 'react'
import Image from 'next/image'

const contentList = [
    {
        id: 1,
        title: 'Live Lessons',
        description: "Our expert tutors deliver interactive, engaging lessons tailored to your child's needs. With real-time feedback and active support, students grasp key concepts and build confidence.",
        image: '/benefits/benefit-img-2.jpg',
    },
    {
        id: 2,
        title: 'Workbooks',
        description: "Our expert tutors deliver interactive, engaging lessons tailored to your child's needs. With real-time feedback and active support, students grasp key concepts and build confidence.",
        image: '/benefits/benefit-img-2.jpg',
    },
    {
        id: 3,
        title: 'Homework',
        description: "Our expert tutors deliver interactive, engaging lessons tailored to your child's needs. With real-time feedback and active support, students grasp key concepts and build confidence.",
        image: '/benefits/benefit-img-2.jpg',
    },
]

const Content = () => {
  return (
    <div className="w-full max-w-[1440px] bg-[#F5F5F5] my-[80px] rounded-[60px] mx-auto px-2 md:px-4 xxl:px-0 transition-all duration-300">
      <div className="w-full max-w-[1360px] mx-auto py-[40px] xl:py-[80px] transition-all duration-300">
        <h3 className="H-24 xl:H3-48-120 font-[500] text-center mb-[40px]">Course Content</h3>
        <div className="flex flex-col gap-[24px] lg:gap-[40px]">
          {contentList.map((content) => {
            const isEven = content.id % 2 === 0;
            return (
              <div
                key={content.id}
                className={`w-full flex flex-col lg:flex-row gap-[16px] lg:gap-[60px] items-center p-2 lg:p-0 transition-all duration-300 rounded-[24px] ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
              >
                {/* Image Section */}
                <div className="relative w-full max-w-[660px] transition-all duration-300">
                  <Image
                    src={content.image}
                    alt="benefit"
                    width={660}
                    height={400}
                    className="rounded-[24px] w-full h-auto md:max-h-[500px] lg:max-w-[660px] lg:max-h-[400px]"
                  />
                  <div className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center absolute top-[20px] right-[20px] md:top-[40px] md:right-[40px] z-10 transition-all duration-300">
                        <Image
                            src="/success-story/video-play.svg"
                            alt="play"
                            width={48}
                            height={48}
                            className="w-[48px] h-[48px]"
                        />
                    </div>
                </div>

                {/* Text Section */}
                <div className="flex flex-col gap-[8px] lg:gap-[16px] max-w-full lg:max-w-[640px] transition-all duration-300">
                  <h4 className="H6-20 lg:H4-40-120 font-[500] transition-all duration-300">{content.title}</h4>
                  <p className="P-12 lg:P-14 font-[500] max-w-[640px]">{content.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Content
