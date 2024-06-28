import Image from 'next/image'
import React from 'react'

function Header() {
    return (
        <div>
            <header className="bg-white">
                <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8  shadow-lg">

                    <Image src='/logo.svg' alt='logo' width={150} height={100} />

                    <div className="flex flex-1 items-center justify-end md:justify-between">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-10 text-1xl font-bold">
                                <li>
                                    <a className="text-gray-600 transition hover:text-black" href="#"> Home </a>
                                </li>

                                <li>
                                    <a className="text-gray-600 transition hover:text-black" href="#"> Upload </a>
                                </li>

                                <li>
                                    <a className="text-gray-600 transition hover:text-black" href="#"> About Us </a>
                                </li>

                                <li>
                                    <a className="text-gray-600 transition hover:text-black" href="#"> Contact Us </a>
                                </li>


                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <a
                                    className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium transition hover:bg-gray-200"
                                    href="/files"
                                >
                                    Get started
                                </a>


                            </div>



                        </div>
                    </div>
                </div>
            </header >
        </div >
    )
}

export default Header