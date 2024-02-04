import SuperuserLayout from "@/app/components/layout/superuserlayout/page";
import Header from "@/app/components/payments/header";
import Searchbar from "@/app/components/payments/searchbar";
import Summary from "@/app/components/payments/summary";
import Table from "@/app/components/payments/table";
import React from "react";

const Page = () => {
  return (
    <SuperuserLayout>
      <div className="m-2 p-3 bg-gray-100 rounded space-y-5">
        <div>
          <Header />
        </div>
        <div>
          <Searchbar />
        </div>
        <div className="md:flex item-center gap-4 space-y-4 md:space-y-0">
          <div className="w-full md:w-3/4">
            <Table />
          </div>
          <div className="w-full md:w-1/4">
            <Summary />
          </div>
        </div>
      </div>
    </SuperuserLayout>
  );
};

export default Page;
