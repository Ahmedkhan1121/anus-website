import Image from 'next/image'
import React from 'react'

function LastSection() {
  return (
    // parent div
    <div className='bg-[#F2F2F2] pt-[30px] px-[60px]'>
     
     
     <div className='flex justify-between bg-[#FF5349] rounded-t-2xl px-[50px] pt-[60px] '>
        <h1 className='text-white text-3xl font-bold w-[360px]  '>Join the Fun – Download MyBindle Now!</h1>
        <Image
        src={`/images/Body.png`}
        alt='mobile'
        height={200}
        width={200}
        />
        

    </div>  

    </div>
  )
}

export default LastSection
