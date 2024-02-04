import Chatbox from "@/app/components/chat/chatbox";
import Profilelist from "@/app/components/chat/profilelist";
import SuperuserLayout from "@/app/components/layout/superuserlayout/page";
import React from "react";

const Login = () => {
  return (
    <SuperuserLayout>
      <div className="flex">
        <div className="w-full sm:w-1/3">
          <Profilelist />
        </div>

        <div className="hidden sm:block sm:w-2/3">
          <Chatbox />
        </div>
      </div>
    </SuperuserLayout>
  );
};

export default Login;
