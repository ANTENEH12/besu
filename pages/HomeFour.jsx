import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import WImage from '../public/Besufikad Images/WImage.jpeg'

function HomeFour() {
  return (
    <div className='w-full'>
        <div className='w-screen h-[50vh] relative'>
      <div className=' col-span-4 md:col-span-1 shadow-xl shadow-red-600 rounded-xl  py-4 absolute top-0 left-0 w-full h-[50vh] bg- z-10' />
      <Image
        className='absolute z-1'
        layout='fill'
        objectFit='contain'
        src={WImage}
        alt='/'
      />
     
    </div>
    </div>
  )
}

export default HomeFour