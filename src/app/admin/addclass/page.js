"use client";
import React from "react";
import SuperuserLayout from "@/app/components/layout/superuserlayout/page";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addClass } from "@/store/reducer/admin/addClassReducer";

const AddClass = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    // Dispatch the action to add a class with the form data and headers
    await dispatch(addClass(data));
  };

  return (
    <SuperuserLayout>
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 ">
            Add a new class
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Class Name
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  id="name"
                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5"
                  placeholder="Class Name"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="teacher"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Teacher's Email
                </label>
                <input
                  type="text"
                  {...register("teacher")}
                  id="teacher"
                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5"
                  placeholder="Teacher's Email"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="students"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Students' Emails
                </label>
                <input
                  type="text"
                  {...register("students")}
                  id="students"
                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5"
                  placeholder="Students' Email(s)"
                />
              </div>
              {/* Add other fields as needed */}
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-greenColor rounded-lg hover:bg-emerald-500"
            >
              Add Class
            </button>
          </form>
        </div>
      </section>
    </SuperuserLayout>
  );
};

export default AddClass;
