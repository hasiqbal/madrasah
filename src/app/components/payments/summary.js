import React from "react";
import Summarydetails from "./summarydetails";

const Summary = () => {
  return (
    <div className="bg-emerald-800 text-white px-3 rounded-lg">
      <div className="flex justify-between py-4 border-b">
        <div className="font-bold text-xl">Summary</div>
        <div>
          <select
            defaultValue="Yesterday"
            className="focus:outline-none bg-emerald-800 text-sm font-light"
            name="date"
            id="date"
          >
            <option value="Some Value">Some Value</option>
            <option value="Some Value">Some Value</option>
            <option value="Some Value">Some Value</option>
            <option value="Some Value">Some Value</option>
            <option value="Some Value">Some Value</option>
          </select>
        </div>
      </div>
      <div>
        <Summarydetails />
        <Summarydetails />
      </div>
      <div className="py-3">
        <div className="flex items-center justify-between">
          <div className="font-semibold">Balance</div>
          <div className="text-xl text-blue-400">USD 150.00</div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
