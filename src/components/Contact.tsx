import Image from 'next/image'
import { Button } from './ui/button'

const Contact = () => {
  return (
    <div className='max-w-[1360px] mx-auto my-8 sm:my-12 md:my-16 lg:my-[60px]'>
      <div className='flex flex-col lg:flex-row items-center lg:items-end'>
        {/* Image Section - Responsive height and width */} 
        <div className='relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[599px] lg:max-w-[760px]'>
          <Image
            src='/contact-us/contact-img.jpg'
            alt='contact'
            fill
            className='rounded-t-[30px] sm:rounded-t-[40px] md:rounded-t-[50px] lg:rounded-t-none lg:rounded-l-[150px] lg:rounded-tr-[150px] object-cover'
          />
        </div>
        
        <div className='flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-[24px] p-6 sm:p-8 md:p-10 lg:p-[40px] w-full lg:max-w-[600px] bg-gold 
                      rounded-b-[50px] sm:rounded-b-[75px] md:rounded-b-[100px] 
                      lg:rounded-b-[100px] lg:rounded-bl-none lg:rounded-r-[100px] lg:rounded-tl-[100px]'>
          <div className='flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[24px] max-w-full lg:max-w-[520px]'>
            <h3 className='H3-48-120 font-[500]'>
              Contact us to get tailored advice
            </h3>
            <p className='text-[16px] font-[500]'>
              Get personalised help and all the information you need. Learn how MyEdSpace can help your child!
            </p>
          </div>
          <div className='w-full'>
            <form className='flex flex-col gap-[16px] w-full'>
              <input
                type='text'
                className='w-full bg-transparent border border-black rounded-[12px] lg:rounded-[16px] P-14 font-[500] p-[12px] text-black placeholder:text-black/70'
                placeholder='Enter your name'
              />
              <input
                type='email'
                className='w-full bg-transparent border border-black rounded-[12px] lg:rounded-[16px] P-14 font-[500] p-[12px] text-black placeholder:text-black/70'
                placeholder='Enter your email'
              />
              <input
                type='tel'
                className='w-full bg-transparent border border-black rounded-[12px] lg:rounded-[16px] P-14 font-[500] p-[12px] text-black placeholder:text-black/70'
                placeholder='Enter your number'
              />
              <Button
                variant='default'
                className='bg-black text-white rounded-[16px] P-14 font-[500] py-[12px] px-[24px]'
              >
                SUBMIT
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact