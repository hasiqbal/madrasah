import Link from "next/link";
import React from "react";

const ItemManagement = () => {
  return (
    <div>
      <section class="bg-white ">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
            Manage Users
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 ">
            From here you can add teachers , students or classes
          </p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Link
              href="adduser"
              class="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100  "
            >
              Add Student
            </Link>
            <Link
              href="addclass"
              class="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-emerald-400  bg-greenColor focus:ring-4 focus:ring-gray-100  "
            >
              Add Class
            </Link>

            <Link
              href="adduser"
              class="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100  "
            >
              Add Teacher
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItemManagement;
