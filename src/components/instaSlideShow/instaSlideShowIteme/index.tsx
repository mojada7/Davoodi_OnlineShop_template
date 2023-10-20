import im from '../../../../public/im1.webp'
import ls from '../../../../public/loadingspinner.png'
import Image from 'next/image'
import React from 'react'

function InstaSlideShowItem() {
  return (
    <div className='w-[6rem] h-[6rem] bg-white rounded-full border-[3px] border-pink-500'>
      <div className='absolute w-[5.9rem] h-[5.9rem]'>
      <Image className='animate-spin' alt='' fill src={ls} />
      </div>
      <div className='w-[90%] h-[90%] rounded-full bg-sky-200 relative border-[1px] border-gray-200 mx-auto my-[5%] overflow-hidden'>
        <Image fill alt='' src={im} />
      </div>
    </div>
  )
}

export default InstaSlideShowItem