"use client";
import React, { useState, useEffect } from "react";
import SuperuserLayout from "@/app/components/layout/superuserlayout/page";
import { useForm } from "react-hook-form";
import { addUser } from "@/store/reducer/admin/addUserReducer";
import { useDispatch } from "react-redux";
import { fetchTeachers } from "@/store/reducer/admin/fetchTeachersReducer";
import { fetchClasses } from "@/store/reducer/admin/fetchClassesReducer";

const AddUser = () => {
  const dispatch = useDispatch();
  const [teachers, setTeachers] = useState([]);
  const [classes, setClasses] = useState([]);
  const [addUserVal, setAddUserVal] = useState("Add User");
  const [errorVal, setErrorVal] = useState("");

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    
    // Dispatch the addBlog action with the form data and headers
    data.status = "approved";
    await dispatch(addUser(data));
  };

  // to fetch teachers
  useEffect(() => {
    // Dispatch the action to fetch teachers
    dispatch(fetchTeachers())
      .then((response) => {
        // Assuming response.data is an array of teachers
        setTeachers(response.data.teachers);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching teachers:", error);
      });
  }, []);

  // to fetch classes
  useEffect(() => {
    // Dispatch the action to fetch classes
    dispatch(fetchClasses())
      .then((response) => {
        // Assuming response.data is an array of classes
        setClasses(response.data.classes);
      })
      .catch((error) => {
        console.error("Error fetching classes:", error);
      });
  }, []);
  return (
    <SuperuserLayout>
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 ">
            Add a new user
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2 lg:grid lg:grid-cols-2 lg:gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    {...register("firstName", { required: true })}
                    id="firstName"
                    className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    {...register("lastName", { required: true })}
                    id="lastName"
                    className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  id="email"
                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full  p-2.5"
                  placeholder="Email"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  id="password"
                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full  p-2.5"
                  placeholder="Password"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="teacher"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Is Teacher?
                </label>
                <input
                  type="checkbox"
                  {...register("teacher")}
                  id="teacher"
                  className="rounded-lg focus:outline-none"
                />
              </div>
              <div className="sm:col-span-2">
                <select
                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full  p-2.5"
                  {...register("teachers")}
                  id="teachers"
                >
                  <option value="" disabled selected>
                    Choose Teacher
                  </option>
                  {teachers &&
                    teachers.map((teacher) => (
                      <option key={teacher._id} value={teacher.email}>
                        {teacher.firstName}
                      </option>
                    ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="hifzstudent"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Is Hifz Student?
                </label>
                <input
                  type="checkbox"
                  {...register("hifzstudent")}
                  id="hifzstudent"
                  className="rounded-lg focus:outline-none"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="className"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Choose Class
                </label>
                <select
                  id="className"
                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full  p-2.5"
                  {...register("className")}
                >
                  <option value="" disabled selected>
                    Choose Class
                  </option>
                  {classes &&
                    classes.map((singleClass) => (
                      <option key={singleClass._id} value={singleClass.name}>
                        {singleClass.name}
                      </option>
                    ))}
                </select>
              </div>
              {/* Add other fields as needed */}
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-greenColor rounded-lg hover:bg-emerald-500"
            >
              Add User
            </button>
          </form>
        </div>
      </section>
    </SuperuserLayout>
  );
};

export default AddUser;
