import React from 'react'
import Image from 'next/image'
import { HiDotsVertical } from 'react-icons/hi'

const Chatheader = ({ profile = "/b.jpg",
    name = "Default Name",
    status = "Last Seen",
}) => {
    return (
        <div className='flex items-center gap-6 py-4 px-4 border-b bg-white h-16'>
            <div className=''>
                <Image src={profile} width={45} height={45} className='rounded-full' alt='ProfileImg' />
            </div>
            <div className='w-full'>
                <div className="font-bold">{name}</div>
                <div className="text-xs">{status}</div>
            </div>
            <div className='flex gap-6'>
                <HiDotsVertical />
            </div>
        </div>
    )
}

export default Chatheader;