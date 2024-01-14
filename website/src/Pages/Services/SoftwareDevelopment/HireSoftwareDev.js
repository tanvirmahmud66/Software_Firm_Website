import React from 'react'
import { Link } from 'react-router-dom'
import HireDev from '../../../assets/Services/SoftwareDevelopment/HireDev.jpg'
import headset from '../../../assets/Services/SoftwareDevelopment/headset.png'
import appDev from '../../../assets/Services/SoftwareDevelopment/app-development.png'
import custom from '../../../assets/Services/SoftwareDevelopment/custom.png'

const HireSoftwareDev = () => {
  return (
    <div>
      <div>

        {/* hero section */}
        <div className='relative h-[60vh] bg-cover bg-center bg-fixed text-white' style={{backgroundImage:`url(${HireDev})`}}>
          <div className='absolute inset-0 bg-black opacity-75'></div>
          <div className='absolute pt-20 inset-0 text-white'>
              <div className='h-full container mx-auto flex justify-center items-center'>
                <div class='w-full px-4 sm:w-[80%] sm:px-0'>
                    <h1 class='mt-2 text-3xl sm:text-5xl md:text-6xl font-bold text-center'>Hire Software Developer</h1>
                </div>
              </div>
          </div>
        </div>

        
        {/* short intro */}
        <div className='container mx-auto min-h-[50vh] flex flex-col justify-center items-center p-4 lg:p-0'>
          <div className='text-center'>
            <h2 className='text-4xl font-bold mb-6'>Hire Software Developers</h2>
            <p className='text-lg text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>


        {/* our Hire software developer services */}
        <div className='min-h-screen bg-slate-100 py-10 lg:py-20'>
          <div className='container mx-auto min-h-screen flex flex-col justify-center items-center px-4 py-10 lg:px-0 lg:py-0'>
            <div className='mb-10 flex flex-col justify-center items-center'>
              <h2 className='text-4xl text-center font-bold mb-6'>Hire Software Developer Services</h2>
              <p className='text-md text-justify w-full lg:w-2/3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
              <div>
                <Link to="/contact" className="w-full flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className='h-[80px] w-[80px] mb-2 rounded-full bg-slate-200 text-white flex justify-center items-center'>
                    <img src={headset} width={50} alt='headset'/>
                  </div>
                  <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dedicated Resource Consulting</h5>
                  <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Link>
              </div>
              <div>
                <Link to="/contact" className="w-full flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className='h-[80px] w-[80px] mb-2 rounded-full bg-slate-200 text-white flex justify-center items-center'>
                    <img src={appDev} width={50} alt='headset'/>
                  </div>
                  <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">App Development</h5>
                  <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Link>
              </div>
              <div>
                <Link to="/contact" className="w-full flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className='h-[80px] w-[80px] mb-2 rounded-full bg-slate-200 text-white flex justify-center items-center'>
                    <img src={custom} width={50} alt='headset'/>
                  </div>
                  <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Custom Development</h5>
                  <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Link>
              </div>
              <div>
                <Link to="/contact" className="w-full flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className='h-[80px] w-[80px] mb-2 rounded-full bg-slate-200 text-white flex justify-center items-center'>
                    <img src={custom} width={50} alt='headset'/>
                  </div>
                  <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Maintenance & Testing</h5>
                  <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Link>
              </div>
            </div>
          </div>
        </div>


        {/* why choose Hire software developer services */}
        <div className='min-h-screen py-10 lg:py-20'>
          <div className='container mx-auto min-h-screen flex flex-col justify-center items-center px-4 py-10 lg:px-0 lg:py-0'>
            <div className='mb-10 flex flex-col justify-center items-center'>
              <h2 className='text-4xl text-center font-bold mb-6'>Why Choose Hire Software Developer Services</h2>
              <p className='text-md text-justify w-full lg:w-2/3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
              <div>
                <Link to="/contact" className="w-full flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Efficient & Cost-Effective Solutions</h5>
                  <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Link>
              </div>
              <div>
                <Link to="/contact" className="w-full flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Knowledgeable Professionals</h5>
                  <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Link>
              </div>
              <div>
                <Link to="/contact" className="w-full flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Secure Environment</h5>
                  <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Link>
              </div>
              <div>
                <Link to="/contact" className="w-full flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Catch Deadlines With Ease</h5>
                  <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Link>
              </div>
            </div>
          </div>
        </div>


        {/* Achieve your software developer goals */}
        <div className='min-h-screen bg-slate-100 py-10 lg:py-20'>
          <div className='container mx-auto min-h-screen flex flex-col justify-center items-center px-4 py-10 lg:px-0 lg:py-0'>
            <div className='mb-10 flex flex-col justify-center items-center'>
              <h2 className='text-4xl text-center font-bold mb-6'>Achieve Your Software Development Goals</h2>
              <p className='text-md text-justify w-full lg:w-2/3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
              <div>
                <Link to="/contact" className="w-full flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">The Best Software Developers</h5>
                  <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Link>
              </div>
              <div>
                <Link to="/contact" className="w-full flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Full Stack Solutions</h5>
                  <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Link>
              </div>
              <div>
                <Link to="/contact" className="w-full flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cost & Time Savings</h5>
                  <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Link>
              </div>
              <div>
                <Link to="/contact" className="w-full flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Flexible Hiring Agent Agreement</h5>
                  <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HireSoftwareDev