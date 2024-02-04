import React from 'react'

const Chat = ({type , message, time}) => {
    return (
        <div className={'relative max-w-80 mb-16 '+(type==="sender"?"ml-auto":"")}>
        <div className={'p-4 text-sm border border-gray-200 mb-1 rounded-md '+(type==="receiver"?"bg-gray-100":"bg-white")}>
                {message}
            </div>
            <div className="absolute right-0 text-xs">
                {time}
            </div>
        </div>

    )
}

export default Chat;