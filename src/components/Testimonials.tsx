'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'John Stephen',
    rating: 5,
    position: 'CEO',
    testimonial: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.',
  },
  {
    id: 2,
    name: 'John Stephen',
    rating: 5,
    position: 'CEO',
    testimonial: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.',
  },
  {
    id: 3,
    name: 'John Stephen',
    rating: 4,
    position: 'CEO',
    testimonial: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.',
  },
  {
    id: 4,
    name: 'John Stephen',
    rating: 3,
    position: 'CEO',
    testimonial: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.',
  },
];

const CAROUSEL_CONFIG = {
  AUTO_SLIDE_INTERVAL: 3000,
  MOBILE_BREAKPOINT: 768,
  TABLET_BREAKPOINT: 1024,
  DESKTOP_BREAKPOINT: 1440,
  TRANSITION_DURATION: 500,
};

function useScreenSize() {
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('mobile');

  useEffect(() => {
    const check = () => {
      const width = window.innerWidth;
      if (width < CAROUSEL_CONFIG.MOBILE_BREAKPOINT) {
        setScreenSize('mobile');
      } else if (width < CAROUSEL_CONFIG.DESKTOP_BREAKPOINT) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return screenSize;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(testimonials.length);
  const [isPaused, setIsPaused] = useState(false);
  const screenSize = useScreenSize();

  const continuousItems = [...testimonials, ...testimonials, ...testimonials];
  const totalItems = testimonials.length;
  const middleStart = totalItems;
  const middleEnd = totalItems * 2 - 1;

  useEffect(() => {
    if (isPaused) return;
    const autoSlide = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex > middleEnd) {
          // Reset to middleStart without animation
          setTimeout(() => setCurrentIndex(middleStart), 0);
          return middleStart;
        }
        return nextIndex;
      });
    }, CAROUSEL_CONFIG.AUTO_SLIDE_INTERVAL);
    return () => clearInterval(autoSlide);
  }, [isPaused, middleEnd, middleStart]);

  useEffect(() => {
    // Reset index when screen size changes to prevent misalignment
    setCurrentIndex(middleStart);
  }, [screenSize, middleStart]);

  const handlePrev = () => {
    setIsPaused(true);
    setCurrentIndex((prevIndex) => {
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
    setCurrentIndex((prevIndex) => {
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
      className="w-full max-w-[1440px] my-[60px] bg-[#F5F5F5] rounded-[24px] mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="w-full max-w-[1360px] flex flex-col lg:flex-row gap-[40px] px-2 md:px-4 cs:px-4 xl:px-0 xl:gap-[120px] py-[20px] lg:py-[80px] mx-auto transition-all duration-300">
        <h6 className="text-[28px] lg:text-[20px] font-[600] mx-auto lg:mx-0 transition-all duration-300">TESTIMONIALS</h6>
        <div className="flex flex-col lg:flex-row gap-[20px] cs:gap-80 xl:gap-[40px] items-start mx-auto lg:mx-0 transition-all duration-300">
          <div className="flex items-center justify-center w-[60px] h-[40px] md:w-[60px] md:h-[60px] xl:w-[83px] xl:h-[67px] transition-all duration-300">
            <Image
              src="/testimonials/quotes.svg"
              alt="quotes"
              width={83}
              height={67}
              className="w-[60px] h-[40px] md:w-[60px] md:h-[60px] xl:w-[83px] xl:h-[67px] transition-all duration-300"
            />
          </div>
          <div className="w-full max-w-[916px] flex flex-col gap-[40px] transition-all duration-300">
            <div className="overflow-hidden w-full max-w-[300px] md:max-w-[700px] cs:max-w-700 xl:max-w-[916px]">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (screenSize === 'mobile' ? 300 : screenSize === 'tablet' ? 350 : 458)}px)`
                }}
              >
                {continuousItems.map((testimonial, idx) => (
                  <div
                    key={`${testimonial.id}-${idx}`}
                    className="flex-shrink-0 flex flex-col gap-[24px] px-2 box-border"
                    style={{
                      width: screenSize === 'mobile'
                        ? '300px'
                        : screenSize === 'tablet'
                        ? '350px'
                        : '458px'
                    }}
                  >
                    <div className="flex gap-[4px]">
                      {Array.from({ length: testimonial.rating }).map((_, index) => (
                        <div
                          key={index}
                          className="relative w-[22px] h-[21px] md:w-[27px] md:h-[26px] p-1 bg-[#00B67A] transition-all duration-300"
                        >
                          <Image
                            src="/testimonials/star.svg"
                            alt="star"
                            width={15}
                            height={15}
                            className="flex items-center justify-center mx-auto w-[15px] h-[15px] md:w-[23px] md:h-[22px] transition-all duration-300"
                          />
                          <Image
                            src="/testimonials/star-style.svg"
                            alt="star-style"
                            width={5}
                            height={3}
                            className="absolute top-[12px] left-[9px] md:top-[15px] md:left-[13px] transition-all duration-300"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="max-w-[458px] flex flex-col gap-[24px]">
                      <h5 className="text-[20px] xl:text-[24px] font-[600] transition-all duration-300">{testimonial.testimonial}</h5>
                      <div className="flex flex-col items-start">
                        <p className="text-[12px] xl:text-[16px] font-[500] transition-all duration-300">{testimonial.name}</p>
                        <p className="text-[12px] xl:text-[16px] font-[500] transition-all duration-300">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex w-full max-w-[88px] justify-between transition-all duration-300">
              <button
                aria-label="Previous slide"
                className="flex items-center justify-center"
                onClick={handlePrev}
              >
                <Image
                  src="/testimonials/left-arrow.svg"
                  alt="Previous"
                  width={32}
                  height={32}
                  className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px] transition-all duration-300 cursor-pointer"
                />
              </button>
              <button
                aria-label="Next slide"
                className="flex items-center justify-center"
                onClick={handleNext}
              >
                <Image
                  src="/testimonials/right-arrow.svg"
                  alt="Next"
                  width={32}
                  height={32}
                  className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px] transition-all duration-300 cursor-pointer"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;