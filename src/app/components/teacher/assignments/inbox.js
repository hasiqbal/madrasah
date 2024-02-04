import React from "react";
import Chatprofile from "./chatprofile";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";

const InboxCard = () => {
  return (
    <div className="w-full border rounded-lg">
      <div className="flex justify-between items-center text-sm mb-2 border-b p-4">
        <div className="flex items-center font-bold gap-2">
          <div className="whitespace-nowrap">Inbox</div>
          <div className="text-lg text-green-700">
            <IoChatboxEllipsesSharp />
          </div>
        </div>
      </div>
      <div className="my-4">
        <Chatprofile unreadNo={10} />
        <Chatprofile unreadNo={1} />
        <Chatprofile unreadNo={0} />
        <Chatprofile />
      </div>
    </div>
  );
};

export default InboxCard;
