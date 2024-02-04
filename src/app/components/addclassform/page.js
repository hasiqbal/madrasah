import React from "react";

const AddCLassForm = () => {
  return (
    <section class="bg-white ">
      <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 class="mb-4 text-xl font-bold text-gray-900 ">Add a new class</h2>
        <form action="#">
          <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div class="sm:col-span-2">
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Some field
              </label>
              <input
                type="text"
                name="name"
                id="name"
                class="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full  p-2.5 "
                placeholder="Some dummy text"
                required=""
              />
            </div>
            <div class="w-full">
              <label
                for="brand"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Some field{" "}
              </label>
              <input
                type="text"
                name="brand"
                id="brand"
                class="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full  p-2.5 "
                placeholder="Some dummy text"
                required=""
              />
            </div>
            <div class="w-full">
              <label
                for="price"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Some field
              </label>
              <input
                type="number"
                name="price"
                id="price"
                class="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full  p-2.5 "
                placeholder="$2999"
                required=""
              />
            </div>
            <div>
              <label
                for="category"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Some field
              </label>
              <select
                id="category"
                class="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full  p-2.5 "
              >
                <option selected="">Select Class</option>
                <option value="TV">TV/Monitors</option>
                <option value="PC">PC</option>
                <option value="GA">Gaming/Console</option>
                <option value="PH">Phones</option>
              </select>
            </div>
            <div>
              <label
                for="item-weight"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Some field
              </label>
              <input
                type="number"
                name="item-weight"
                id="item-weight"
                class="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full  p-2.5 "
                placeholder="12"
                required=""
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="description"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Some field
              </label>
              <textarea
                id="description"
                rows="8"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none "
                placeholder="Your description here"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-greenColor rounded-lg  hover:bg-emerald-500"
          >
            Add Class
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddCLassForm;
