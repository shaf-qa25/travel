import React from 'react'
import { Navbar } from './src/components/navbar'
import { Outlet } from 'react-router-dom'
import Footer from './src/components/footer'

const Layout = () => {
  return (
    <>
    <div className="bg-bg-light">
    <Navbar/>
    <main className='pt-28 min-h-screen'>
    <Outlet/>
    </main>
    
    <Footer/>
    </div>
    </>
  )
}

export default Layout