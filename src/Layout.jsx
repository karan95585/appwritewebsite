import React from 'react'
import { Outlet } from 'react-router-dom'
import Headers from './components/header/Headers'
import Footer from './components/footer/Footer'
function Layout() {
  return (
    <div>
        <Headers/>
        <Outlet/>
        <Footer/>

      
    </div>
  )
}

export default Layout
