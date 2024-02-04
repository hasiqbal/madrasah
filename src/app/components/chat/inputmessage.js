import React from 'react'
import { BsChatLeftDotsFill } from "react-icons/bs";
import { MdOutlineEmojiEmotions } from "react-icons/md";
const Inputmessage = () => {
    return (
        <div className='flex items-center justify-between p-4 gap-4 border-t h-16 bg-white'>
            <div className='text-xl'>
                <BsChatLeftDotsFill />
            </div>
            <div className='w-full'>
                <input type="text" placeholder='Type a message' className='w-full outline-none' />
            </div>
            <div className='text-2xl'>
                <MdOutlineEmojiEmotions />
            </div>
        </div>
    )
}

export default Inputmessage