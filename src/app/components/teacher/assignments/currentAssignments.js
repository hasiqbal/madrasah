import React from "react";
import { MdAssignmentAdd } from "react-icons/md";
import { MdOutlineAddToPhotos } from "react-icons/md";
import Link from "next/link";

const CurrentAssignments = (props) => {
  return (
    <div className="py-5 px-8 rounded-lg border">
      <div className="flex items-center font-bold gap-2 text-sm mb-2">
        <div className="whitespace-nowrap">New Assignment</div>
        <div className="text-lg text-blue-700">
          <MdAssignmentAdd />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-start justify-between gap-3 py-4">
        <div className="flex flex-col items-center justify-center text-center w-full h-[20vh]  sm:h-[10vh] md:h-[18vh] rounded-lg bg-gray-100 text-gray-400">
          <div>
            <MdOutlineAddToPhotos />
          </div>
          <Link
            href="uploadassignment"
            className="text-xs md:whitespace-nowrap mt-1"
          >
            Create a new assignment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CurrentAssignments;
