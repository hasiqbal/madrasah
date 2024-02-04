import ItemManagement from "@/app/components/itemmanagement/page";
import SuperuserLayout from "@/app/components/layout/superuserlayout/page";
import React from "react";

const Management = () => {
  return (
    <SuperuserLayout>
      <ItemManagement />
    </SuperuserLayout>
  );
};

export default Management;
