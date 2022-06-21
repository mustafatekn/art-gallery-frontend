import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="bg-transparent px-2 sm:px-4 py-2.5 border-b-4">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to="/" className="flex items-center">
                    <img
                        src="/assets/images/logo.png"
                        className="mr-3 h-6 sm:h-9"
                        alt="Rixusart Logo"
                    />
                    <span className="sr-only">Rixusart</span>
                </Link>
                <div
                    className="hidden w-full md:block md:w-auto"
                    id="mobile-menu"
                >
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <Link
                                to="/"
                                className="block py-2 pr-4 pl-3 text-primary-black"
                                aria-current="page"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/projects"
                                className="block py-2 pr-4 pl-3 text-primary-black"
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/rixusart"
                                className="block py-2 pr-4 pl-3 text-primary-black"
                            >
                                Rixusart
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/shop"
                                className="inline-block py-2 pr-4 pl-3 text-primary-black"
                            >
                                Shop
                                <svg
                                    role="img"
                                    className="w-6 h-6 inline-block text-primary-black ml-1"
                                >
                                    <use xlinkHref="/assets/icons/sprite.svg#instagram" />
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="block py-2 pr-4 pl-3 text-primary-black"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
