import React from "react";
import Image from "next/image";

const DueAssignment = (props) => {
  return (
    <div className="bg-greenColor text-white rounded-lg">
      <div className="flex gap-4 items-center justify-center p-4">
        <div>
          <div className="text-lg font-bold">
            {props.latestAssignment.assignmentName}
          </div>
          <div className="text-xs font-light">
            {props.latestAssignment.assignmentDetail}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DueAssignment;
