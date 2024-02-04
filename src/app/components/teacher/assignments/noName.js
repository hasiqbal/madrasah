import React from "react";
import { FaDownload } from "react-icons/fa";
import CurrentDate from "../../common/currentdate/page";

const NoName = (props) => {
  return (
    <div className="bg-blue-50 rounded-xl py-6 px-10 text-center space-y-2">
      <div className="text-xs font-semibold">No. Of Assignments</div>
      <div className="font-extrabold text-3xl">{props.noOfAssignments}</div>
      <div className="text-xs font-light text-gray-500">
        <CurrentDate />
      </div>
      <button className="flex items-center justify-center p-3 rounded-xl border-2 border-greenColor text-greenColor bg-transparent gap-3 hover:bg-greenColor hover:text-white">
        <div className="text-base">
          <FaDownload />
        </div>
        <div className="text-xs">Download All Assignments</div>
      </button>
    </div>
  );
};

export default NoName;
