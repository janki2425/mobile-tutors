import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

const Footer = () => {
  return (
    <div className='w-full py-12 bg-[#F4F4F4] flex flex-col items-center justify-center'>
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
            <div className='flex md:flex-row flex-wrap gap-8 md:gap-12 xl:gap-28 items-start'>
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
                <Button variant="default" className='bg-black text-white rounded-xl px-6 py-3 flex items-center gap-2'>
                    <Image src="/footer-icon/star.svg" alt="star" width={20} height={20} />
                    <span className='text-white font-medium text-sm'>Trustpilot</span>
                </Button>
                <Button variant="default" className='bg-black text-white rounded-xl px-6 py-3 flex items-center gap-2'>
                    <Image src="/footer-icon/star.svg" alt="star" width={20} height={20} />
                    <span className='text-white font-medium text-sm'>Trustpilot</span>
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
            <div className='flex gap-4 items-center justify-center'>
              <Image src="/footer-icon/face-book.svg" alt="facebook" width={24} height={24} className='cursor-pointer'/>
              <Image src="/footer-icon/instagram.svg" alt="instagram" width={28} height={28} className='cursor-pointer'/>
              <Image src="/footer-icon/twitter.svg" alt="twitter" width={16} height={16} className='cursor-pointer'/>
              <Image src="/footer-icon/linkedin.svg" alt="linkedin" width={28} height={28} className='cursor-pointer'/>
              <Image src="/footer-icon/youtube.svg" alt="youtube" width={36} height={36} className='cursor-pointer'/>
            </div>
            
            {/* Payment method icons */}
            <div className='flex flex-wrap gap-3 items-center justify-center'>
              <Image src="/footer-icon/visa.svg" alt="visa" width={42} height={42} className='cursor-pointer'/>
              <Image src="/footer-icon/mastercard.svg" alt="mastercard" width={42} height={42} className='cursor-pointer'/>
              <Image src="/footer-icon/amex.svg" alt="amex" width={42} height={28} className='cursor-pointer'/>
              <div className='px-2 py-1 bg-white rounded'>
                <Image src="/footer-icon/mada.svg" alt="mada" width={42} height={42} className='cursor-pointer'/>
              </div>
              <div className='px-2 bg-white rounded'>
                <Image src="/footer-icon/tabby.svg" alt="Tabby" width={42} height={42} className='cursor-pointer'/>
              </div>
              <Image src="/footer-icon/apple-pay.svg" alt="apple-pay" width={42} height={42} className='cursor-pointer'/>
              <Image src="/footer-icon/google-pay.svg" alt="google-pay" width={42} height={42} className='cursor-pointer'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer