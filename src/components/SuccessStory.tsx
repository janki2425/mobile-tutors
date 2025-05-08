import React from "react";
import Image from "next/image";

const SuccessStory = () => {
  return (
    <div className="w-full max-w-[1360px] mx-auto my-[60px]">
      <div className="flex flex-col gap-[40px]">
        <h3 className="H3-48 px-4 font-[500] text-center">
          Get Inspired by our Students Success Stories
        </h3>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] md:gap-[60px] justify-items-center px-4">
            <div className="relative w-full h-[400px]">
                <div className="relative w-full md:w-[295px] h-[400px] mx-auto">
                    <div className="absolute inset-0 bg-[url('/success-story/success-story-1.jpg')] bg-cover bg-center bg-no-repeat rounded-[24px] h-full">
                    </div>
                    <div className="absolute inset-0 bg-black/[24%] rounded-[24px]"></div>
                    <Image
                        src="/success-story/video-play.svg"
                        alt="play"
                        width={32}
                        height={32}
                        className="absolute top-4 right-4 z-10"
                    />
                </div>
                <div className="flex flex-col items-start gap-[8px] absolute bottom-[24px] left-[24px] md:left-[40px] lg:left-[24px]">
                    <h6 className="H6-20 font-[600] text-white">Sara</h6>
                    <p className="P-16 font-[500] text-white max-w-[220px]">
                        Porem ipsum dolor sit amet, consectetur adipiscing elitunc
                        vulputate libero et velit.
                    </p>
                </div>
            </div>
            <div className="relative w-full h-[400px]">
                <div className="relative w-full md:w-[295px] h-[400px] mx-auto">
                    <div className="absolute inset-0 bg-[url('/success-story/success-story-2.jpg')] bg-cover bg-center bg-no-repeat rounded-[24px] h-full">
                    </div>
                    <div className="absolute inset-0 bg-black/[24%] rounded-[24px]"></div>
                    <Image
                        src="/success-story/video-play.svg"
                        alt="play"
                        width={32}
                        height={32}
                        className="absolute top-4 right-4 z-10"
                    />
                </div>
                <div className="flex flex-col items-start gap-[8px] absolute bottom-[24px] left-[24px] md:left-[40px] lg:left-[24px]">
                    <h6 className="H6-20 font-[600] text-white">Emman</h6>
                    <p className="P-16 font-[500] text-white max-w-[220px]">
                    Porem ipsum dolor sit amet, consectetur adipiscing elitunc vulputate libero et velit.
                    </p>
                </div>
            </div>
            <div className="relative w-full h-[400px]">
                <div className="relative w-full md:w-[295px] h-[400px] mx-auto">
                    <div className="absolute inset-0 bg-[url('/success-story/success-story-3.jpg')] bg-cover bg-center bg-no-repeat rounded-[24px] h-full">
                    </div>
                    <div className="absolute inset-0 bg-black/[24%] rounded-[24px]"></div>
                    <Image
                        src="/success-story/video-play.svg"
                        alt="play"
                        width={32}
                        height={32}
                        className="absolute top-4 right-4 z-10"
                    />
                </div>
                <div className="flex flex-col items-start gap-[8px] absolute bottom-[24px] left-[24px] md:left-[40px] lg:left-[24px]">
                    <h6 className="H6-20 font-[600] text-white">John</h6>
                    <p className="P-16 font-[500] text-white max-w-[220px]">
                    Porem ipsum dolor sit amet, consectetur adipiscing elitunc vulputate libero et velit.
                    </p>
                </div>
            </div>
            <div className="relative w-full h-[400px]">
                <div className="relative w-full md:w-[295px] h-[400px] mx-auto">
                    <div className="absolute inset-0 bg-[url('/success-story/success-story-4.jpg')] bg-cover bg-center bg-no-repeat rounded-[24px] h-full">
                    </div>
                    <div className="absolute inset-0 bg-black/[24%] rounded-[24px]"></div>
                    <Image
                        src="/success-story/video-play.svg"
                        alt="play"
                        width={32}
                        height={32}
                        className="absolute top-4 right-4 z-10"
                    />
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
