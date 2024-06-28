import React from 'react'
import Constant from '../_utils/Constant'

function Hero() {
    return (
        <section className="bg-gray-600 text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                <div className="mx-auto max-w-3xl text-center">
                    <h1
                        className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                    >
                        Upload, Save and easily

                        <span className="sm:block"> Share your files in one place </span>
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-gray-200">
                        {Constant.desc}
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            className="block w-full rounded border border-blue-600 bg-blue-700 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                            href="/files"
                        >
                            Get Started
                        </a>

                        <a
                            className="block w-full rounded border border-blue-700 px-12 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                            href="#"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero