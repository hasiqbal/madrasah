"use client";
import React, { useEffect, useState } from "react";
import ActiveAssignments from "@/app/components/teacher/assignments/activeAssignments";
import CurrentAssignments from "@/app/components/teacher/assignments/currentAssignments";
import DueAssignment from "@/app/components/teacher/assignments/dueAssignment";
import InboxCard from "@/app/components/teacher/assignments/inbox";
import NoName from "@/app/components/teacher/assignments/noName";
import PercentageCard from "@/app/components/teacher/assignments/percentageCard";
import SupervisorLayout from "@/app/components/layout/supervisorlayout/page";
import { useDispatch } from "react-redux";
import { fetchAssignments } from "@/store/reducer/teacher/fetchAssignmentsReducer";
import { fetchLatestAssignment } from "@/store/reducer/teacher/fetchLatestAssignmentReducer";

const Assignments = () => {
  const dispatch = useDispatch();
  const [assignments, setAssignments] = useState([]);
  const [latestAssignment, setLatestAssignment] = useState([]);

  //  to fetch assignments
  useEffect(() => {
    // Dispatch the action to fetch assignments
    dispatch(fetchAssignments())
      .then((response) => {
        // Assuming response.data is an array of assignments
        setAssignments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching assignments:", error);
      });
  }, [dispatch]);

  //  to fetch latest assignment
  useEffect(() => {
    // Dispatch the action to fetch assignment
    dispatch(fetchLatestAssignment())
      .then((response) => {
        // Assuming response.data is an array of assignment
        setLatestAssignment(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching assignments:", error);
      });
  }, [dispatch]);
  return (
    <SupervisorLayout>
      <div className="p-5 lg:p-10 w-full">
        {/* title */}
        <div className="mb-6">
          <div className="text-xl font-bold text-gray-400">Good day</div>
          <div className="text-xs text-gray-500 font-semibold">
            View your assignments
          </div>
        </div>
        <div className="md:flex items-start gap-5 space-y-5 md:space-y-0">
          <div className="md:w-[70%] space-y-4">
            <div className="space-y-5 sm:space-y-0 sm:grid grid-cols-3 gap-4">
              <div>
                <PercentageCard
                  achieved={assignments.duePercentage}
                  dataType={"Due"}
                />
              </div>
              <div>
                <PercentageCard
                  achieved={assignments.pendingPercentage}
                  dataType={"Pending"}
                />
              </div>
              <div>
                <PercentageCard
                  achieved={assignments.submittedPercentage}
                  dataType={"Submitted"}
                />
              </div>
            </div>
            {assignments.teacherAssignments && (
              <>
                {" "}
                <div>
                  <ActiveAssignments
                    activeAssignments={assignments.teacherAssignments}
                  />
                </div>
              </>
            )}
            <div>
              <CurrentAssignments />
            </div>
          </div>
          <div className="md:w-[30%] space-y-4">
            {assignments.teacherAssignments && (
              <div>
                <NoName
                  noOfAssignments={assignments.teacherAssignments.length}
                />
              </div>
            )}
            <div>
              <InboxCard />
            </div>
            {latestAssignment.latestAssignment && (
              <div>
                <DueAssignment
                  latestAssignment={latestAssignment.latestAssignment}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </SupervisorLayout>
  );
};

export default Assignments;
