import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({title, backgroundImg, projectUrl}) => {
  return (
    <div>
         <div className="realative flex items-center justify-center h-auto w-full shadow shadow-blue-600 rounded-xl p-4 group hover:bg-gradient-to-r from-blue-600 to-red-900">
    <Image
      className="rounded-xl group-hover:opacity-10"
      src={backgroundImg}
      alt="/"
    />
    <div className="hidden group-hover:block absolute translate-x-[-50%] translate-y-[-50%] ">
      <h3 className="text-1xl text-blue-600 tracking-widest text-center">{title}</h3>
      <p className="text-2xl text-blue-600 tracking-widest"></p>
      <Link href={projectUrl}>
        <p className="text-center py-2 rounded-lg bg-blue-700 text-gray-900 font-bold text-md ">More Info</p>
      </Link>
    </div>
  </div>
    </div>
  )
}

export default ProjectItem
