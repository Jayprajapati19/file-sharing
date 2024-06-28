"use client"
import React from 'react'
import UploadForm from './_compponents/UploadForm'

function Upload() {
    return (
        <div className='p-5 px-8 md:px-28'>
            <h2 className='text-gray-500 text-[20px] text-center m-5' >Start
                <strong className='text-primary' > Uploading </strong>  Files and <strong className='text-primary' > Share</strong>  it</h2>
            <UploadForm />
        </div>
    )
}

export default Upload