import React from "react";

const InfoCard = (props) => {
  return (
    <div
      className={`cursor-pointer hover:bg-greenColor hover:text-white bg-${props.bgColor} text-${props.textColor}  w-full md:w-[230px] rounded-lg shadow p-[20px] relative my-2 `}
    >
      <div className="absolute right-2 top-2">...</div>
      <div className="flex items-center gap-3 ">
        <div
          className={`${
            props.textColor === "white" ? "p-2 rounded bg-white" : ""
          }`}
        >
          <img src="/images/svg/user.svg" className="w-8 h-8" />
        </div>
        <div>
          <div className="text-lg font-bold">{props.stats}</div>
          <div
            className={`text-sm font-base hover:text-white ${
              props.textColor === "white" ? "text-white" : "text-gray-400"
            } `}
          >
            {props.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
