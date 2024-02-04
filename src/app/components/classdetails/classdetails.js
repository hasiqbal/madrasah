import React from 'react'
// Icons import
import { TbCellSignal5 } from "react-icons/tb";
import { FaRegClock } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { IoBookSharp } from "react-icons/io5";
import { BsGlobeAmericas } from "react-icons/bs";
import { IoMdInfinite } from "react-icons/io";
import { BiTrophy } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";


const Classdetails = () => {
    const classDetails = [
        {
            name: '2100 Enrolled',
            icon: <IoMdPeople />
        },
        {
            name: '40 Minutes to Complete',
            icon: <FaRegClock />
        },
        {
            name: 'Curriculum',
            icon: <IoBookSharp />
        },
        {
            name: 'Beginner Level',
            icon: <TbCellSignal5 />
        },
        {
            name: 'English',
            icon: <BsGlobeAmericas />
        },
        {
            name: 'Assignment',
            icon: <FaTasks />
        },
        {
            name: 'Full Lifetime Access',
            icon: <IoMdInfinite />
        },
        {
            name: 'Certificate of Completion',
            icon: <BiTrophy />
        },
    ]

    const classDetailsList = (
        <div className='grid grid-cols-2 gap-x-2 gap-y-4'>
            {classDetails.map((item, index) => (
                <li key={index}>
                    <div className='flex items-center gap-2'>
                        <div>{item.icon}</div>
                        <div>{item.name}</div>
                    </div>
                </li>
            ))}
        </div>
    )

    return (
        <div >
            <div className='font-bold text-xl mb-6'>
                Class Details
            </div>
            <div className='flex items-center gap-2'>
                <div className=''>
                    <ul className='text-blue-700 text-sm'>
                        {classDetailsList}

                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Classdetails