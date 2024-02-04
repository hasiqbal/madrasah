import React from "react";
import SingleClassDetail from "../singleclassdetail/page";

const ClassDetail = ({ classDetail }) => {
  if (!classDetail) {
    // Handle case where classDetail prop is undefined or null
    return null;
  }
  return (
    <div className="my-2 p-2   ">
      {" "}
      <SingleClassDetail classDetail={classDetail} />
    </div>
  );
};

export default ClassDetail;
