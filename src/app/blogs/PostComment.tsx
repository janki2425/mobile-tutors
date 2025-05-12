import { Button } from '@/components/ui/button'
import React from 'react'

const PostComment = () => {
  return (
    <div className='w-full max-w-[1440px] bg-gold mx-auto rounded-[60px] my-[60px]'>
      <div className='flex flex-col md:flex-row gap-[40px] px-[40px] py-[60px]'>
        <div className='flex flex-col gap-[24px] max-w-[660px]'>
            <h3 className='H3-48 font-[500]'>Post Comment</h3>
            <p className='P-16 font-[500]'>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
        </div>
        <div className='w-full max-w-[660px]'>
            <form className='flex flex-col gap-[16px]'>
                <input type="text" 
                placeholder='Enter your name' 
                className='w-full border border-black text-black rounded-[16px] p-[12px] P-14 font-[500]' />
                <input type="email" 
                placeholder='Enter your email' 
                className='w-full border border-black text-black rounded-[16px] p-[12px] P-14 font-[500]' />
                <textarea 
                placeholder='Comment'
                className='w-full h-[100px] border border-black text-black rounded-[16px] p-[12px] P-14 font-[500]'
                >
                </textarea>
                <Button variant='default' className='w-full bg-black text-white py-[12px] px-[24px] P-14 rounded-[16px]'>Submit</Button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default PostComment
