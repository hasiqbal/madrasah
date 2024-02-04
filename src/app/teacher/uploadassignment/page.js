"use client";
import React, { useEffect, useState } from "react";
import SupervisorLayout from "@/app/components/layout/supervisorlayout/page";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { uploadAssignment } from "@/store/reducer/teacher/uploadAssignmentReducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchClasses } from "@/store/reducer/teacher/fetchClassesReducer";

const UploadAssignment = () => {
  const dispatch = useDispatch();
  const [classes, setClasses] = useState([]);

  const { register, handleSubmit } = useForm();
  const showAlertStatusToast = (message) => {
    toast.info(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000, // 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const onSubmit = (data) => {
    dispatch(uploadAssignment(data)).then((response) => {
      showAlertStatusToast("Assignment Uploaded Successfully");
    });
  };

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
    <SupervisorLayout>
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 ">
            Upload an Assignment
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="assignmentName"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Assignment Name
                </label>
                <input
                  type="text"
                  {...register("assignmentName", { required: true })}
                  id="assignmentName"
                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full  p-2.5"
                  placeholder="Assignment Name"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="assignmentMarks"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Marks
                </label>
                <input
                  type="number"
                  placeholder="100"
                  {...register("assignmentMarks", { required: true })}
                  id="assignmentMarks"
                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full  p-2.5"
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
              <div className="sm:col-span-2">
                <label
                  htmlFor="dueDate"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Due Date
                </label>
                <input
                  type="date"
                  {...register("dueDate", { required: true })}
                  id="dueDate"
                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full  p-2.5"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="assignmentDetail"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Assignment Details
                </label>
                <textarea
                  {...register("assignmentDetail")}
                  id="assignmentDetail"
                  rows={8}
                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5"
                  placeholder="Details about the assignment..."
                ></textarea>
              </div>
              {/* <div className="sm:col-span-2">
                <label
                  htmlFor="assignmentFile"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Upload Assignment File
                </label>
                <input
                  type="file"
                  {...register("assignmentFile", { required: true })}
                  id="assignmentFile"
                  className="hidden"
                />
              
                <label
                  htmlFor="assignmentFile"
                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5 cursor-pointer hover:bg-gray-100"
                >
                  Choose File
                </label>
              </div> */}
              {/* Add other fields as needed */}
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-greenColor rounded-lg hover:bg-emerald-500"
            >
              Upload Assignment
            </button>
          </form>
        </div>
        <ToastContainer />
      </section>
    </SupervisorLayout>
  );
};

export default UploadAssignment;
