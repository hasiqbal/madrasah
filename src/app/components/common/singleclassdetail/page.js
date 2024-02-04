import React from "react";
import { FiCheck, FiX } from "react-icons/fi";

const SingleClassDetail = ({ classDetail }) => {
  if (!classDetail) {
    // Handle case where shift prop is undefined or null
    return null;
  }
  console.log("hi", classDetail);

  const { name, teacher, students } = classDetail; // Adjust property names

  return (
    <div className="flex flex-wrap items-center justify-center">
      <div className="md:w-[230px] w-full mx-2 border border-gray-100 p-3 rounded my-2">
        <div className="text-2xl font-medium mb-2">{name}</div>{" "}
        {/* Use name instead of className */}
        <div>
          <div className="text-sm mb-2 text-lightText mb-5">{teacher}</div>{" "}
          {/* Use teacher instead of teacherName */}
          <div
            className={`card  bg-emerald-50 border-t-greenColor rounded border-t-2  p-3`}
          >
            <div className="my-2 uppercase text-lightText text-xs font-bold">
              some data here
            </div>
            <div className="text-md font-normal mb-4">some data</div>
            <div className="my-2 uppercase text-lightText text-xs">
              some data
            </div>
          </div>
        </div>
        <div className="md:mt-[200px] mt-[50px]">
          <hr />
          <div className="text-sm mb-2 text-lightText my-5">
            # of Students: <span className="font-bold">{students}</span>{" "}
            {/* Use students instead of numberOfStudents */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleClassDetail;
