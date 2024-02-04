"use client";
import React, { useState, useEffect } from "react";
import CircularProgressBar from "@/app/components/common/circularbar/page";
import { FaFileExport, FaFilter, FaSearch } from "react-icons/fa";
import UserCard from "@/app/components/usercard/page";
import SuperuserLayout from "@/app/components/layout/superuserlayout/page";
import { useDispatch } from "react-redux";
import { fetchUsers } from "@/store/reducer/admin/fetchUsersReducer";

const Users = () => {
  const [users, setUsers] = useState([]);

  const dispatch = useDispatch();
  //  to fetch users
  useEffect(() => {
    // Dispatch the action to fetch users
    dispatch(fetchUsers())
      .then((response) => {
        // Assuming response.data is an array of users

        setUsers(response.data.users);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const pendingUsers = (status) => {
    return users.filter((user) => user.status === status).length;
  };
  const countTeachers = () => {
    return users.filter(
      (user) => user.teacher === true && user.status === "approved"
    ).length;
  };

  const countStudents = () => {
    return users.filter(
      (user) => user.teacher === false && user.status === "approved"
    ).length;
  };

  const studentsCount = countStudents();
  const teachersCount = countTeachers();
  const pendingCount = pendingUsers("pending");

  return (
    <SuperuserLayout>
      <div className="bg-card lg:flex lg:justify-center">
        <div className="md:flex md:justify-center">
          <div class="flex justify-center">
            <CircularProgressBar
              percentage={studentsCount}
              color="#29CC6A"
              title="Students"
            />
          </div>
          <div class="flex justify-center">
            <CircularProgressBar
              percentage={teachersCount}
              color="#FC5555"
              title="Teachers"
            />
          </div>
        </div>
        <div class="flex justify-center">
          <CircularProgressBar
            percentage={pendingCount}
            color="#F2C94C"
            title="Pending"
          />
        </div>
      </div>
      <div className="p-2 flex items-center justify-between ">
        <div className="flex items-center mx-2">
          <div>Users</div>
          <div className="mx-2">
            {" "}
            <form action="#" method="GET" className="hidden lg:block lg:pl-2">
              <label for="topbar-search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1 lg:w-96">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <FaSearch className="text-gray-500" />
                </div>
                <input
                  type="text"
                  name="email"
                  id="topbar-search"
                  className="bg-card border border-card text-textColor sm:text-sm rounded-lg focus:outline-none  block w-full pl-10 p-2.5 "
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
        </div>
        <div className=" flex items-center">
          <button
            className="mx-2  bg-transparent border border-card  text-lightText rounded-[14px] p-3 float-right md:flex md:items-center md:justify-center"
            // onClick={openFilterModal}
          >
            <FaFilter className="mx-2 hidden md:block" />
            Filter
          </button>
          <button
            className="mx-2  bg-card border border-card  text-lightText rounded-[14px] p-3 float-right md:flex md:items-center md:justify-center"
            // onClick={openFilterModal}
          >
            <FaFileExport className="mx-2 hidden md:block" />
            Export
          </button>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md ">
        <div className="flex w-full justify-center text-gray-500">
          <div className="flex flex-col bg-card w-full">
            <div className="flex bg-card border-b uppercase">
              <div className="w-1/3 px-6 py-3">Students</div>
              <div className="w-1/3 px-6 py-3">Teachers</div>
              <div className="w-1/3 px-6 py-3">Pending</div>
            </div>
            <div className="flex bg-card border-b">
              <div className="w-1/3 px-6 py-4">
                {users
                  .filter(
                    (user) =>
                      user.teacher === false && user.status === "approved"
                  )
                  .map((studentUser) => (
                    <UserCard
                      key={studentUser._id}
                      btnColor="bg-greenColor"
                      name={`${studentUser.firstName} ${studentUser.lastName}`}
                      email={studentUser.email}
                      status="Student"
                    />
                  ))}
              </div>
              <div className="w-1/3 px-6 py-4">
                {users
                  .filter((user) => user.teacher === true)
                  .map((teacherUser) => (
                    <UserCard
                      key={teacherUser._id}
                      btnColor="bg-redColor"
                      name={`${teacherUser.firstName} ${teacherUser.lastName}`}
                      email={teacherUser.email}
                      status="Teacher"
                    />
                  ))}
              </div>
              <div className="w-1/3 px-6 py-4">
                {users
                  .filter((user) => user.status === "pending")
                  .map((pendingUser) => (
                    <UserCard
                      isAdmin={true}
                      key={pendingUser._id}
                      btnColor="bg-yellowColor"
                      name={`${pendingUser.firstName} ${pendingUser.lastName}`}
                      email={pendingUser.email}
                      status="Pending"
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SuperuserLayout>
  );
};

export default Users;
