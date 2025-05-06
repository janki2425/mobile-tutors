import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
const Footer = () => {
  return (
    <div className='w-full h-[447px] bg-[#F4F4F4] flex flex-col items-center justify-center'>
      <div className='flex max-w-[1360px] gap-[40px] items-start'>
        <Image src="/logo.png" alt="logo" width={165} height={80} />
        <div className='flex gap-[40px] items-start justify-center'>
            <div className='flex flex-col w-[232px] gap-[16px] items-center justify-center'>
                <h3 className='text-black font-[500] H1-20'>Quick Links</h3>
                <ul className='flex flex-col gap-[4px] text-start P-14 text-black font-[500]'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Courses</li>
                    <li>FAQs</li>
                    <li>Testimonials</li>
                    <li>Blogs</li>
                    <li>Resources</li>
                </ul>
            </div>
            <div className='flex flex-col w-[232px] gap-[16px] items-center justify-center'>
                <h3 className='text-black font-[500] H1-20'>Our Courses</h3>
                <ul className='flex flex-col gap-[4px] text-start P-14 text-black font-[500]'>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                </ul>
            </div>
            <div className='flex flex-col w-[232px] gap-[16px] items-center justify-center'>
                <h3 className='text-black font-[500] H1-20'>Quick Links</h3>
                <ul className='flex flex-col gap-[4px] text-start P-14 text-black font-[500]'>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                </ul>
            </div>
        </div>
        <div className='flex gap-[24px] items-center justify-center'>
            <Button variant="default" className='bg-black text-white rounded-[16px] px-[24px] py-[12px]'>
                <Image src="/footer-icon/star.svg" alt="star" width={23} height={22} />
                <p className='P-10 text-white font-[500]'>Trustpilot</p>
            </Button>
            <Button variant="default" className='bg-black text-white rounded-[16px] px-[24px] py-[12px]'>
                <Image src="/footer-icon/star.svg" alt="star" width={23} height={22} />
                <p className='P-10 text-white font-[500]'>Trustpilot</p>
            </Button>
        </div>
      </div>
      <hr className='w-full max-w-[1360px] h-[1px] px-8 bg-black mt-[60px] mb-[10px]'/>
      <div className='flex max-w-[1360px] items-center justify-between w-full px-4'>
        <p className='P-14 text-black font-[500]'>&copy; 2025 Mobile Tutors. All rights reserved.</p>
        <div className='flex items-center gap-[40px]'>
            <div className='flex gap-[16px] items-center justify-center'>
                <Image src="/footer-icon/face-book.svg" alt="facebook" width={24} height={24} className='cursor-pointer'/>
                <Image src="/footer-icon/instagram.svg" alt="instagram" width={30} height={30} className='cursor-pointer'/>
                <Image src="/footer-icon/twitter.svg" alt="twitter" width={16} height={16} className='cursor-pointer'/>
                <Image src="/footer-icon/linkedin.svg" alt="linkedin" width={30} height={30} className='cursor-pointer'/>
                <Image src="/footer-icon/youtube.svg" alt="youtube" width={40} height={40} className='cursor-pointer'/>
            </div>
            <div className='flex gap-[16px] items-center justify-center'>
                <Image src="/footer-icon/visa.svg" alt="visa" width={48} height={48} className='cursor-pointer'/>
                <Image src="/footer-icon/mastercard.svg" alt="mastercard" width={48} height={48} className='cursor-pointer'/>
                <Image src="/footer-icon/amex.svg" alt="amex" width={48} height={30} className='cursor-pointer'/>
                <div className='px-2 py-2 bg-white rounded-[5px]'>
                    <Image src="/footer-icon/mada.svg" alt="mada" width={48} height={48} className='cursor-pointer'/>
                </div>
                <div className='px-2 bg-white rounded-[5px]'>
                    <Image src="/footer-icon/tabby.svg" alt="Tabby" width={48} height={48} className='cursor-pointer'/>
                </div>
                <Image src="/footer-icon/apple-pay.svg" alt="apple-pay" width={48} height={48} className='cursor-pointer'/>
                <Image src="/footer-icon/google-pay.svg" alt="google-pay" width={48} height={48} className='cursor-pointer'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
