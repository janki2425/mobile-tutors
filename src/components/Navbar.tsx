import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const Navbar = () => {
  return (
    <>
      <div className='px-[40px] h-[80px] border-b border-gray-400 flex items-center relative z-20'>
        <nav className='flex justify-between items-center w-full'>
            <div className='flex gap-4 items-center'>
                <Image src="/logo.png" alt="logo" width={111} height={54} />
            </div>
            
            {/* Desktop Navigation */}
            <div className='hidden lg:block'>
                <ul className='flex gap-[8px] items-center P-14 text-black font-[500]'>
                    <li className='px-[5px] py-[3px] cursor-pointer'><a href="/">HOME</a></li>
                    <li className='px-[5px] py-[3px] cursor-pointer'><a href="#about">ABOUT US</a></li>
                    <li className='px-[5px] py-[3px] cursor-pointer'><a href="#courses">COURSES</a></li>
                    <li className='px-[5px] py-[3px] cursor-pointer'><a href="/faqs">FAQS</a></li>
                    <li className='px-[5px] py-[3px] cursor-pointer'><a href="/testimonials">TESTIMONIALS</a></li>
                    <li className='px-[5px] py-[3px] cursor-pointer'><a href="/blogs">BLOGS</a></li>
                    <li className='px-[5px] py-[3px] cursor-pointer'><a href="#">RESOURCES</a></li>
                </ul>
            </div>

            {/* Desktop Buttons */}
            <div className='hidden lg:flex gap-[16px] items-center P-14 text-black font-[500]'>
                <Button variant="navy" className='rounded-[16px] px-[24px] py-[16px]'>GET STARTED</Button>
                <Button variant="outline" className='rounded-[16px]'>LOGIN</Button>
            </div>

            {/* Mobile Menu */}
            <div className='lg:hidden'>
                <Sheet>
                    <SheetTrigger asChild>
                        <button className="">
                            <Menu className="h-6 w-8" />
                        </button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px]">
                        <div className='flex pt-[13px] pl-10 items-center'>
                            <Image src="/logo.png" alt="logo" width={111} height={54} />
                        </div>
                        <div className="flex flex-col gap-6 mt-6 px-4">
                            <ul className='flex flex-col gap-4 P-14 text-black font-[500]'>
                                <li className='cursor-pointer'><a href="#">HOME</a></li>
                                <li className='cursor-pointer'><a href="#">ABOUT US</a></li>
                                <li className='cursor-pointer'><a href="#">COURSES</a></li>
                                <li className='cursor-pointer'><a href="#">FAQS</a></li>
                                <li className='cursor-pointer'><a href="#">TESTIMONIALS</a></li>
                                <li className='cursor-pointer'><a href="#">BLOGS</a></li>
                                <li className='cursor-pointer'><a href="#">RESOURCES</a></li>
                            </ul>
                            <div className='flex flex-col gap-4'>
                                <Button variant="navy" className='rounded-[16px] px-[24px] py-[16px] w-full'>GET STARTED</Button>
                                <Button variant="outline" className='rounded-[16px] w-full'>LOGIN</Button>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
