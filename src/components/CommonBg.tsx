import React from 'react'
import { usePathname } from 'next/navigation'

const pathTitles: { [key: string]: { title: string; subtitle: string } } = {
  '/faqs': {
    title: 'FAQs',
    subtitle: 'Home - FAQs',
  },
  '/about': {
    title: 'ABOUT US',
    subtitle: 'Home - About Us',
  },
  '/testimonials': {
    title: 'TESTIMONIALS',
    subtitle: 'Home - Testimonials',
  },
  '/blogs': {
    title: 'BLOGS',
    subtitle: 'Home - Blogs',
  },
  '/blogs/[id]': {
    title: 'BLOGS',
    subtitle: 'Home - Blogs',
  },
  '/courses':{
    title: 'COURSES',
    subtitle: 'Home - Courses',
  },
  '/courses/[id]':{
    title: 'COURSES',
    subtitle: 'Home - Courses',
  }
}

const CommonBg = () => {
  const pathname = usePathname();

  let titleObj = { title: 'Welcome', subtitle: '' };
  if (pathname === '/faqs') titleObj = pathTitles['/faqs'];
  else if (pathname === '/about') titleObj = pathTitles['/about'];
  else if (pathname === '/testimonials') titleObj = pathTitles['/testimonials'];
  else if (pathname === '/blogs') titleObj = pathTitles['/blogs'];
  else if (pathname.startsWith('/blogs/')) titleObj = pathTitles['/blogs/[id]'];
  else if (pathname === '/courses') titleObj = pathTitles['/courses'];
  else if (pathname.startsWith('/courses/')) titleObj = pathTitles['/courses/[id]'];

  return (
    <div className="relative w-full h-[400px]">
      {/* Background image and overlay */}
      <div className="absolute inset-0 bg-[url('/Hero/banner.jpg')] bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 bg-black/[24%]" />
      {/* Centered text */}
      <div className="absolute flex flex-col gap-[8px] lg:gap-[16px] top-[180px] left-[20px] md:left-[60px] z-10 h-full transition-all duration-300">
        <h1 className="text-white text-[32px] md:H1-64-120 font-[700] drop-shadow-lg">{titleObj.title}</h1>
        <p className="text-white P-14 lg:P-18 font-[500] drop-shadow-lg">{titleObj.subtitle}</p>
      </div>
    </div>
  );
};

export default CommonBg
