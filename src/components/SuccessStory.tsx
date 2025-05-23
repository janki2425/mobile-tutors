'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const successStoryData = [
  {
    id: 1,
    name: "Sara",
    image: "/success-story/success-story-1.jpg",
    description: "Porem ipsum dolor sit amet, consectetur adipiscing elitunc vulputate libero et velit.",
  },
  {
    id: 2,
    name: "Emman",
    image: "/success-story/success-story-2.jpg",
    description: "Porem ipsum dolor sit amet, consectetur adipiscing elitunc vulputate libero et velit.",
  },
  {
    id: 3,
    name: "John",
    image: "/success-story/success-story-3.jpg",
    description: "Porem ipsum dolor sit amet, consectetur adipiscing elitunc vulputate libero et velit.",
  },
  {
    id: 4,
    name: "Emy",
    image: "/success-story/success-story-4.jpg",
    description: "Porem ipsum dolor sit amet, consectetur adipiscing elitunc vulputate libero et velit.",
  },
  {
    id: 5,
    name: "Jennie",
    image: "/success-story/success-story-1.jpg",
    description: "Porem ipsum dolor sit amet, consectetur adipiscing elitunc vulputate libero et velit.",
  },
  {
    id: 6,
    name: "Emma",
    image: "/success-story/success-story-4.jpg",
    description: "Porem ipsum dolor sit amet, consectetur adipiscing elitunc vulputate libero et velit.",
  },
];

const CAROUSEL_CONFIG = {
  AUTO_SLIDE_INTERVAL: 3000,
  MOBILE_BREAKPOINT: 768,
  DESKTOP_BREAKPOINT: 1024,
  DESKTOP_BREAKPOINT_2: 1440,
  TRANSITION_DURATION: 500,
};

function useScreenSize() {
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop' | 'desktop-2'>('mobile');

  useEffect(() => {
    const check = () => {
      const width = window.innerWidth;
      if (width < CAROUSEL_CONFIG.MOBILE_BREAKPOINT) {
        setScreenSize('mobile');
      } else if (width < CAROUSEL_CONFIG.DESKTOP_BREAKPOINT) {
        setScreenSize('tablet');
      } else if (width < CAROUSEL_CONFIG.DESKTOP_BREAKPOINT_2) {
        setScreenSize('desktop');
      } else {
        setScreenSize('desktop-2');
      }
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return screenSize;
}

const SuccessStory = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isTestimonialsPage = pathname === '/testimonials';
  const isBlogPage = pathname === '/blogs';
  const screenSize = useScreenSize();
  const [currentIndex, setCurrentIndex] = useState(successStoryData.length);
  const [isPaused, setIsPaused] = useState(false);

  const continuousItems = [...successStoryData, ...successStoryData, ...successStoryData];
  const totalItems = successStoryData.length;
  const middleStart = totalItems;
  const middleEnd = totalItems * 2 - 1;

  const getItemWidth = () => {
    switch (screenSize) {
      case 'mobile':
        return 100;
      case 'tablet':
        return 50;
      case 'desktop':
        return 33.33;
      case 'desktop-2':
        return 25;
      default:
        return 100;
    }
  };

  useEffect(() => {
    if (isPaused) return;
    const autoSlide = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = prevIndex + 1;
        if (nextIndex > middleEnd) {
          return middleStart;
        }
        return nextIndex;
      });
    }, CAROUSEL_CONFIG.AUTO_SLIDE_INTERVAL);
    return () => clearInterval(autoSlide);
  }, [isPaused, middleEnd, middleStart]);

  const handlePrev = () => {
    setIsPaused(true);
    setCurrentIndex(prevIndex => {
      const prevIndexNew = prevIndex - 1;
      if (prevIndexNew < middleStart) {
        return middleEnd;
      }
      return prevIndexNew;
    });
    setTimeout(() => setIsPaused(false), CAROUSEL_CONFIG.AUTO_SLIDE_INTERVAL);
  };

  const handleNext = () => {
    setIsPaused(true);
    setCurrentIndex(prevIndex => {
      const nextIndex = prevIndex + 1;
      if (nextIndex > middleEnd) {
        return middleStart;
      }
      return nextIndex;
    });
    setTimeout(() => setIsPaused(false), CAROUSEL_CONFIG.AUTO_SLIDE_INTERVAL);
  };

  return (
    <div
      className="w-full max-w-[1360px] mx-auto my-[60px] px-2 md:px-4 xxl:px-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
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
              <button
                aria-label="Previous slide"
                className="flex w-[32px] h-[32px] items-center justify-center cursor-pointer"
                onClick={handlePrev}
              >
                <Image src="/testimonials/left-arrow.svg" width={19} height={32} alt="Previous" />
              </button>
              <button
                aria-label="Next slide"
                className="flex w-[32px] h-[32px] items-center justify-center cursor-pointer"
                onClick={handleNext}
              >
                <Image src="/testimonials/right-arrow.svg" width={19} height={32} alt="Next" />
              </button>
            </div>
          </div>
        )}
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * getItemWidth()}%)`,
            }}
          >
            {continuousItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className={`relative w-full ${
                  screenSize === 'mobile'
                    ? 'min-w-full'
                    : screenSize === 'tablet'
                    ? 'min-w-[50%]'
                    : screenSize === 'desktop'
                    ? 'min-w-[33.33%]'
                    : 'min-w-[25%]'
                } px-2 transition-all duration-500`}
              >
                <div className="relative w-full max-w-[295px] h-[400px] cursor-pointer mx-auto">
                  <div className="relative w-full h-[400px]">
                    <Image
                      src={item.image}
                      alt={`${item.name}'s success story`}
                      fill
                      className="rounded-[24px] object-cover"
                    />
                    <div className="absolute inset-0 bg-black/[24%] rounded-[24px]"></div>
                    <div className="w-[40px] h-[40px] flex items-center justify-center absolute top-[28px] right-[28px] z-10">
                      <Image
                        src="/success-story/video-play.svg"
                        alt="Play video"
                        width={32}
                        height={32}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-[8px] absolute bottom-[24px] left-[24px] md:left-[40px] lg:left-[24px] transition-all duration-300">
                    <h6 className="H6-20 font-[600] text-white">{item.name}</h6>
                    <p className="P-16 font-[500] text-white max-w-[220px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;