import React from 'react'
import Navbar from '../../../components/shared/Navbar'

export default function Header() {
    return (
        <header
            id="landingHeader"
            style={{
                backgroundImage: 'url(/assets/images/header.jpg)',
                height: 500,
            }}
        >
            <Navbar/>
            <h1 className="text-3xl font-bold">Hello world!</h1>
            <p className="font-bold">text</p>
        </header>
    )
}
