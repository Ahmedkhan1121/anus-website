import Image from 'next/image'
import React from 'react'
import { FaApple } from 'react-icons/fa'

function LastSection() {
  return (
    // parent div
    <div className='bg-[#F2F2F2] pt-[30px] px-[60px] '>
     
     
     <div className='flex justify-between bg-[#FF5349] rounded-t-2xl pl-[50px] pt-[30px]  '> {/*childtdiv*/}

      <div className='flex flex-col gap-7 pt-[65px]'> {/*1grandchildddiv*/}
        <h1 className='text-white text-5xl font-bold w-[580px]  '>Join the Fun – Download MyBindle Now!</h1>
        <p className='w-[250px] text-[14px] text-white'>Your Social Network, Your Way
           Download MyBindle Now and Be a Part of a Community That’s Always Evolving!</p>
           <div className='flex gap-3'> {/*button ka parent div ha*/}
            <button className='flex items-center justify-center gap-1 bg-white px-[18px] py-[4px] rounded-full'>{/*button ka child div ha*/}
              <FaApple className='text-4xl' />
              <div className='flex flex-col'>
                <p className='text-[10px] text-[#909090]'>DOWNLOAD ON THE</p>
                <h2 className='font-semibold text-[18px] flex justify-start'>App Store</h2>
                </div>
            </button>
            <button className='flex items-center justify-center gap-1 bg-white px-[18px] py-[4px] rounded-full'>{/*button ka child div ha*/}
              <Image 
              src={`/images/icon/google-play 1.png`}
              alt='google play'
              height={30}
              width={25}
              />
              <div className='flex flex-col'>
                <p className='text-[10px] text-[#909090] flex justify-start'>GET IT ON</p>
                <h2 className='font-semibold text-[18px]'>Google Play</h2>
                </div>
            </button>
            <div>{/*button ka child div ha*/}

            </div>
           </div>
      </div>

        <div className='flex gap-6 '>{/*2grandchilddiv*/}
          <div className='flex items-end '> {/*1grand grand childdiv*/}
            <Image
        src={`/images/Stroke Body (1).png`}
        alt='mobile'
        height={200}
        width={250}
        />
          </div>
       <div className='relative left-6'>{/*2grand grand childdiv*/}
          <Image
        src={`/images/Body (1).png`}
        alt='mobile'
        height={300}
        width={280}
        />
       </div>
        
        </div>
    </div>  

    </div>
  )
}

export default LastSection
