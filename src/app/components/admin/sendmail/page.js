import React from "react";

const SendMailComponent = () => {
  return (
    <section class="bg-white ">
      <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 class="mb-4 text-xl font-bold text-gray-900 ">Send mail</h2>
        <form action="#">
          <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div class="sm:col-span-2">
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                To
              </label>
              <select
                id="category"
                class="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full  p-2.5 "
              >
                <option selected="">Select User</option>
                <option value="TV">Ali</option>
                <option value="PC">Osman</option>
                <option value="GA">Zainab</option>
              </select>
            </div>
            <div class="sm:col-span-2">
              <label
                for="brand"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Subject
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
            Send Mail
          </button>
        </form>
      </div>
    </section>
  );
};

export default SendMailComponent;
