import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {  Menu } from "lucide-react"
import Link from 'next/link'

const navItems = [
    {
        id: 1,
        name: 'HOME',
        href: '/',
        active: true
    },
    {
        id: 2,
        name: 'ABOUT US',
        href: '#',
        active: false
    },
    {
        id: 3,
        name: 'COURSES',
        href: '/#courses',
        active: false
    },
    {
        id: 4,
        name: 'FAQS',
        href: '/faqs',
        active: false
    },
    {
        id: 5,
        name: 'TESTIMONIALS',
        href: '/testimonials',
        active: false
    },
    {
        id: 6,
        name: 'BLOGS',
        href: '/blogs',
        active: false
    },
    {
        id: 7,
        name: 'RESOURCES',
        href: '#',
        active: false
    },
    
]   

const Navbar = () => {
    const [items, setItems] = useState(navItems)

    const handleActive = (id: number) => {
        setItems(items.map(item => ({
            ...item,
            active: item.id === id
        })))
    }

  return (
    <>
      <div className='px-[40px] h-[80px] border-b border-gray-400 flex items-center relative z-20'>
        <nav className='flex justify-between items-center w-full'>
            <div className='flex gap-4 items-center'>
                <Image src="/logo.png" alt="logo" width={111} height={54} />
            </div>
            
            {/* Desktop Navigation */}
            <div className='hidden cs:block'>
                <ul className='flex gap-[8px] items-center P-14 text-black font-[600]'>
                    {items.map((item) => (
                        <li key={item.id} 
                        onClick={() => handleActive(item.id)}
                        className={`px-[24px] py-[6px] rounded-[100px] cursor-pointer ${item.active ? 'border-[1px] border-black' : ''}`}>
                            <Link href={item.href} >{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Desktop Buttons */}
            <div className='hidden cs:flex gap-[16px] items-center P-14 text-black font-[500]'>
                <Button variant="navy" className='rounded-[16px] px-[24px] py-[16px]'>GET STARTED</Button>
                <Button variant="outline" className='rounded-[16px]'>LOGIN</Button>
            </div>

            {/* Mobile Menu */}
            <div className='cs:hidden flex'>
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
                            {items.map((item) => (
                                <li key={item.id} 
                                onClick={() => handleActive(item.id)}
                                className={`px-[24px] py-[6px] rounded-[100px] cursor-pointer ${item.active ? 'border-[1px] border-black' : ''}`}>
                                    <Link href={item.href} >{item.name}</Link>
                                </li>
                            ))}
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
