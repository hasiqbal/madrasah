import SendMailComponent from "@/app/components/admin/sendmail/page";
import SuperuserLayout from "@/app/components/layout/superuserlayout/page";
import React from "react";

const SendMail = () => {
  return (
    <SuperuserLayout>
      <SendMailComponent />
    </SuperuserLayout>
  );
};

export default SendMail;
