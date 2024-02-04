"use client";
import React, { useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import { CiFilter } from "react-icons/ci";

const Searchbar = () => {
    const [search, setSearch] = useState(false);
    return (
        <>
            <div className='flex justify-between bg-white items-center px-5 py-2 rounded-lg gap-2 text-gray-500 '>
                <div className='sm:hidden'>
                    <button onClick={() => { setSearch(!search) }}><IoMdSearch /></button>
                </div>
                <div className='hidden sm:flex items-center text-sm md:text-lg  gap-4 sm:w-full' >
                    <IoMdSearch />
                    <input type="text" className='focus:outline-none' placeholder='Search Date'/>
                </div >
                <div className="border border-white text-xs sm:text-sm m-2 py-1 px-2">
                    <select defaultValue="Yesterday" className="focus:outline-none bg-transparent" name="date" id="date">
                        <option value="Some Value">Some Value</option>
                        <option value="Some Value">Some Value</option>
                        <option value="Some Value">Some Value</option>
                        <option value="Some Value">Some Value</option>
                        <option value="Some Value">Some Value</option>
                    </select>
                </div>
                <div className='flex items-center'>
                    <div className='sm:text-lg'>
                        <CiFilter />
                    </div>
                    <div className='text-xs sm:text-sm'>
                        FILTER
                    </div>
                </div>
            </div >
            {search ?
                <div className={"flex justify-between w-full px-5 py-4 text-gray-500 rounded-lg mt-4 bg-white items-center text-sm"}>

                    <input type="text" className='focus:outline-none' placeholder='Search Name' />
                    <IoMdSearch />
                </div > : null
            }
        </>
    )
}

export default Searchbar