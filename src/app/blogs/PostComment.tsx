import { Button } from '@/components/ui/button'
import React from 'react'

const PostComment = () => {
  return (
    <div className='w-full max-w-[1440px] bg-gold mx-auto rounded-[60px] my-[30px] lg:my-[60px] px-2 md:px-4 xxl:px-0 transition-all duration-300'>
      <div className='flex flex-col md:flex-row gap-[20px] lg:gap-[40px] px-[20px] lg:px-[40px] py-[30px] lg:py-[60px]'>
        <div className='flex flex-col gap-[8px] md:gap-[16px] lg:gap-[24px] max-w-[660px] transition-all duration-300'>
            <h3 className='H-24 lg:H3-48-120 font-[500] transition-all duration-300'>Post Comment</h3>
            <p className='text-[10px] lg:P-16 font-[500] transition-all duration-300'>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
        </div>
        <div className='w-full max-w-[660px] transition-all duration-300'>
            <form className='flex flex-col gap-[16px]'>
                <input type="text" 
                placeholder='Enter your name' 
                className='w-full border border-black text-black rounded-[16px] p-[8px] lg:p-[12px] P-12 lg:P-14 font-[500] transition-all duration-300' />
                <input type="email" 
                placeholder='Enter your email' 
                className='w-full border border-black text-black rounded-[16px] p-[8px] lg:p-[12px] P-12 lg:P-14 font-[500] transition-all duration-300' />
                <textarea 
                placeholder='Comment'
                className='w-full h-[100px] border border-black text-black rounded-[16px] p-[8px] lg:p-[12px] P-12 lg:P-14 font-[500] transition-all duration-300'
                >
                </textarea>
                <Button variant='default' className='w-full bg-black text-white py-[8px] lg:py-[12px] px-[24px] P-12 lg:P-14 font-[500] rounded-[16px] transition-all duration-300'>SUBMIT</Button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default PostComment
