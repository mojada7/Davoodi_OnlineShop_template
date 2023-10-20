import React from 'react'
import InstaSlideShowItem from './instaSlideShowIteme'

function InstaSlideShow() {
  return (
    <div className='w-[100%] bg-gray-400 h-[7rem] flex items-center px-2 gap-3'>
      <InstaSlideShowItem />
      <InstaSlideShowItem />
      <InstaSlideShowItem />
      <InstaSlideShowItem />
    </div>
  )
}

export default InstaSlideShow