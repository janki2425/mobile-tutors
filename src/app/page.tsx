import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-[1360px] mx-auto">
    <div className="w-full min-h-screen">
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0 bg-[url('/Hero/banner.jpg')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-black/[24%]"></div>
        <div className="absolute top-1/2 -translate-y-1/2 left-0 gap-4 md:gap-6 flex flex-col items-center md:items-start z-10">
          <div className="w-full px-4 md:px-8 lg:px-16">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[700] text-center md:text-left">Trusted by Parents. <br /> Proven by Results.</h1>
            <p className="text-white text-base md:text-lg lg:text-xl text-center md:text-left">Expert Tuition for KS3, GCSE & A-Level Success</p>
          </div>
          <div className="flex flex-col md:flex-row w-full px-4 md:px-8 lg:px-16 items-center justify-center md:justify-start gap-4 md:gap-6 z-10">
            <Button variant="default" className='w-full md:w-auto bg-gold text-black text-sm md:text-base rounded-[16px] px-6 py-3'>
              ENROLL NOW
            </Button>
            <Button variant="default" className='w-full md:w-auto bg-white text-black rounded-[16px] px-6 py-3'>
              <Image src="/footer-icon/star.svg" alt="star" width={23} height={22} />
              <p className='text-black text-sm md:text-base font-[500]'>Trustpilot</p>
            </Button>
          </div>
          <div className="flex w-full px-4 md:px-8 lg:px-16 items-center justify-center md:justify-start gap-6 z-10">
            <Image src={'/Hero/icons/left-arrow.svg'} width={40} height={24} alt="left" className="invert cursor-pointer"/>
            <Image src={'/Hero/icons/right-arrow.svg'} width={40} height={24} alt="right" className="invert cursor-pointer"/>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}