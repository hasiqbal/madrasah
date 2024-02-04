import React from 'react'
import { HiDotsVertical } from "react-icons/hi";
import { IoMdSearch } from "react-icons/io";
import Chatprofile from './chatprofile';

const Profilelist = () => {
    return (
        <div className='h-screen px-4'>
            <div className='flex items-center justify-between py-6'>
                <div className='font-extrabold text-xl'>
                    All Messages
                </div>
                <div>
                    <HiDotsVertical />
                </div>
            </div>
            <div className='flex items-center p-3 border mb-4 rounded-md'>
                <div className='pl-2'>
                    <IoMdSearch />
                </div>
                <input type="text" placeholder='Search People' className='outline-none pl-4 text-xs' />
            </div>
            <div className='space-y-4'>
                <Chatprofile  onread={true}/>
                <Chatprofile unreadNo={10} />
                <Chatprofile unreadNo={2}/>
            </div>
            <div className='text-center text-xs text-gray-400'>
                30 archieve Messages
            </div>
        </div>
    )
}

export default Profilelist