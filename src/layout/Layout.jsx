import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Sponsor from './Sponsor'

const Layout = () => {
    return (
        <div className="w-full flex flex-col">
            <Header />
            <main className="">
                <Outlet />
            </main>
            <Sponsor />
            <Footer />
        </div>
    )
}

export default Layout