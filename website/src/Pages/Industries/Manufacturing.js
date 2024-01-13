import React from 'react'
import manufacturingImg from '../../assets/Industries/manufacturing.jpg'

const Manufacturing = () => {
  return (
    <div>
      <div>

        {/* hero section */}
        <div className='relative h-[60vh] bg-cover bg-center bg-fixed text-white' style={{backgroundImage:`url(${manufacturingImg})`}}>
          <div className='absolute inset-0 bg-black opacity-75'></div>
          <div className='absolute pt-20 inset-0 text-white'>
              <div className='h-full container mx-auto flex justify-center items-center'>
                <div class='w-full px-4 sm:w-[80%] sm:px-0'>
                    <h1 class='mt-2 text-3xl sm:text-5xl md:text-6xl font-bold text-center'>Manufacturing</h1>
                </div>
              </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Manufacturing