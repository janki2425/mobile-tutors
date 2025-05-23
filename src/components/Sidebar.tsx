'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Button } from "@/components/ui/button"

export const navItems = [
    {
        id: 1,
        name: 'HOME',
        href: '/',
        active: true
    },
    {
        id: 2,
        name: 'ABOUT US',
        href: '/about',
        active: false
    },
    {
        id: 3,
        name: 'COURSES',
        href: '/courses',
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

export default function Sidebar() {
  const [sheetOpen, setSheetOpen] = useState(false)
  const [activeItem, setActiveItem] = useState(1)

  const handleActive = (id: number) => {
    setActiveItem(id)
  }

  const handleEnrollNow = () => {
    // Handle enroll action here
    setSheetOpen(false)
  }

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild>
        <button>
          <Menu className="h-6 w-8" />
        </button>
      </SheetTrigger>

      <SheetContent side="left" className="w-[300px]">
        <div className="flex pt-[13px] pl-10 items-center transition-all duration-500 ease-in-out">
          <Image src="/logo.png" alt="logo" width={111} height={54} />
        </div>

        <div className="flex flex-col gap-6 mt-6 px-4 h-[calc(100vh-100px)] pb-[20px] overflow-y-auto scrollbar-hide transition-all duration-500 ease-in-out [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <ul className="flex flex-col gap-4 text-black font-[500]">
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  handleActive(item.id)
                  setSheetOpen(false)
                }}
                className="w-full cursor-pointer transition-all duration-500 ease-in-out"
              >
                <Link
                  href={item.href}
                  className={`block w-full px-[24px] py-[6px] rounded-[50px] text-black font-[600] transition-all duration-500 ease-in-out ${
                    activeItem === item.id ? "border-[1px] border-black" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 mt-6">
            <Button
              onClick={handleEnrollNow}
              variant="default"
              className="bg-navy-blue text-white rounded-[16px] px-[24px] py-[16px] w-full transition-all duration-500 ease-in-out hover:bg-navy-blue/90"
            >
              GET STARTED
            </Button>
            <Button
              variant="outline"
              className="rounded-[16px] px-[24px] py-[16px] w-full transition-all duration-500 ease-in-out hover:bg-gray-100"
            >
              LOGIN
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}