import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import Routers from '../Routes/Routes'
// import Sidebar from './Sidebar'
// import Header from './Header'


const Layout = () => {
    return (
        <BrowserRouter>
        {/* <Header />
        <Sidebar /> */}
        <Routers />
        </BrowserRouter>
    )
}

export default Layout