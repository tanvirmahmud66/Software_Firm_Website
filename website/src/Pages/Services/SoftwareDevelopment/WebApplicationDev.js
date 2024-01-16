import React from 'react'
import { Link } from 'react-router-dom'
import webApp from '../../../assets/Services/SoftwareDevelopment/webApp.jpg'
import custom2 from '../../../assets/Services/SoftwareDevelopment/custom2.png'
import webDev from '../../../assets/Services/SoftwareDevelopment/web-development.png'
import people from '../../../assets/Services/SoftwareDevelopment/people.png'
import network from '../../../assets/Services/SoftwareDevelopment/network.png'
import consult from '../../../assets/Services/SoftwareDevelopment/analysis.png'
import thirdParty from '../../../assets/Services/SoftwareDevelopment/hand-shake.png'
import productDev from '../../../assets/Services/SoftwareDevelopment/productDevelopment.png'
import api from '../../../assets/Services/SoftwareDevelopment/api.png'
import migration from '../../../assets/Services/SoftwareDevelopment/migration.png'
import education from '../../../assets/Services/SoftwareDevelopment/education.gif'
import travel from '../../../assets/Services/SoftwareDevelopment/travel.gif'
import finance from '../../../assets/Services/SoftwareDevelopment/finance.gif'
import healthcare from '../../../assets/Services/SoftwareDevelopment/healthcare.gif'
import retails from '../../../assets/Services/SoftwareDevelopment/retails.gif'
import entertainment from '../../../assets/Services/SoftwareDevelopment/entertainment.gif'



