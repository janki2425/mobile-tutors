'use client'
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const SuccessStory = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isTestimonialsPage = pathname === '/testimonials';
  const isBlogPage = pathname === '/blogs';
  return (
    <div className="w-full max-w-[1360px] mx-auto my-[60px] px-2 md:px-4 xxl:px-0">
      <div className="flex flex-col gap-[40px]">
        {isHomePage && (
            <h3 className="text-[24px] lg:H3-48-120 font-[500] max-w-[800px] mx-auto text-center transition-all duration-300">
                Get Inspired by our Students Success Stories
            </h3>
        )}
        {(isTestimonialsPage || isBlogPage) && (
            <div className="w-full flex items-center justify-between">
                <h3 className="text-[24px] lg:H3-48-120 font-[500] transition-all duration-300">
                    Get Inspired by our Students Success Stories
                </h3>
                <div className="flex w-[88px] h-[32px] items-center gap-[8px] lg:gap-[16px] xl:gap-[24px] z-10 transition-all duration-300">
                    <div className="flex w-[32px] h-[32px] items-center justify-center">
                    <Image src={'/testimonials/left-arrow.svg'} width={19} height={32} alt="left" className="w-[19px] h-[32px] cursor-pointer" />
                    </div>
                    <div className="flex w-[32px] h-[32px] items-center justify-center">
                    <Image src={'/testimonials/right-arrow.svg'} width={19} height={32} alt="right" className="w-[19px] h-[32px] cursor-pointer" />
                    </div>
                </div>
            </div>
        )}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[16px] justify-items-center transition-all duration-300">
            <div className="relative w-full max-w-[295px] h-[400px] cursor-pointer">
                <div className="relative w-full h-[400px]">
                    <div className="absolute inset-0 bg-[url('/success-story/success-story-1.jpg')] bg-cover bg-center bg-no-repeat rounded-[24px] h-full">
                    </div>
                    <div className="absolute inset-0 bg-black/[24%] rounded-[24px]"></div>
                    <div className="w-[40px] h-[40px] flex items-center justify-center absolute top-[28px] right-[28px] z-10">
                        <Image
                            src="/success-story/video-play.svg"
                            alt="play"
                            width={32}
                            height={32}
                            className="w-[32px] h-[32px]"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-start gap-[8px] absolute bottom-[24px] left-[24px] md:left-[40px] lg:left-[24px] transition-all duration-300">
                    <h6 className="H6-20 font-[600] text-white">Sara</h6>
                    <p className="P-16 font-[500] text-white max-w-[220px]">
                        Porem ipsum dolor sit amet, consectetur adipiscing elitunc
                        vulputate libero et velit.
                    </p>
                </div>
            </div>
            <div className="relative w-full max-w-[295px] h-[400px] cursor-pointer">
                <div className="relative w-full h-[400px]">
                    <div className="absolute inset-0 bg-[url('/success-story/success-story-2.jpg')] bg-cover bg-center bg-no-repeat rounded-[24px] h-full">
                    </div>
                    <div className="absolute inset-0 bg-black/[24%] rounded-[24px]"></div>
                    <div className="w-[40px] h-[40px] flex items-center justify-center absolute top-[28px] right-[28px] z-10">
                        <Image
                            src="/success-story/video-play.svg"
                            alt="play"
                            width={32}
                            height={32}
                            className="w-[32px] h-[32px]"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-start gap-[8px] absolute bottom-[24px] left-[24px] md:left-[40px] lg:left-[24px]">
                    <h6 className="H6-20 font-[600] text-white">Emman</h6>
                    <p className="P-16 font-[500] text-white max-w-[220px]">
                    Porem ipsum dolor sit amet, consectetur adipiscing elitunc vulputate libero et velit.
                    </p>
                </div>
            </div>
            <div className="relative w-full max-w-[295px] h-[400px] cursor-pointer">
                <div className="relative w-full h-[400px]">
                    <div className="absolute inset-0 bg-[url('/success-story/success-story-3.jpg')] bg-cover bg-center bg-no-repeat rounded-[24px] h-full">
                    </div>
                    <div className="absolute inset-0 bg-black/[24%] rounded-[24px]"></div>
                    <div className="w-[40px] h-[40px] flex items-center justify-center absolute top-[28px] right-[28px] z-10">
                        <Image
                            src="/success-story/video-play.svg"
                            alt="play"
                            width={32}
                            height={32}
                            className="w-[32px] h-[32px]"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-start gap-[8px] absolute bottom-[24px] left-[24px] md:left-[40px] lg:left-[24px]">
                    <h6 className="H6-20 font-[600] text-white">John</h6>
                    <p className="P-16 font-[500] text-white max-w-[220px]">
                    Porem ipsum dolor sit amet, consectetur adipiscing elitunc vulputate libero et velit.
                    </p>
                </div>
            </div>
            <div className="relative w-full max-w-[295px] h-[400px] cursor-pointer">
                <div className="relative w-full h-[400px]">
                    <div className="absolute inset-0 bg-[url('/success-story/success-story-4.jpg')] bg-cover bg-center bg-no-repeat rounded-[24px] h-full">
                    </div>
                    <div className="absolute inset-0 bg-black/[24%] rounded-[24px]"></div>
                    <div className="w-[40px] h-[40px] flex items-center justify-center absolute top-[28px] right-[28px] z-10">
                        <Image
                            src="/success-story/video-play.svg"
                            alt="play"
                            width={32}
                            height={32}
                            className="w-[32px] h-[32px]"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-start gap-[8px] absolute bottom-[24px] left-[24px] md:left-[40px] lg:left-[24px]">
                    <h6 className="H6-20 font-[600] text-white">Emy</h6>
                    <p className="P-16 font-[500] text-white max-w-[220px]">
                        Porem ipsum dolor sit amet, consectetur adipiscing elitunc
                        vulputate libero et velit.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
