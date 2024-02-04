"use client";
import React, { useState, useEffect } from "react";
import { addUser } from "@/store/reducer/admin/addUserReducer";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { fetchTeachers } from "@/store/reducer/admin/fetchTeachersReducer";
import { fetchClasses } from "@/store/reducer/admin/fetchClassesReducer";

const RegisterUser = () => {
  const dispatch = useDispatch();
  const [teachers, setTeachers] = useState([]);

  const [classes, setClasses] = useState([]);

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    // Dispatch the addBlog action with the form data and headers
    data.status = "pending";
    await dispatch(addUser(data));
  };

  // to fetch teachers
  useEffect(() => {
    // Dispatch the action to fetch teachers
    dispatch(fetchTeachers())
      .then((response) => {
        // Assuming response.data is an array of teachers
        console.log(response.data);
        setTeachers(response.data.teachers);
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
    <div>
      {" "}
      <section className="bg-card ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="flex ">
            <div className=" w-full lg:w-1/2 bg-white shadow  md:mt-0 xl:p-0 ">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-lg font-bold leading-tight tracking-tight text-textColor md:text-2xl ">
                  Register User
                </h1>

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
                            <option
                              key={singleClass._id}
                              value={singleClass.name}
                            >
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
                    Enroll Now
                  </button>
                </form>
              </div>
            </div>
            <div className="hidden lg:block lg:w-1/2 content bg-greenColor">
              <section className="bg-transparent">
                <div className=" px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-28">
                  <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl text-white">
                      User Registeration
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl ">
                      Welcome to Jamimasjid Noorani Online Learning Platform!
                      Register now to unlock a world of Islamic education,
                      featuring diverse courses, experienced instructors, and a
                      vibrant community. Join us on this flexible and engaging
                      online journey towards knowledge and enlightenment.
                    </p>

                    <button className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">
                      Get started
                      <svg
                        className="w-5 h-5 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterUser;
