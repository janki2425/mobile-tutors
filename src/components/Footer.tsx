import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

const socialMediaIcons = [
  { src: "/footer-icon/face-book.svg", alt: "facebook", width: 20, height: 20 },
  { src: "/footer-icon/instagram.svg", alt: "instagram", width: 18, height: 18 },
  { src: "/footer-icon/twitter.svg", alt: "twitter", width: 18, height: 16, className: 'w-[18px] h-[16px]' },
  { src: "/footer-icon/linkedin.svg", alt: "linkedin", width: 18, height: 18 },
  { src: "/footer-icon/youtube.svg", alt: "youtube", width: 20, height: 14, className: 'w-[20px] h-[14px]' }
]

type PaymentMethod = {
  src: string;
  alt: string;
  width: number;
  height: number;
  wrapper?: {
    className: string;
  };
}

type AmexPaymentMethod = {
  type: 'amex';
  mainImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  overlays: Array<{
    src: string;
    alt: string;
    width: number;
    height: number;
    className: string;
  }>;
}

const paymentMethods: (PaymentMethod | AmexPaymentMethod)[] = [
  { src: "/footer-icon/visa.svg", alt: "visa", width: 42, height: 42 },
  { src: "/footer-icon/mastercard.svg", alt: "mastercard", width: 42, height: 42 },
  { 
    type: "amex",
    mainImage: { src: "/footer-icon/amex.svg", alt: "amex", width: 36, height: 22 },
    overlays: [
      { src: "/footer-icon/a-m-bg.svg", alt: "a-m-bg", width: 18, height: 9, className: 'absolute top-[3px] right-0' },
      { src: "/footer-icon/e-x-bg.svg", alt: "e-x-bg", width: 15, height: 10, className: 'absolute top-[10px] right-0' },
      { src: "/footer-icon/a-icon.svg", alt: "a", width: 9, height: 7, className: 'absolute top-[4px] right-[8px]' },
      { src: "/footer-icon/m-icon.svg", alt: "m", width: 9, height: 7, className: 'absolute top-[4px] right-0' },
      { src: "/footer-icon/e-icon.svg", alt: "e", width: 6, height: 8, className: 'absolute top-[11px] right-[7.5px]' },
      { src: "/footer-icon/x-icon.svg", alt: "x", width: 9, height: 8, className: 'absolute top-[11px] right-0' }
    ]
  },
  { 
    src: "/footer-icon/mada.png", 
    alt: "mada", 
    width: 38, 
    height: 24, 
    wrapper: { className: 'w-[38px] h-[24px] max-h-[24px] rounded-[4px]' }
  },
  { 
    src: "/footer-icon/tabby.png", 
    alt: "Tabby", 
    width: 38, 
    height: 24, 
    wrapper: { className: 'w-[38px] h-[24px] max-h-[24px] rounded-[4px]' }
  },
  { src: "/footer-icon/apple-pay.svg", alt: "apple-pay", width: 42, height: 42 },
  { src: "/footer-icon/google-pay.svg", alt: "google-pay", width: 42, height: 42 }
]

