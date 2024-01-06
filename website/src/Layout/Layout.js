import React from 'react'
import Navbar from '../Components/Layout/Navbar/Navbar'
import Footer from '../Components/Layout/Footer/Footer'

const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <div className='h-[100vh] mt-20'>
          {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout