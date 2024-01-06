import React from 'react'
import Facebook from '../../../assets/Footer/facebook.png'
import Linkedin from '../../../assets/Footer/linkedin.png'
import Twitter from '../../../assets/Footer/twitter.png'
import Youtube from '../../../assets/Footer/youtube.png'

const Footer = () => {
  return (
    <div className='min-h-[60vh] bg-[#0B1432] text-slate-300 flex justify-center items-center'>
      <div className='container mx-auto'>

        <div className='flex flex-col lg:flex-row justify-between items-center'>
          <div className='w-full lg:w-[50%] mb-6 lg:mb-0 lg:mr-4'>
            <h1 className='text-3xl font-semibold mb-2 lg:mb-3'>Join Our Newsletter</h1>
            <p className='text-sm mb-3 lg:mb-4'>Subscribe for the newest products & services</p>
          </div>
          <div className='w-full lg:w-[50%]'>
            <form className='w-full'>
              <input type='email' name='email' className='w-full lg:w-[80%] rounded-l-md mb-2 lg:mb-0' placeholder='email@email.com' required/>
              <button className='w-full lg:w-[18%] bg-green-600 p-2 rounded-r-md lg:ml-2'>Subscribe</button>
            </form>
          </div>
        </div>

        <div className='mt-10 grid grid-cols-1 lg:grid-cols-6'>
          <div>
            <h2 className='text-xl font-semibold mb-5'>Contacts</h2>
            <p className='my-3'>AWA Software House</p>
            <p className='my-3'>Malibag, DIT Road, Ramna</p>
            <p className='my-3'>Dhaka-1217, Bangladesh</p>
            <p className='my-3'>software.house@awa.com</p>
            <div className='flex items-center mt-5'>
              <div className='w-[35px] h-[35px] me-3 flex justify-center items-center rounded-full bg-green-500 text-white'>
                <img src={Facebook} alt='facebook'/>
              </div>
              <div className='w-[35px] h-[35px] me-3 flex justify-center items-center rounded-full bg-green-500 text-white'>
                <img src={Twitter} alt='twitter'/>
              </div>
              <div className='w-[35px] h-[35px] me-3 flex justify-center items-center rounded-full bg-green-500 text-white'>
                <img src={Linkedin} alt='linkedin'/>
              </div>
              <div className='w-[35px] h-[35px] me-3 flex justify-center items-center rounded-full bg-green-500 text-white'>
                <img src={Youtube} alt='youtube'/>
              </div>
            </div>
          </div>
          <div>
            <h2 className='text-xl font-semibold mb-5'>Services</h2>
            <ul>
              <li className='navItem my-3'>Ecommerce Application</li>
              <li className='navItem my-3'>Web Application</li>
              <li className='navItem my-3'>Mobile Application</li>
              <li className='navItem my-3'>Business Intelligance</li>
              <li className='navItem my-3'>Cloud Computing</li>
              <li className='navItem my-3'>Microsoft Azure</li>
            </ul>
          </div>
          <div>
            <h2 className='text-xl font-semibold mb-5'>Solutions</h2>
            <ul>
              <li className='navItem my-3'>ERP Software</li>
              <li className='navItem my-3'>Ecommerce</li>
              <li className='navItem my-3'>Account & Finance</li>
              <li className='navItem my-3'>Healthcare</li>
              <li className='navItem my-3'>Travel & Tourism</li>
              <li className='navItem my-3'>Microsoft Azure</li>
            </ul>
          </div>
          <div>
            <h2 className='text-xl font-semibold mb-5'>Backend</h2>
            <ul>
              <li className='navItem my-3'>Python</li>
              <li className='navItem my-3'>Java</li>
              <li className='navItem my-3'>Nodejs</li>
              <li className='navItem my-3'>.Net</li>
              <li className='navItem my-3'>PHP</li>
              <li className='navItem my-3'>Flutter</li>
            </ul>
          </div>
          <div>
            <h2 className='text-xl font-semibold mb-5'>Frontend</h2>
            <ul>
              <li className='navItem my-3'>React</li>
              <li className='navItem my-3'>Angular</li>
              <li className='navItem my-3'>Vue</li>
              <li className='navItem my-3'>PHP</li>
              <li className='navItem my-3'>TypeScript</li>
              <li className='navItem my-3'>MERN Stack</li>
            </ul>
          </div>
          <div>
            <h2 className='text-xl font-semibold mb-5'>Mobile</h2>
            <ul>
              <li className='navItem my-3'>iOS</li>
              <li className='navItem my-3'>Android</li>
              <li className='navItem my-3'>Flutter</li>
              <li className='navItem my-3'>React Native</li>
              <li className='navItem my-3'>Shopify</li>
              <li className='navItem my-3'>AR/VR</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer