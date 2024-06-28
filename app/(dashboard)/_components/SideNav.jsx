import { Files, Shield, Upload } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function SideNav() {

    const menuList = [
        {
            id: 1,
            name: 'Upload',
            icon: Upload,
            path: '/upload'
        },
        {
            id: 2,
            name: 'Files',
            icon: Files,
            path: '/files'
        },
        {
            id: 3,
            name: 'Upgrade',
            icon: Shield,
            path: '/upgrade'
        },


    ]

    return (
        <div>
            <div>
                <Image src='/logo.png' alt='logo' width={150} height={100} />

            </div>

        </div>
    )
}

export default SideNav