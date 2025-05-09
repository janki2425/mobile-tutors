import React from 'react'
import { usePathname } from 'next/navigation'

const pathTitles: { [key: string]: { title: string; subtitle: string } } = {
  '/faqs': {
    title: 'FAQs',
    subtitle: 'Home - FAQs',
  },
  '/testimonials': {
    title: 'TESTIMONIALS',
    subtitle: 'Home - Testimonials',
  },
  '/blogs': {
    title: 'BLOGS',
    subtitle: 'Home - Blogs',
  },
}

const CommonBg = () => {
  const pathname = usePathname();
  const title = pathTitles[pathname] || 'Welcome';

  return (
    <div className="relative w-full h-[400px]">
      {/* Background image and overlay */}
      <div className="absolute inset-0 bg-[url('/Hero/banner.jpg')] bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 bg-black/[24%]" />
      {/* Centered text */}
      <div className="absolute flex flex-col gap-[16px] top-[180px] left-[60px] z-10 h-full">
        <h1 className="text-white H1-64 font-[700] drop-shadow-lg py-1">{title.title}</h1>
        <p className="text-white P-18 font-[500] drop-shadow-lg">{title.subtitle}</p>
      </div>
    </div>
  );
};

export default CommonBg
