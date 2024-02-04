"use client";
import React, { useEffect, useState } from "react";
import Jumbotron from "@/app/components/common/jumbotron/page";
import StudentLayout from "@/app/components/layout/studentlayout/page";
import Calander from "@/app/components/student/dashboard/calander.js";
import Card from "@/app/components/student/dashboard/card";
import { fetchLatestAlert } from "@/store/reducer/admin/fetchLatestAlertReducer";
import { fetchStudentAssignments } from "@/store/reducer/student/fetchAssignmentsReducer";
import { useDispatch } from "react-redux";
import AdminAnnouncement from "@/app/components/common/adminannouncement/adminannouncement";
import { fetchStats } from "@/store/reducer/admin/fetchStatsReducer";
import { fetchStudentStats } from "@/store/reducer/student/fetchUserStatsReducer";

const Page = () => {
  const dispatch = useDispatch();
  const [alerts, setAlerts] = useState([]);
  const [stats, setStats] = useState([]);
  const [assignments, setAssignments] = useState([]);

  //  to fetch alerts
  useEffect(() => {
    // Dispatch the action to fetch alerts
    dispatch(fetchLatestAlert())
      .then((response) => {
        // Assuming response.data is an array of alerts
        setAlerts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching alerts:", error);
      });
  }, [dispatch]);

  //  to fetch assignments
  useEffect(() => {
    // Dispatch the action to fetch assignments
    dispatch(fetchStudentAssignments())
      .then((response) => {
        // Assuming response.data is an array of assignments
        setAssignments(response.data.studentAssignments);
      })
      .catch((error) => {
        console.error("Error fetching assignments:", error);
      });
  }, [dispatch]);
  //  to fetch stats
  useEffect(() => {
    // Dispatch the action to fetch stats
    dispatch(fetchStudentStats())
      .then((response) => {
        // Assuming response.data is an array of stats
        setStats(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching assignments:", error);
      });
  }, [dispatch]);
  return (
    <StudentLayout>
      <div className="mb-3 lg:mb-[50px]">
        <Jumbotron stats={stats} isAdmin={false} />
      </div>
      <div className="md:flex w-full p-5 sm:gap-5 space-y-5 sm:space-y-0">
        <div className="w-full md:w-1/3 h-full  space-y-5">
          <div>
            <AdminAnnouncement alerts={alerts} />
          </div>
        </div>
        <div className="w-full md:w-2/3 space-y-5">
          <div className="overflow-auto border p-2 rounded-md">
            {assignments && (
              <div className="h-[70vh] w-[800px] sm:w-full">
                <Calander assignments={assignments} />
              </div>
            )}
          </div>

          <div className="h-1/3 space-y-5 text-xs sm:text-sm md:text-base">
            <div className="flex items-start gap-2 md:gap-5 justify-between h-fit">
              <Card />
              <Card />
              <Card />
            </div>
            <div className="flex items-start gap-2 md:gap-5 justify-between h-fit">
              <Card />
              <Card />
              <Card />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5 justify-between h-fit">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
};

export default Page;
