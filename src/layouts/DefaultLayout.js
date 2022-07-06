import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

export default function DefaultLayout({ children }) {
    return (
        <>
            <Navbar />
            <main className="mt-16 mb-28">{children}</main>
            <Footer />
        </>
    )
}
