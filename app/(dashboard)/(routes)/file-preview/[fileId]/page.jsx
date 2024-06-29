"use client"
import React, { useEffect } from 'react'

function FilePreview({ params }) {

    useEffect(() => {
        console.log(params?.fileId);

    }, [])

    return (
        <div className='text-gray-900'>FilePreview</div>
    )
}

export default FilePreview