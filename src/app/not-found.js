import Image from 'next/image'
import React from 'react'

const NotFound = () => {
  return (
    <div className='notFound'>
    <div className='notFoundImgContainer'>
      <Image
        src="/404.png"
        fill
        alt=""
        className='notFoundImg'
      />
    </div>
      <div className='notFoundHomepage'>
        HomePage
      </div>
    </div>
  )
}

export default NotFound
