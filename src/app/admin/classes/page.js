"use client";
import React, { useEffect, useState } from "react";
import BreadCrumb from "@/app/components/common/breadcrumb/page";
import ClassDetail from "@/app/components/common/classdetail/page";
import { FiCalendar } from "react-icons/fi";
import CurrentDate from "@/app/components/common/currentdate/page";
import SuperuserLayout from "@/app/components/layout/superuserlayout/page";
import { useDispatch } from "react-redux";
import { fetchClasses } from "@/store/reducer/admin/fetchClassesReducer";

const Classes = () => {
  const [classList, setclassesList] = useState([]);

  const dispatch = useDispatch();
  //  to fetch shifts
  useEffect(() => {
    // Dispatch the action to fetch shifts
    dispatch(fetchClasses())
      .then((response) => {
        // Assuming response.data is an array of shifts
        setclassesList(response.data.classes);
      })
      .catch((error) => {
        console.error("Error fetching shifts:", error);
      });
  }, []);

  return (
    <SuperuserLayout>
      <div className="mx-2 my-2">
        <div className="flex justify-between items-center my-2 bg-card p-2 rounded-lg mb-5">
          <BreadCrumb text="Add Class" />
          <button className="flex items-center text-white text-sm text-center bg-greenColor p-2 rounded-lg">
            <FiCalendar className="text-white mx-2" /> <CurrentDate />
          </button>
          {/* Any other header elements */}
        </div>
        <div className="my-2 flex flex-wrap justify-center">
          {classList && classList.length > 0 ? (
            classList.map((singleClass) => (
              <ClassDetail key={singleClass._id} classDetail={singleClass} />
            ))
          ) : (
            <p className="mx-2 text-xs">Loading...</p>
          )}
        </div>
      </div>
    </SuperuserLayout>
  );
};

export default Classes;
