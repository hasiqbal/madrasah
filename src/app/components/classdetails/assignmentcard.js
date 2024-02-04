import React from 'react'

import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const Assignmentcard = () => {
    // circular bar data
    const percentage = 100;
    const radius = 25;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100 * circumference);


    return (
        <div className='bg-white rounded-xl px-4'>
            <div className='flex items-center justify-between border-b py-5'>
                <div className='space-y-1'>
                    <div className='text-base font-semibold text-blue-950'>
                        Assignment Title
                    </div>
                    <div className='text-gray-500 text-xs sm:text-sm'>
                        58 Min - 10 Questions
                    </div>
                </div>
                <div className='relative'>
                    <svg className='progress-ring' width='80' height='80'>
                        <circle className='progress-ring__circle' stroke='blue' strokeWidth='3' fill='transparent' r={radius} cx='50' cy='50'
                            strokeDasharray={circumference + ' ' + circumference}
                            strokeDashoffset={offset} />
                    </svg>
                    <div className='absolute text-sm top-3 left-3 flex items-center justify-center w-full h-full'>
                        {percentage}%
                    </div>
                </div>
            </div>
            <div className='py-5'>
                <div className='text-sm sm:text-base space-y-3'>
                    <div className='flex items-center justify-between'>
                        <div>Introduction</div>
                        <div className='text-blue-700'><FaRegCirclePlay /></div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div>Introduction</div>
                        <div className='text-blue-700'><FaRegCircleCheck /></div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div>Introduction</div>
                        <div className='text-blue-700'><FaRegCirclePlay /></div>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-2 w-full font-medium mt-4 text-blue-700'>
                    <div>
                        Show More
                    </div>
                    <div>
                        <IoIosArrowDown />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Assignmentcard;