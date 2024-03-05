import React from 'react'
import HRMsolutions from '../../../assets/Solutions/ERPsolutions/hrmSolutions.jpg'
import DefaultError from '../../../Components/DefaultError'

const HRM = () => {
  return (
    <div>
      <div>

        {/* hero section */}
        <div className='relative h-[60vh] bg-cover bg-center bg-fixed text-white' style={{backgroundImage:`url(${HRMsolutions})`}}>
          <div className='absolute inset-0 bg-black opacity-75'></div>
          <div className='absolute pt-20 inset-0 text-white'>
              <div className='h-full container mx-auto flex justify-center items-center'>
                <div class='w-full px-4 sm:w-[80%] sm:px-0'>
                    <h1 class='mt-2 text-3xl sm:text-5xl md:text-6xl font-bold text-center'>HRM Solutions</h1>
                </div>
              </div>
          </div>
        </div>
        <DefaultError/>
      </div>
    </div>
  )
}

export default HRM