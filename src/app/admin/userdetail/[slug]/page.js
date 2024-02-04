"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaDownload, FaSignInAlt, FaSort } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";

import {
  FiFilter,
  FiGrid,
  FiLogIn,
  FiLogOut,
  FiShield,
  FiUserCheck,
} from "react-icons/fi";
// import { fetchUserDetails } from "@/store/reducer/common/viewUserDetailReducer";
// import { fetchFeedbacks } from "@/store/reducer/common/fetchFeedbackReducer";
import BreadCrumb from "@/app/components/common/breadcrumb/page";
import UserDetailCard from "@/app/components/userdetailcard/page";
import SuperuserLayout from "@/app/components/layout/superuserlayout/page";
import { fetchUserDetails } from "@/store/reducer/common/viewUserDetailReducer";

export default function Page() {
  const [userDetail, setUserDetail] = useState([]);
  const dispatch = useDispatch();
  const userDetails = {
    user: {
      firstName: "John",
      lastName: "Doe",
      teamLead: true,
      email: "john.doe@example.com",
    },
    assignments: {
      pending: 5,
      total: 18,
      done: 10,
      rejected: 3,
      assignmentHistory: [
        {
          assignmentName: "Task A",
          status: "Pending",
          assignedDate: new Date("2023-11-10"),
          completedDate: null,
        },
        {
          assignmentName: "Task B",
          status: "Done",
          assignedDate: new Date("2023-11-12"),
          completedDate: new Date("2023-11-14"),
        },
        {
          assignmentName: "Task C",
          status: "Rejected",
          assignedDate: new Date("2023-11-13"),
          completedDate: null,
        },
        // Add more assignment history items if needed
        // ...
      ],
    },
  };

  const feedbacks = [
    {
      id: 1,
      user: "Jane Doe",
      comment: "Great work!",
      rating: 5,
    },
    // Add more feedback items if needed
    // ...
  ];
  const pathname = usePathname();
  const parts = pathname.split("/");
  const email = parts[parts.length - 1];

  useEffect(() => {
    dispatch(fetchUserDetails(email))
      .then((response) => {
        // Assuming response.data is an array of feedbacks
        setUserDetail(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching alerts:", error);
      });
  }, []);
  const userDetailCards = [
    {
      textColor: "text-yellowColor",
      background: "bg-yellow-100",
      status: "due",
    },
    {
      textColor: "text-redColor",
      background: "bg-red-100",
      status: "pending",
    },
    {
      textColor: "text-greenColor",
      background: "bg-green-100",
      status: "submitted",
    },

    // Add more cards here if needed
    // ...
  ];

  //  grid mode
  const [isGridMode, setIsGridMode] = useState(true);

  // Event handler for toggling layout mode
  const toggleLayoutMode = () => {
    setIsGridMode((prevMode) => !prevMode);
  };
  // pagination

  const CardsPerPage = 6; // Number of cards to display per page
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const renderCards = () => {
    if (!userDetail || !userDetail.assignments) {
      return <p>Loading...</p>;
    }

    const { assignments } = userDetail;
    const startIndex = currentPage * CardsPerPage;
    const endIndex = startIndex + CardsPerPage;

    const dateFormatter = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    return assignments.slice(startIndex, endIndex).map((assignment, index) => {
      let formattedAssignedDate = "Not Available";
      let formattedCompletedDate = "Not Completed Yet";

      if (assignment.dueDate && typeof assignment.dueDate === "string") {
        const assignedDate = new Date(assignment.dueDate);
        if (!isNaN(assignedDate)) {
          formattedAssignedDate = dateFormatter.format(new Date());
        }
      }

      if (assignment.dueDate && typeof assignment.dueDate === "string") {
        const completedDate = new Date(assignment.dueDate);
        if (!isNaN(completedDate)) {
          formattedCompletedDate = dateFormatter.format(completedDate);
        }
      }

      const matchingCard = userDetailCards.find(
        (userCard) => userCard.status === assignment.status
      );

      const textColor = matchingCard
        ? matchingCard.textColor
        : "text-textColor";
      const background = matchingCard ? matchingCard.background : "bg-gray-100";

      return (
        <div key={index} className="mb-2">
          <UserDetailCard
            msg1="Current Date"
            msg2="Due Date"
            check_in={formattedAssignedDate}
            check_out={formattedCompletedDate}
            created_at="March 08 2023"
            textColor={textColor}
            background={background}
            status={assignment.status}
            current_date={assignment.assignmentName}
          />
        </div>
      );
    });
  };

  //  for classes details
  const renderUserClasses = () => {
    if (!userDetail || !userDetail.userClasses) {
      return <p>Loading...</p>;
    }

    return userDetail.userClasses.map((userClass, index) => (
      <div key={index} className="mb-2">
        <UserDetailCard
          icon={<FaSignInAlt />}
          attendanceTitle={userClass.name || "..."}
          attendanceCount={userClass.teacher || "..."}
        />
      </div>
    ));
  };

  //   to get first characters of name
  const firstName = (userDetail?.user?.firstName || "")[0];
  const lastName = (userDetail?.user?.lastName || "")[0];

  return (
    <SuperuserLayout>
      <div className="mx-2">
        <div className="card rounded-lg shadow bg-card p-2 my-2">
          {/* card header start */}
          <div className="flex justify-between items-center my-2">
            <BreadCrumb text="Student Details" />
            <button className="flex items-center text-white text-sm text-center bg-greenColor p-2 rounded-lg">
              <FaDownload className="text-white mx-2" /> Download Info
            </button>
          </div>
          {/* card header ends  */}

          {/* basic info start  */}
          <div className="flex mb-2 items-center">
            <div className="w-24 h-24 rounded-full bg-greenColor text-2xl font-bold uppercase text-white flex items-center justify-center">
              {firstName} {lastName}
            </div>
            <div className="mx-2">
              <div className="text-textColor text-xl md:text-2xl mb-2 px-6 py-3 flex items-center">
                {userDetails ? userDetail?.user?.firstName || "..." : "..."}{" "}
                {userDetail?.user?.hifzstudent && (
                  <div className="mx-2 rounded-full bg-themeColor p-2">
                    {" "}
                    <FiShield className="text-white" />
                  </div>
                )}
              </div>

              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left ">
                  <thead className="text-xs  text-gray-500 uppercase bg-transparent">
                    <tr>
                      <td scope="col" className="px-6 py-3 ">
                        First Name
                      </td>
                      <td scope="col" className="px-6 py-3 ">
                        Last Name
                      </td>
                      <td scope="col" className="px-6 py-3">
                        Email
                      </td>

                      <td scope="col" className="px-6 py-3 ">
                        Fee
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-transparent text-textColor">
                      <th className="px-6 py-4 font-md">
                        {userDetail?.user?.firstName || "..."}
                      </th>
                      <th className="px-6 py-4 font-md">
                        {" "}
                        {userDetail?.user?.lastName || "..."}
                      </th>
                      <th className="px-6 py-4 font-md">
                        {" "}
                        {userDetail?.user?.email || "..."}
                      </th>

                      <th className="px-6 py-4 font-md bg-emerald-100 text-center text-greenColor rounded ">
                        Done
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* basic info end  */}
          {/* user detail card start */}
          <div className="mb-2 flex flex-wrap justify-between p-2">
            <div className="mb-2">
              <UserDetailCard
                icon={<FaSignInAlt />}
                attendanceTitle="Total Assignments"
                attendanceCount={userDetail?.assignments?.length || "..."}
              />
            </div>
            <div className=" mb-2">
              <UserDetailCard
                icon={<FiLogIn />}
                attendanceTitle="Submitted Assignments"
                attendanceCount={userDetail?.assignments?.length || "..."}
              />
            </div>
            <div className=" mb-2">
              <UserDetailCard
                icon={<FiLogOut />}
                attendanceTitle="Pending Assignments"
                attendanceCount={userDetail?.assignments?.length || "..."}
              />
            </div>
            <div className=" mb-2">
              <UserDetailCard
                icon={<FiUserCheck />}
                attendanceTitle="Due Assignments"
                attendanceCount={userDetail?.assignments?.length || "..."}
              />
            </div>
          </div>
          {/* user detail card end  */}
        </div>
        {/* attendance history start  */}
        <div className="card rounded-lg shadow bg-card p-2 my-2">
          <div className="flex justify-between items-center my-2">
            <BreadCrumb text="Assignment History" />
            <div className="flex items-center">
              <button
                className={`mx-1 text-white text-sm text-center p-2 rounded-lg ${
                  isGridMode ? "bg-themeColor" : "bg-textColor"
                }`}
                onClick={toggleLayoutMode}
              >
                <FiGrid className="text-white" />
              </button>
              <button
                className={`mx-1 text-white text-sm text-center p-2 rounded-lg ${
                  isGridMode ? "bg-textColor" : "bg-themeColor"
                }`}
                onClick={toggleLayoutMode}
              >
                <FaBars className="text-white" />
              </button>
              <button className="mx-1 flex items-center text-white text-sm text-center bg-textColor p-2 rounded-lg">
                <FiFilter className="text-white mx-1" /> Filter
              </button>
              <button className="mx-1 flex items-center text-white text-sm text-center bg-textColor p-2 rounded-lg">
                <FaSort className="text-white mx-1" /> Sort
              </button>
            </div>
          </div>
          <div
            className={`mb-2 ${
              isGridMode ? "flex flex-wrap justify-between p-2" : ""
            }`}
          >
            {renderCards()}
          </div>
        </div>
        {/* attendance history ends  */}
        {/* teacher and classes details start */}
        <div className="card rounded-lg shadow bg-card p-2 my-2">
          {/* card header start */}
          <div className="flex justify-between items-center my-2">
            <BreadCrumb text="Teacher and Class Details" />
          </div>
          {/* card header ends  */}

          {/* user detail card start */}
          <div className="mb-2 flex flex-wrap justify-between p-2">
            {renderUserClasses()}
          </div>
          {/* user detail card end  */}
        </div>
        {/* teacher and classes details ends  */}
        {/* Pagination */}
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          breakLabel="..."
          pageCount={
            userDetails && userDetails.attendanceHistory
              ? Math.ceil(userDetails.attendanceHistory.length / CardsPerPage)
              : Math.ceil(userDetailCards.length / CardsPerPage)
          }
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName="pagination flex justify-center my-4"
          previousClassName="px-3 py-2 rounded-lg bg-gray-300 text-gray-700 cursor-pointer"
          nextClassName="px-3 py-2 rounded-lg bg-gray-300 text-gray-700 cursor-pointer"
          pageClassName="px-3 py-2 rounded-lg bg-gray-300 text-gray-700 cursor-pointer mx-1"
          breakClassName="px-3 py-2 rounded-lg bg-gray-300 text-gray-700 cursor-pointer mx-1"
          activeClassName="bg-greenColor text-white px-3 py-2 rounded-lg mx-1"
        />
        {/* Pagination end */}
      </div>
    </SuperuserLayout>
  );
}
