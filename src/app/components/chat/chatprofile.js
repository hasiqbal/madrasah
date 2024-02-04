import React from "react";
import Image from "next/image";
import { HiDotsHorizontal } from "react-icons/hi";

const Chatprofile = ({
  profile = "/b.jpg",
  name = "Default Name",
  lastScene = "Last Seen",
  recentMsg = "Default Message",
  unreadNo = null,
  onread = false,
}) => {
  return (
    <div
      className={
        "flex gap-4 w-full rounded-md " +
        (onread ? "bg-greenColor text-white p-3" : "")
      }
    >
      <div className="mt-1">
        <Image
          src={profile}
          width={45}
          height={45}
          className="rounded-full"
          alt="ProfileImg"
        />
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between">
          <div className="">
            <div className={onread ? "font-semibold" : "font-bold"}>{name}</div>
          </div>
          <div className="text-xs">
            <HiDotsHorizontal />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs">{recentMsg}</div>
            <div className="text-xs">{lastScene}</div>
          </div>
          {!unreadNo ? null : (
            <div className="bg-green-500 text-white text-center text-sm w-5 h-5 rounded-[100%]">
              {unreadNo}
            </div>
          )}
        </div>

        {onread ? null : (
          <div className="py-4">
            <hr />
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatprofile;