const WebApplicationDev = () => {
  return (
    <div>
      <div>

        {/* hero section */}
        <div className='relative h-[60vh] bg-cover bg-center bg-fixed text-white' style={{backgroundImage:`url(${webApp})`}}>
          <div className='absolute inset-0 bg-black opacity-75'></div>
          <div className='absolute pt-20 inset-0 text-white'>
              <div className='h-full container mx-auto flex justify-center items-center'>
                <div class='w-full px-4 sm:w-[80%] sm:px-0'>
                    <h1 class='mt-2 text-3xl sm:text-5xl md:text-6xl font-bold text-center'>Web Application Development</h1>
                </div>
              </div>
          </div>
        </div>


        {/* short intro */}
        <div className='container mx-auto min-h-[50vh] flex flex-col justify-center items-center p-4 lg:p-0'>
          <div className='text-center'>
            <h2 className='text-4xl font-bold mb-6'>Web Application Development</h2>
            <p className='text-lg text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>


        {/* our Full Stack Web Applicatoin Development services */}
        <div className='min-h-screen bg-slate-100 py-10 lg:py-20'>
          <div className='container mx-auto min-h-screen flex flex-col justify-center items-center px-4 py-10 lg:px-0 lg:py-0'>
            <div className='mb-10 flex flex-col justify-center items-center'>
              <h2 className='text-4xl text-center font-bold mb-6'>Out Full Stack Web Application Services</h2>
              <p className='text-md text-justify w-full lg:w-2/3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              <div>
                <Link to="/contact" className="w-full h-full flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className='h-[80px] w-[80px] mb-2 rounded-full bg-slate-200 text-white flex justify-center items-center'>
                    <img src={custom2} width={50} alt='headset'/>
                  </div>
                  <h5 className="mb-4 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Custom Web Application Development</h5>
                  <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
                </Link>
              </div>
              <div>
                <Link to="/contact" className="w-full h-full flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className='h-[80px] w-[80px] mb-2 rounded-full bg-slate-200 text-white flex justify-center items-center'>
                    <img src={webDev} width={50} alt='headset'/>
                  </div>
                  <h5 className="mb-4 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Progressive Web App Development</h5>
                  <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
                </Link>
              </div>
              <div>
                <Link to="/contact" className="w-full h-full flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className='h-[80px] w-[80px] mb-2 rounded-full bg-slate-200 text-white flex justify-center items-center'>
                    <img src={people} width={50} alt='headset'/>
                  </div>
                  <h5 className="mb-4 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Hire Web Development Team</h5>
                  <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
                </Link>
              </div>
              <div>
                <Link to="/contact" className="w-full h-full flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className='h-[80px] w-[80px] mb-2 rounded-full bg-slate-200 text-white flex justify-center items-center'>
                    <img src={network} width={50} alt='headset'/>
                  </div>
                  <h5 className="mb-4 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Prototyping & UXD</h5>
                  <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
                </Link>
              </div>
              <div>
                <Link to="/contact" className="w-full h-full flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className='h-[80px] w-[80px] mb-2 rounded-full bg-slate-200 text-white flex justify-center items-center'>
                    <img src={consult} width={50} alt='headset'/>
                  </div>
                  <h5 className="mb-4 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Consulting & Business Analysis</h5>
                  <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
                </Link>
              </div>
              <div>
                <Link to="/contact" className="w-full h-full flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className='h-[80px] w-[80px] mb-2 rounded-full bg-slate-200 text-white flex justify-center items-center'>
                    <img src={thirdParty} width={50} alt='headset'/>
                  </div>
                  <h5 className="mb-4 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Third Party Integration & Customization</h5>
                  <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
                </Link>
              </div>
              <div>
                <Link to="/contact" className="w-full h-full flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className='h-[80px] w-[80px] mb-2 rounded-full bg-slate-200 text-white flex justify-center items-center'>
                    <img src={productDev} width={50} alt='headset'/>
                  </div>
                  <h5 className="mb-4 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Software Product Development</h5>
                  <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
                </Link>
              </div>
              <div>
                <Link to="/contact" className="w-full h-full flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className='h-[80px] w-[80px] mb-2 rounded-full bg-slate-200 text-white flex justify-center items-center'>
                    <img src={api} width={50} alt='headset'/>
                  </div>
                  <h5 className="mb-4 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">API Development Services</h5>
                  <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
                </Link>
              </div>
              <div>
                <Link to="/contact" className="w-full h-full flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className='h-[80px] w-[80px] mb-2 rounded-full bg-slate-200 text-white flex justify-center items-center'>
                    <img src={migration} width={50} alt='headset'/>
                  </div>
                  <h5 className="mb-4 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Upgradation & Migration</h5>
                  <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
                </Link>
              </div>

            </div>
          </div>
        </div>


        {/* Dedicated application development team */}
        <div className='min-h-[80vh] lg:py-10'>
          <div className='container mx-auto min-h-[80vh] flex flex-col justify-around items-center px-4 py-10 lg:px-0 lg:py-0'>
            <div className='mb-10 flex flex-col justify-center items-center'>
              <h2 className='text-4xl text-center font-bold mb-6'>Get <span className='text-red-400'>AWA Software House's</span> Dedicated App Development Team</h2>
              <p className='text-md text-justify w-full lg:w-2/3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div className='w-full h-full flex flex-col justify-center items-center p-6 bg-slate-100 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
              <h3 className='text-xl font-bold mb-5'>Expertise & Skill</h3>
              <p className='text-md text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate </p>
              <div className='mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5 w-full'>
                <div className='w-full'>
                  <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                      <li class="flex items-center">
                          <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                          </svg>
                          At least 10 characters At least 10 characters
                      </li>
                      <li class="flex items-center">
                          <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                          </svg>
                          At least one lowercase character At least 10 characters
                      </li>
                      <li class="flex items-center">
                          <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                          </svg>
                          At least 10 characters At least 10 characters
                      </li>
                      <li class="flex items-center">
                          <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                          </svg>
                          At least one lowercase character At least 10 characters
                      </li>
                      <li class="flex items-center">
                          <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                          </svg>
                          At least 10 characters At least 10 characters
                      </li>
                      <li class="flex items-center">
                          <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                          </svg>
                          At least one lowercase character At least 10 characters
                      </li>
                  </ul>
                </div>
                <div className='w-full'>
                  <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                      <li class="flex items-center">
                          <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                          </svg>
                          At least 10 characters At least 10 characters
                      </li>
                      <li class="flex items-center">
                          <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                          </svg>
                          At least one lowercase character At least 10 characters
                      </li>
                      <li class="flex items-center">
                          <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                          </svg>
                          At least 10 characters At least 10 characters
                      </li>
                      <li class="flex items-center">
                          <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                          </svg>
                          At least one lowercase character At least 10 characters
                      </li>
                      <li class="flex items-center">
                          <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                          </svg>
                          At least 10 characters At least 10 characters
                      </li>
                      <li class="flex items-center">
                          <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                          </svg>
                          At least one lowercase character At least 10 characters
                      </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack app development */}
        <div className='min-h-[60vh] bg-slate-100 lg:py-20'>
          <div className='container mx-auto min-h-full flex flex-col justify-around items-center px-4 py-10 lg:px-0 lg:py-0'>
            <div className='mb-10 flex flex-col justify-center items-center'>
              <h2 className='text-4xl text-center font-bold mb-6'>Technology Stack App Development</h2>
              <p className='text-md text-justify w-full lg:w-2/3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 w-full'>
              <div className='w-full h-full flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
                <h2 className='text-xl font-bold mb-5'>Core Technologies & Frameworks</h2>
                <div className='grid grid-cols-2 w-full'>
                  <ul className='max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400'>
                      <li class="flex items-center">
                          <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                          </svg>
                          PHP & Framework
                      </li>
                      <li class="flex items-center">
                          <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                          </svg>
                          Ruby on Rails
                      </li>
                      <li class="flex items-center">
                          <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                          </svg>
                          Python Django
                      </li>
                      <li class="flex items-center">
                          <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                          </svg>
                          Java
                      </li>
                      <li class="flex items-center">
                          <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                          </svg>
                          Magento
                      </li>
                  </ul>
                  <ul className='max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400'>
                      <li class="flex items-center">
                          <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                          </svg>
                          Opencart
                      </li>
                      <li class="flex items-center">
                          <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                          </svg>
                          Shopify
                      </li>
                      <li class="flex items-center">
                          <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                          </svg>
                          Wordpress
                      </li>
                      <li class="flex items-center">
                          <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                          </svg>
                          Drupal
                      </li>
                  </ul>
                </div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-5 w-full'>
                <div className='w-full h-full flex flex-col justify-start items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
                    <h2 className='text-xl font-bold mb-5'>Microsoft Technologies</h2>
                    <ul className='max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400'>
                      <li class="flex items-center">
                          <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                          </svg>
                          Sharepoint
                      </li>
                      <li class="flex items-center">
                          <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                          </svg>
                          ASP.Net
                      </li>
                    </ul>
                </div>
                <div className='w-full h-full flex flex-col justify-start items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
                    <h2 className='text-xl font-bold mb-5'>Javascript Development</h2>
                    <ul className='max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400'>
                      <li class="flex items-center">
                          <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                          </svg>
                          Angular Js
                      </li>
                      <li class="flex items-center">
                          <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                          </svg>
                          Node Js
                      </li>
                      <li class="flex items-center">
                          <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                          </svg>
                          React Js
                      </li>
                      <li class="flex items-center">
                          <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                          </svg>
                          Vue Js
                      </li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our web app domain expertise */}
        <div className='min-h-screen lg:py-20'>
          <div className='container mx-auto min-h-full flex flex-col justify-around items-center px-4 py-10 lg:px-0 lg:py-0'>
            <div className='mb-10 flex flex-col justify-center items-center'>
              <h2 className='text-4xl text-center font-bold mb-6'>Our App Development Domain Expertise</h2>
              <p className='text-md text-justify w-full lg:w-2/3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              <div>
                <Link to="/contact" className="w-full h-full flex flex-col justify-center items-center p-6 bg-slate-100 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className='h-[80px] w-[80px] mb-2 rounded-full bg-slate-200 text-white flex justify-center items-center'>
                    <img src={education} width={50} alt='headset'/>
                  </div>
                  <h5 className="mb-4 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Education</h5>
                  <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
                </Link>
              </div>
              <div>
                <Link to="/contact" className="w-full h-full flex flex-col justify-center items-center p-6 bg-slate-100 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className='h-[80px] w-[80px] mb-2 rounded-full bg-slate-200 text-white flex justify-center items-center'>
                    <img src={travel} width={50} alt='headset'/>
                  </div>
                  <h5 className="mb-4 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Tourism</h5>
                  <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
                </Link>
              </div>
              <div>
                <Link to="/contact" className="w-full h-full flex flex-col justify-center items-center p-6 bg-slate-100 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className='h-[80px] w-[80px] mb-2 rounded-full bg-slate-200 text-white flex justify-center items-center'>
                    <img src={finance} width={50} alt='headset'/>
                  </div>
                  <h5 className="mb-4 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Finance</h5>
                  <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
                </Link>
              </div>
              <div>
                <Link to="/contact" className="w-full h-full flex flex-col justify-center items-center p-6 bg-slate-100 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className='h-[80px] w-[80px] mb-2 rounded-full bg-slate-200 text-white flex justify-center items-center'>
                    <img src={healthcare} width={50} alt='headset'/>
                  </div>
                  <h5 className="mb-4 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Healthcare</h5>
                  <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
                </Link>
              </div>
              <div>
                <Link to="/contact" className="w-full h-full flex flex-col justify-center items-center p-6 bg-slate-100 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className='h-[80px] w-[80px] mb-2 rounded-full bg-slate-200 text-white flex justify-center items-center'>
                    <img src={retails} width={50} alt='headset'/>
                  </div>
                  <h5 className="mb-4 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Retail</h5>
                  <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
                </Link>
              </div>
              <div>
                <Link to="/contact" className="w-full h-full flex flex-col justify-center items-center p-6 bg-slate-100 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className='h-[80px] w-[80px] mb-2 rounded-full bg-slate-200 text-white flex justify-center items-center'>
                    <img src={entertainment} width={50} alt='headset'/>
                  </div>
                  <h5 className="mb-4 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Entertainment</h5>
                  <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
                </Link>
              </div>

            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default WebApplicationDev