"use client"
import React, { useState } from "react";
import Assignmentcard from "./assignmentcard";
import ReactPaginate from 'react-paginate';


import { IoMdArrowDropleft,IoMdArrowDropright } from "react-icons/io";

const Assignments = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const PER_PAGE = 6;
    const offset = currentPage * PER_PAGE;

    const pageCount = Math.ceil(39 / PER_PAGE);

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }

    return (
        <div className="bg-gray-100 py-10 px-4 sm:px-8 rounded-xl ">
            <div className='font-bold text-xl mb-6'>
                Assignments (39)
            </div>
            <div className='grid md:grid-cols-3 gap-x-8 gap-y-8'>
                {Array.from({ length: 39 }, (_, index) => (
                    <Assignmentcard key={index} />
                )).slice(offset, offset + PER_PAGE)}
            </div>
            <ReactPaginate
                previousLabel={<IoMdArrowDropleft />}
                nextLabel={<IoMdArrowDropright />}
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"flex gap-4 sm:gap-8 bg-white w-fit m-auto p-4 items-center justify-center mt-8 rounded-lg"}
                previousLinkClassName={"cursor-pointer"}
                nextLinkClassName={"cursor-pointer"}
                disabledClassName={"text-gray-400 cursor-not-allowed"}
                activeClassName={"font-bold"}
            />
        </div>
    );
};

export default Assignments;