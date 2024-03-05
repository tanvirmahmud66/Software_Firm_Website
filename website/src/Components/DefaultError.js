import React from 'react'
import DefaultErrorImg from '../assets/DefaultError.gif'

const DefaultError = () => {
  return (
    // <div className='min-h-[70vh] bg-slate-100 py-10 lg:py-20'>
    //     <div className='container mx-auto min-h-[70vh] flex flex-col justify-center items-center px-4 py-10 lg:px-0 lg:py-0'>
    //         <img src={DefaultErrorImg} width={300} alt='default error page'/>
    //         <h3 className='text-7xl font-bold text-green-500'>This webpage is under development...</h3>
    //     </div>
    // </div>

    <div class="bg-gray-100">
        <div class="min-h-[60vh] flex flex-col justify-center items-center">
            <h1 class="text-8xl font-bold text-gray-300">404</h1>
            <p class="text-4xl font-medium text-gray-400">This page is under development.. </p>
            <a href="/" class="mt-4 text-xl text-blue-600 hover:underline">Go back home</a>
        </div>
    </div>
  )
}

export default DefaultError