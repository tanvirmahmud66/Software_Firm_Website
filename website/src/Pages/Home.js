import React from 'react'
import backgroundImg from '../assets/Home/TeamWork.jpg'
import HealthCare from '../assets/Home/HealthCare.jpg'
import Fintech from '../assets/Home/Fintech.jpg'
import Logistics from '../assets/Home/Logistics.jpg'
import RealState from '../assets/Home/Real_state.jpg'
import Manufacturing from '../assets/Home/Manufacturing.jpg'
import Travel from '../assets/Home/Travel.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div>

        {/* hero */}
        <div className='relative h-[80vh] bg-cover bg-center text-white' style={{backgroundImage:`url(${backgroundImg})`}}>
          <div className='absolute inset-0 bg-black opacity-65'></div>
          <div className='absolute pt-20 inset-0 text-white'>
              <div className='h-full container mx-auto flex justify-center items-center'>
                <div class='w-full px-4 sm:w-[80%] sm:px-0'>
                    <h3 class='text-xl sm:text-2xl md:text-3xl font-semibold'>Welcome To</h3>
                    <h1 class='mt-2 text-3xl sm:text-5xl md:text-6xl font-bold'>AWA Software House</h1>
                    <p class='mt-4 text-base sm:text-lg'>
                        We transform ideas into digital realities. At AWA, we specialize in crafting innovative software solutions tailored to your unique needs. Our team of seasoned experts brings a wealth of experience, ensuring that every project is a testament to excellence. With a global perspective and a local touch, we are committed to collaborative partnerships that drive success. Join us on a journey of innovation and let's build the future together.
                    </p>
                    <button type="button" class="mt-7 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm sm:text-base px-4 sm:px-5 py-2 sm:py-2.5 text-center">Get Started</button>
                </div>
              </div>
          </div>
        </div>

        {/* our values */}
        <div className='container mx-auto min-h-[60vh] flex flex-col justify-center items-center p-4 lg:p-0'>
          <div className='text-center mb-10 lg:mb-20'>
            <h2 className='text-5xl font-bold mb-4'>Our Values</h2>
            <p className='text-md'>Software development services that will drive digital transformation</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
              <div class="mb-4 flex flex-col justify-around items-center">
                <div className='flex flex-col justify-center items-center'>
                  <div className='h-[50px] w-[50px] rounded-full flex justify-center items-center text-white bg-green-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <div className='text-xl font-semibold mt-2'>Fast Response</div>
                </div>
                <div className='text-sm mt-5'>We will contact with you within 24 hours after the request</div>
              </div>
              <div class="mb-4 flex flex-col justify-around items-center">
                <div className='flex flex-col justify-center items-center'>
                  <div className='h-[50px] w-[50px] rounded-full flex justify-center items-center text-white bg-green-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                    </svg>
                  </div>
                  <div className='text-xl font-semibold mt-2'>Dedicated Team</div>
                </div>
                <div className='text-sm mt-5'>Dedicated development teams of any size with latest technologies</div>
              </div>
              <div class="mb-4 flex flex-col justify-around items-center">
                <div className='flex flex-col justify-center items-center'>
                  <div className='h-[50px] w-[50px] rounded-full flex justify-center items-center text-white bg-green-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                    </svg>
                  </div>
                  <div className='text-xl font-semibold mt-2'>Safe and Secure</div>
                </div>
                <div className='text-sm mt-5'>We take product security seriously. Must attach NDA to your message</div>
              </div>
              <div class="mb-4 flex flex-col justify-around items-center">
                <div className='flex flex-col justify-center items-center'>
                  <div className='h-[50px] w-[50px] rounded-full flex justify-center items-center text-white bg-green-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
                    </svg>
                  </div>
                  <div className='text-xl font-semibold mt-2'>Transparency</div>
                </div>
                <div className='text-sm mt-5'>Customer and great talent want to work with transparent company</div>
              </div>
          </div>
        </div>

        {/* our services */}
        <div className='min-h-screen bg-slate-100'>
          <div className='container mx-auto min-h-screen flex flex-col justify-center items-center px-4 py-10 lg:px-0 lg:py-0'>
            <div className='mb-10'>
              <h2 className='text-5xl text-center font-bold mb-4'>Our Services</h2>
              <p className='text-md text-justify'>Discover the pinnacle of technological solutions with our comprehensive array of services at AWA Software House. From bespoke software development and cutting-edge enterprise software to the seamless creation of mobile apps, our expertise extends to ERP solutions, cloud computing, eCommerce platforms, and product development. Unleash the power of innovation with our adept software integrations, ensuring your systems work seamlessly together. Our commitment doesn't end with deployment – we offer top-notch maintenance and testing services, providing enduring reliability. With a multifaceted approach, we align your IT infrastructure with strategic business initiatives, accelerating the implementation of new projects and positioning you miles ahead of the competition. AWA Software House: Where Technology Meets Transformation.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <Link to="/contact" className="w-full flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className='h-[50px] w-[50px] mb-2 rounded-full bg-green-500 text-white flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                    </svg>
                  </div>
                  <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cloud Computing Services</h5>
                  <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Build reliable enterprise software for the business to become a market leader.</p>
                </Link>
              </div>
              <div>
                <Link to="#" className="w-full flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className='h-[50px] w-[50px] mb-2 rounded-full bg-green-500 text-white flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </div>
                  <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Web Development</h5>
                  <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Build Web Application with advanced machine learning & artificial intelligence.</p>
                </Link>
              </div>
              <div>
                <Link to="#" className="w-full flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className='h-[50px] w-[50px] mb-2 rounded-full bg-green-500 text-white flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                  </div>
                  <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ecommerce Solutions</h5>
                  <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Build reliable enterprise software for the business to become a market leader.</p>
                </Link>
              </div>
              <div>
                <Link to="#" className="w-full flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className='h-[50px] w-[50px] mb-2 rounded-full bg-green-500 text-white flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                  </div>
                  <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Moblie App Development</h5>
                  <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Build reliable enterprise software for the business to become a market leader.</p>
                </Link>
              </div>
              <div>
                <Link to="#" className="w-full flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className='h-[50px] w-[50px] mb-2 rounded-full bg-green-500 text-white flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
                    </svg>
                  </div>
                  <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ERP Solutions</h5>
                  <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Build reliable enterprise software for the business to become a market leader.</p>
                </Link>
              </div>
              <div>
                <Link to="#" className="w-full flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className='h-[50px] w-[50px] mb-2 rounded-full bg-green-500 text-white flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                    </svg>
                  </div>
                  <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Custom Software Development</h5>
                  <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Build reliable enterprise software for the business to become a market leader.</p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* our Solutions */}
        <div className='min-h-screen'>
          <div className='container mx-auto min-h-screen flex flex-col justify-center items-center px-4 py-10 lg:px-0 lg:py-20'>
            <div className='mb-10'>
              <h2 className='text-5xl text-center font-bold mb-4'>Our Solutions</h2>
              <p className='text-md text-justify'>Discover the pinnacle of technological solutions with our comprehensive array of services at AWA Software House. From bespoke software development and cutting-edge enterprise software to the seamless creation of mobile apps, our expertise extends to ERP solutions, cloud computing, eCommerce platforms, and product development. Unleash the power of innovation with our adept software integrations, ensuring your systems work seamlessly together. Our commitment doesn't end with deployment – we offer top-notch maintenance and testing services, providing enduring reliability. With a multifaceted approach, we align your IT infrastructure with strategic business initiatives, accelerating the implementation of new projects and positioning you miles ahead of the competition. AWA Software House: Where Technology Meets Transformation.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              <div>
                <Link to="/contact" className="w-full flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className='h-[50px] w-[50px] mb-2 rounded-full bg-green-500 text-white flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
                    </svg>
                  </div>
                  <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ERP Solutions</h5>
                  <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Consequat semper viverra nam libero justo laoreet sit amet. Egestas tellus rutrum tellus pellentesque eu tincidunt. Consequat semper viverra nam libero justo laoreet sit amet. Egestas tellus rutrum tellus pellentesque eu tincidunt. Consequat semper viverra nam libero justo laoreet sit amet. Egestas tellus rutrum tellus pellentesque eu tincidunt.</p>
                </Link>
              </div>
              <div>
                <Link to="/contact" className="w-full flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className='h-[50px] w-[50px] mb-2 rounded-full bg-green-500 text-white flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                    </svg>
                  </div>
                  <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Project Management System</h5>
                  <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Consequat semper viverra nam libero justo laoreet sit amet. Egestas tellus rutrum tellus pellentesque eu tincidunt. Consequat semper viverra nam libero justo laoreet sit amet. Egestas tellus rutrum tellus pellentesque eu tincidunt. Consequat semper viverra nam libero justo laoreet sit amet. Egestas tellus rutrum tellus pellentesque eu tincidunt.</p>
                </Link>
              </div>
              <div>
                <Link to="/contact" className="w-full flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className='h-[50px] w-[50px] mb-2 rounded-full bg-green-500 text-white flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                  </div>
                  <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Invertory Management System</h5>
                  <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Consequat semper viverra nam libero justo laoreet sit amet. Egestas tellus rutrum tellus pellentesque eu tincidunt. Consequat semper viverra nam libero justo laoreet sit amet. Egestas tellus rutrum tellus pellentesque eu tincidunt. Consequat semper viverra nam libero justo laoreet sit amet. Egestas tellus rutrum tellus pellentesque eu tincidunt.</p>
                </Link>
              </div>
              <div>
                <Link to="/contact" className="w-full flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className='h-[50px] w-[50px] mb-2 rounded-full bg-green-500 text-white flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                  </div>
                  <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Education Management System</h5>
                  <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Consequat semper viverra nam libero justo laoreet sit amet. Egestas tellus rutrum tellus pellentesque eu tincidunt. Consequat semper viverra nam libero justo laoreet sit amet. Egestas tellus rutrum tellus pellentesque eu tincidunt. Consequat semper viverra nam libero justo laoreet sit amet. Egestas tellus rutrum tellus pellentesque eu tincidunt.</p>
                </Link>
              </div>
              <div>
                <Link to="/contact" className="w-full flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className='h-[50px] w-[50px] mb-2 rounded-full bg-green-500 text-white flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
                    </svg>
                  </div>
                  <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Land Port Management System</h5>
                  <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Consequat semper viverra nam libero justo laoreet sit amet. Egestas tellus rutrum tellus pellentesque eu tincidunt. Consequat semper viverra nam libero justo laoreet sit amet. Egestas tellus rutrum tellus pellentesque eu tincidunt. Consequat semper viverra nam libero justo laoreet sit amet. Egestas tellus rutrum tellus pellentesque eu tincidunt.</p>
                </Link>
              </div>
              <div>
                <Link to="/contact" className="w-full flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className='h-[50px] w-[50px] mb-2 rounded-full bg-green-500 text-white flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                    </svg>
                  </div>
                  <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Export & Import Management</h5>
                  <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Consequat semper viverra nam libero justo laoreet sit amet. Egestas tellus rutrum tellus pellentesque eu tincidunt. Consequat semper viverra nam libero justo laoreet sit amet. Egestas tellus rutrum tellus pellentesque eu tincidunt. Consequat semper viverra nam libero justo laoreet sit amet. Egestas tellus rutrum tellus pellentesque eu tincidunt.</p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Coverage */}
        <div className='min-h-screen bg-slate-100'>
          <div className='container mx-auto min-h-screen flex flex-col justify-center items-center px-4 py-10 lg:px-0 lg:py-20'>
            <div className='mb-10'>
              <h2 className='text-5xl text-center font-bold mb-4'>Industry Coverage</h2>
              <p className='text-md text-justify'>Discover the pinnacle of technological solutions with our comprehensive array of services at AWA Software House. From bespoke software development and cutting-edge enterprise software to the seamless creation of mobile apps, our expertise extends to ERP solutions, cloud computing, eCommerce platforms, and product development. Unleash the power of innovation with our adept software integrations, ensuring your systems work seamlessly together. Our commitment doesn't end with deployment – we offer top-notch maintenance and testing services, providing enduring reliability.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <Link to="#">
                      <img class="rounded-t-lg" src={HealthCare} alt="" />
                  </Link>
                  <div class="p-5">
                      <Link to="#">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Healthcare</h5>
                      </Link>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  </div>
              </div>
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <Link to="#">
                      <img class="rounded-t-lg" src={Fintech} alt="" />
                  </Link>
                  <div class="p-5">
                      <Link to="#">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Fintech</h5>
                      </Link>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  </div>
              </div>
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <Link to="#">
                      <img class="rounded-t-lg" src={Logistics} alt="" />
                  </Link>
                  <div class="p-5">
                      <Link to="#">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Logistics & Transportation</h5>
                      </Link>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  </div>
              </div>
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <Link to="#">
                      <img class="rounded-t-lg" src={RealState} alt="" />
                  </Link>
                  <div class="p-5">
                      <Link to="#">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Real State</h5>
                      </Link>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  </div>
              </div>
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <Link to="#">
                      <img class="rounded-t-lg" src={Manufacturing} alt="" />
                  </Link>
                  <div class="p-5">
                      <Link to="#">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Manufacturing</h5>
                      </Link>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  </div>
              </div>
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <Link to="#">
                      <img class="rounded-t-lg" src={Travel} alt="" />
                  </Link>
                  <div class="p-5">
                      <Link to="#">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Travel & Tourism</h5>
                      </Link>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home