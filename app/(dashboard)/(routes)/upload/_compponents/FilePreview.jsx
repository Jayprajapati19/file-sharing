import Image from 'next/image'
import React from 'react'

function FilePreview({ file }) {
    return (
        <div className='flex items-center '>
            <Image src='/file.png' width={50} height={50} alt='file' />
            <div className='text-gray-900 text-left gap-3'>
                <h2>{file.name}</h2>
                <h2 className='text-[12px] text-gray-600'>{file?.type} / {(file.size / 1024 / 1024).toFixed(2)}MB</h2>
            </div>
        </div>
    )
}

export default FilePreview