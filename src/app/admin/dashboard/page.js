"use client";
import React, { useState, useEffect } from "react";
import Jumbotron from "@/app/components/common/jumbotron/page";
import LineChart from "@/app/components/common/linegraph/page";
import BarChart from "@/app/components/common/barchart/page";
import PieChart from "@/app/components/common/piechart/page";
import Table from "@/app/components/common/table/Table";
import RadarChart from "@/app/components/common/radarchart/page";
import SuperuserLayout from "@/app/components/layout/superuserlayout/page";
import { useDispatch } from "react-redux";
import { fetchLatestAlert } from "@/store/reducer/admin/fetchLatestAlertReducer";
import { fetchTopAttendees } from "@/store/reducer/admin/fetchTopAttendantReducer";
import AdminAnnouncement from "@/app/components/common/adminannouncement/adminannouncement";
import { fetchStats } from "@/store/reducer/admin/fetchStatsReducer";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [alerts, setAlerts] = useState([]);
  const [topAttendant, setTopAttendant] = useState([]);
  const [stats, setStats] = useState([]);

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

  useEffect(() => {
    // Dispatch the action to fetch  top attendant
    dispatch(fetchTopAttendees())
      .then((response) => {
        // Assuming response.data is an array of  top attendant
        setTopAttendant(response.data);
      })
      .catch((error) => {
        console.error("Error fetching alerts:", error);
      });
  }, [dispatch]);
  // fetch stats
  useEffect(() => {
    // Dispatch the action to fetch  top attendant
    dispatch(fetchStats())
      .then((response) => {
        // Assuming response.data is an array of  top attendant
        setStats(response.data);
      })
      .catch((error) => {
        console.error("Error fetching alerts:", error);
      });
  }, [dispatch]);

  return (
    <SuperuserLayout>
      <div className="bg-gray-100">
        <div className="">
          <Jumbotron stats={stats} isAdmin={true} />
        </div>
        <div className="lg:mt-[80px] mt-2 mb-2 lg:p-4">
          <div className="flex flex-wrap  px-5 ">
            <div className="lg:w-4/12 w-full p-2 rounded ">
              {/* graph 1  */}
              <div className="bg-white p-2">
                {" "}
                <div className="text-gray-950 font-bold my-2 text-lg">
                  Will add panel later
                </div>
                <div className="h-[820px]"> Panel according to your wish </div>
              </div>
            </div>
            {/* announcement board  */}
            <div className="lg:w-4/12 w-full p-2 rounded ">
              <div className="bg-white p-2">
                {" "}
                <div className="text-gray-950 font-bold my-2 text-lg">
                  Announcements Report
                </div>
                <div className="">
                  {" "}
                  <AdminAnnouncement alerts={alerts} />{" "}
                </div>
              </div>
            </div>

            {/* graph 2 */}
            <div className="lg:w-4/12 w-full p-2 rounded ">
              {" "}
              <div className="bg-white p-2 ">
                <div className="text-gray-950 font-bold my-2 text-lg">
                  Top 5 Attendent
                </div>
                {topAttendant && (
                  <div>
                    {" "}
                    <Table topAttendees={topAttendant} />
                  </div>
                )}
              </div>
              <div className="my-2 bg-white p-2">
                <div className="text-gray-950 font-bold my-2 text-lg">
                  Weekly Absents
                </div>
                <div>
                  {" "}
                  <RadarChart
                    role="Employees"
                    color="#29CC6A"
                    shadowColor="#dcfce7"
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SuperuserLayout>
  );
};

export default Dashboard;
