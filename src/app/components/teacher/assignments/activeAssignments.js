"use client";
import React, { useState } from "react";
import { MdOutlineAssignment } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
import ReactPaginate from "react-paginate";

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = new Date(dateString).toLocaleDateString(
    "en-US",
    options
  );
  return formattedDate;
};

// Usage:
const formattedDate = formatDate("2024-01-18T00:00:00.000Z");

const ActiveAssignments = (props) => {
  const perPage = 5;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * perPage;
  const paginatedAssignments = props.activeAssignments.slice(
    offset,
    offset + perPage
  );

  const tableBody = paginatedAssignments.map((assignment, index) => (
    <tr
      key={assignment._id}
      className="text-left text-sm font-semibold border-b whitespace-nowrap"
    >
      <td className="py-4">
        <input type="checkbox" />
      </td>
      <td className="pr-4">{assignment.className}</td>
      <td className="pr-4">{assignment.assignmentName}</td>
      <td className="pr-4">{formatDate(assignment.dueDate)}</td>
      <td className="pr-4">{assignment.assignmentMarks}</td>
      <td className="text-lg opacity-60 text-blue-500">
        <FaNoteSticky />
      </td>
    </tr>
  ));
  const pageCount = Math.ceil(props.activeAssignments.length / perPage);

  return (
    <div className="py-5 px-8 rounded-lg border overflow-auto">
      <table className="w-full">
        <caption className="mb-2">
          <div className="sm:flex justify-between items-center text-sm">
            <div className="flex items-center font-bold gap-2">
              <div className="whitespace-nowrap">Active Assignments</div>
              <div className="text-lg text-blue-700">
                <MdOutlineAssignment />
              </div>
            </div>
          
          </div>
        </caption>
        <thead>
          <tr className="text-sm text-gray-500">
            <th className="text-left py-4 pr-4">S.No.</th>
            <th className="text-left py-4 pr-4">Subject</th>
            <th className="text-left py-4 pr-4">Assignment</th>
            <th className="text-left py-4 pr-4">Deadline</th>
            <th className="text-left py-4 pr-4">Marks</th>
            <th className="text-left py-4 pr-4">Note</th>
          </tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </table>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName="pagination flex justify-center my-4"
        previousClassName="px-3 py-2 rounded-lg bg-gray-300 text-gray-700 cursor-pointer"
        nextClassName="px-3 py-2 rounded-lg bg-gray-300 text-gray-700 cursor-pointer"
        pageClassName="px-3 py-2 rounded-lg bg-gray-300 text-gray-700 cursor-pointer mx-1"
        breakClassName="px-3 py-2 rounded-lg bg-gray-300 text-gray-700 cursor-pointer mx-1"
        activeClassName="bg-greenColor text-white px-3 py-2 rounded-lg mx-1"
      />
    </div>
  );
};

export default ActiveAssignments;
