"use client";
import Link from "next/link";
import React from "react";

const calculatePercentage = (value, total) => {
  return total !== 0 ? (value / total) * 100 : 0;
};

const truncateTitle = (title, maxLength) => {
  if (title.length > maxLength) {
    return title.substring(0, maxLength) + "...";
  }
  return title;
};

const AdminAnnouncement = ({ alerts }) => {
  console.log(alerts);
  let formattedDate;
  let totalStatusCount = 0;

  if (alerts && alerts.statusCounts) {
    totalStatusCount =
      alerts.statusCounts.Info +
      alerts.statusCounts.Success +
      alerts.statusCounts.Warning +
      alerts.statusCounts.Danger;
  }
  if (alerts && alerts.latestAlert) {
    const formatDate = (dateString) => {
      const options = { year: "numeric", month: "long", day: "numeric" };
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", options);
    };

    formattedDate = formatDate(alerts.latestAlert.createdAt);
  }
  return (
    <div className="p-5 bg-white rounded h-[820px]">
      <div className="text-sm my-2">Recent Announcement</div>
      <div className="text-lg md:text-xl lg:text-2xl font-medium my-2">
        {alerts.latestAlert
          ? truncateTitle(alerts.latestAlert.title, 40)
          : "loading"}
      </div>
      <div>
        <Link
          className="my-3 flex items-center gap-2 bg-greenColor text-white rounded-md px-4 py-2 w-full"
          href="alerts"
        >
          <img src="/images/svg/filter.svg" className="w-6 h-6" />
          View All
        </Link>
      </div>
      <hr></hr>
      <div className="my-5">
        <div className="flex items-center gap-3 my-2">
          <div className="text-xs text-gray-500 w-[120px]">Minor</div>
          <div className="w-full bg-gray-200 rounded-full h-2 ">
            <div
              className="bg-indigo-500 h-2.5 rounded-full"
              style={{
                width: `${calculatePercentage(
                  alerts.statusCounts ? alerts.statusCounts.Info : 0,
                  totalStatusCount
                )}%`,
              }}
            ></div>
          </div>
          <div className="text-xs text-gray-500">
            {" "}
            {alerts.statusCounts ? alerts.statusCounts.Info : "loading"}
          </div>
        </div>
        <div className="flex items-center gap-3 my-2">
          <div className="text-xs text-gray-500 w-[120px]">Normal</div>
          <div className="w-full bg-gray-200 rounded-full h-2 ">
            <div
              className="bg-green-500 h-2.5 rounded-full"
              style={{
                width: `${calculatePercentage(
                  alerts.statusCounts ? alerts.statusCounts.Success : 0,
                  totalStatusCount
                )}%`,
              }}
            ></div>
          </div>
          <div className="text-xs text-gray-500">
            {" "}
            {alerts.statusCounts ? alerts.statusCounts.Success : "loading"}
          </div>
        </div>
        <div className="flex items-center gap-3 my-2">
          <div className="text-xs text-gray-500 w-[120px]">Moderate</div>
          <div className="w-full bg-gray-200 rounded-full h-2 ">
            <div
              className="bg-orange-400 h-2.5 rounded-full"
              style={{
                width: `${calculatePercentage(
                  alerts.statusCounts ? alerts.statusCounts.Warning : 0,
                  totalStatusCount
                )}%`,
              }}
            ></div>
          </div>
          <div className="text-xs text-gray-500">
            {" "}
            {alerts.statusCounts ? alerts.statusCounts.Warning : "loading"}
          </div>
        </div>
        <div className="flex items-center gap-3 my-2">
          <div className="text-xs text-gray-500 w-[120px]">Severe</div>
          <div className="w-full bg-gray-200 rounded-full h-2 ">
            <div
              className="bg-red-500 h-2.5 rounded-full"
              style={{
                width: `${calculatePercentage(
                  alerts.statusCounts ? alerts.statusCounts.Danger : 0,
                  totalStatusCount
                )}%`,
              }}
            ></div>
          </div>
          <div className="text-xs text-gray-500">
            {" "}
            {alerts.statusCounts ? alerts.statusCounts.Danger : "loading"}
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="my-5">
        <div className="flex justify-between items-center ">
          <div className="font-bold">Date</div>
          <div className="text-gray-500 text-sm">
            {" "}
            {alerts.latestAlert ? formattedDate : "loading"}{" "}
          </div>
        </div>
      </div>
      {alerts.latestUserAlert && (
        <div className="my-5">
          <div className="text-sm my-2">Recent Announcement by teacher</div>
          <div className="text-lg md:text-xl lg:text-2xl font-medium my-2">
            {alerts.latestUserAlert
              ? truncateTitle(alerts.latestUserAlert.title, 40)
              : "loading"}
          </div>
          <div className="text-sm my-2 text-gray-500">
            View More Announcements
          </div>
          <div className="my-4 flex gap-2">
            <img
              class="w-12 h-12 rounded-full"
              src="https://previews.123rf.com/images/edhar/edhar1710/edhar171002705/88100279-close-up-face-of-a-successful-business-man.jpg"
              alt="Jese image"
            />
            <img
              class="w-12 h-12 rounded-full"
              src="https://previews.123rf.com/images/edhar/edhar1710/edhar171002705/88100279-close-up-face-of-a-successful-business-man.jpg"
              alt="Jese image"
            />
            <img
              class="w-12 h-12 rounded-full"
              src="https://previews.123rf.com/images/edhar/edhar1710/edhar171002705/88100279-close-up-face-of-a-successful-business-man.jpg"
              alt="Jese image"
            />
            <div className="w-12 h-12 text-white rounded-full bg-greenColor flex items-center justify-center">
              +8
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminAnnouncement;
