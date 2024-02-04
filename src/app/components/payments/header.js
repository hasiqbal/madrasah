import React from "react";

const Header = () => {
  return (
    <div className="space-y-4 md:space-y-0 md:flex items-center justify-between py-8">
      <div>
        <div className="font-extrabold text-2xl sm:text-3xl">Payments</div>
        <div className="w-full md:w-2/3 text-xs mt-2 sm:whitespace-nowrap text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione atque
          quidem tenetur,
        </div>
      </div>
      <div className="flex gap-4 text-white text-sm">
        <button className="bg-greenColor srounded-lg px-6 py-3">
          Create Transaction
        </button>
        <button className="bg-blue-700 rounded-lg px-6 py-3">Withdrawl</button>
      </div>
    </div>
  );
};

export default Header;