const Footer = () => {
  return (
    <div className='w-full py-12 bg-[#F4F4F4] flex flex-col items-center justify-center mx-auto'>
      <div className='w-full max-w-[1360px] px-4 md:px-6 lg:px-8 mx-auto'>
        {/* Top section with logo, links and buttons */}
        <div className='flex flex-col xl:flex-row gap-8 items-center md:items-start justify-between'>
          {/* Logo section */}
          <div className='mb-4 xl:mb-0'>
            <Image 
              src="/logo.png" 
              alt="logo" 
              width={165} 
              height={80} 
              className='flex' 
            />
          </div>
          
          {/* Links section */}
          <div className='flex flex-col lg:flex-row gap-8 lg:gap-24 items-start justify-between'>
            <div className='flex md:flex-row flex-wrap gap-8 md:gap-12 xl:gap-28 items-start transition-all duration-300'>
                <div className='flex flex-col gap-4'>
                    <h6 className='text-black font-[600] H6-20'>Quick Links</h6>
                    <ul className='flex flex-col gap-2 text-black font-[500] P-14'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Courses</li>
                        <li>FAQs</li>
                        <li>Testimonials</li>
                        <li>Blogs</li>
                        <li>Resources</li>
                    </ul>
                </div>
                
                <div className='flex flex-col gap-4'>
                    <h6 className='text-black font-[600] H6-20'>Our Courses</h6>
                    <ul className='flex flex-col gap-2 text-black font-[500] P-14'>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                    </ul>
                </div>
                
                <div className='flex flex-col gap-4'>
                    <h6 className='text-black font-[600] H6-20'>Legal</h6>
                    <ul className='flex flex-col gap-2 text-black font-[500] P-14'>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                    </ul>
                </div>
            </div>
            
            {/* Trustpilot buttons */}
            <div className='flex flex-col sm:flex-row gap-4 xl:mt-0'>
            <Button variant="default" className="flex items-center gap-[8px] bg-black rounded-[16px] px-[24px] py-[12px] cursor-pointer h-auto">
            <div className="relative w-[23px] h-[22px] flex items-center justify-center">
              <Image src="/Hero/icons/star.svg" alt="star" width={23} height={22} />
              <Image
                src="/Hero/icons/star-style.svg"
                alt="star"
                width={5}
                height={3}
                className="absolute top-[13px] left-[11px]"
              />
            </div>
            <Image src="/footer-icon/trustpilot.svg" width={72} height={15} alt="trustpilot" />
          </Button>
          <Button variant="default" className="flex items-center justify-center gap-[8px] bg-black rounded-[16px] px-[24px] py-[12px] cursor-pointer h-auto">
            <div className="relative w-[23px] h-[22px] flex items-center justify-center">
              <Image src="/footer-icon/star.svg" alt="star" width={23} height={22} />
              <Image
                src="/footer-icon/star-style.svg"
                alt="star"
                width={5}
                height={3}
                className="absolute top-[13px] left-[11px]"
              />
            </div>
            <Image src="/footer-icon/trustpilot.svg" width={72} height={15} alt="trustpilot" />
          </Button>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <hr className='w-full h-px bg-black my-8'/>
        
        {/* Bottom section with copyright and payment methods */}
        <div className='flex flex-col xl:flex-row gap-6 items-center justify-between w-full'>
          <p className='text-sm text-black font-medium'>&copy; 2025 Mobile Tutors. All rights reserved.</p>
          
          <div className='flex flex-col md:flex-row items-center gap-6'>
            {/* Social media icons */}
            <div className='flex gap-[12px] items-center justify-center'>
              {socialMediaIcons.map((icon, index) => (
                <div key={index} className='w-[24px] h-[24px] flex items-center justify-center'>
                  <Image 
                    src={icon.src}
                    alt={icon.alt}
                    width={icon.width}
                    height={icon.height}
                    className={`cursor-pointer ${icon.className || ''}`}
                  />
                </div>
              ))}
            </div>
            
            {/* Payment method icons */}
            <div className='flex flex-wrap gap-[8px] items-center justify-center footer-payment-method'>
              {paymentMethods.map((method, index) => {
                if ('type' in method && method.type === 'amex') {
                  return (
                    <div key={index} className='relative cursor-pointer'>
                      <Image {...method.mainImage} alt={method.mainImage.alt}/>
                      {method.overlays.map((overlay, overlayIndex) => (
                        <Image
                          key={overlayIndex}
                          {...overlay}
                          alt={overlay.alt}
                        />
                      ))}
                    </div>
                  )
                }
                
                const regularMethod = method as PaymentMethod
                const Wrapper = regularMethod.wrapper ? 'div' : React.Fragment
                const wrapperProps = regularMethod.wrapper ? { className: regularMethod.wrapper.className } : {}
                
                return (
                  <Wrapper key={index} {...wrapperProps}>
                    <Image
                      src={regularMethod.src}
                      alt={regularMethod.alt}
                      width={regularMethod.width}
                      height={regularMethod.height}
                      style={{ width: `${regularMethod.width}px`, height: `${regularMethod.height}px` }}
                      className='cursor-pointer object-cover'
                    />
                  </Wrapper>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer