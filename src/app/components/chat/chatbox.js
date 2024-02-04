import React from "react";
import Chatheader from "./chatheader";
import Inputmessage from "./inputmessage";
import Chat from "./chat";

const Chatbox = () => {
  return (
    <div className="relative h-screen border border-gray-200 flex flex-col">
      <div className="absolute w-full top-0 z-50">
        <Chatheader />
      </div>
      <div className="p-4 my-16 flex-grow overflow-auto">
        <div className="flex items-center justify-center py-6">
          <hr className="mr-4 w-1/3" />
          <div className="text-center text-xs text-gray-500">Yesterday</div>
          <hr className="ml-4 w-1/3" />
        </div>
        <Chat type={"sender"} message={"Hi"} time={"6:40 PM"} />
        <Chat
          type={"receiver"}
          message={"Hello, How're you 👋"}
          time={"6:40 PM"}
        />
        <Chat
          type={"sender"}
          message={"I'm doing great and you?"}
          time={"6:40 PM"}
        />
        <Chat type={"sender"} message={"Hi"} time={"7:40 PM"} />
        <Chat
          type={"receiver"}
          message={"Hello, How're you 👋"}
          time={"7:40 PM"}
        />
        <Chat
          type={"sender"}
          message={"I'm doing great and you?"}
          time={"6:40 PM"}
        />
      </div>
      <div className="w-full absolute bottom-0 z-50">
        <Inputmessage />
      </div>
    </div>
  );
};

export default Chatbox;
