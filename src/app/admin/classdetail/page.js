import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import Classdescription from "@/app/components/classdetails/classdescription";
import Assignments from "@/app/components/classdetails/assignments";
import SuperuserLayout from "@/app/components/layout/superuserlayout/page";

const ClassPage = () => {
  return (
    <SuperuserLayout>
      <div className="m-0">
        <div className="bg-blue-700 w-full h-screen sm:h-[60vh] md:h-[55vh] -z-50 p-10 relative">
          {/* Breadcumb */}
          <div className="flex items-center gap-2 text-xs text-white ">
            <div>My Classes</div>
            <IoIosArrowForward />
            <div>Current Class Name</div>
          </div>
          {/* Content */}
          <div className="text-white my-8">
            <div className="font-extrabold text-2xl sm:text-3xl">
              Current Class Name
            </div>
            <div className="w-full md:w-2/3 text-sm mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              atque quidem tenetur, soluta quaerat officiis illo repellat
              inventore hic. Qui vero quod quia eum natus omnis doloremque iusto
              repellendus incidunt?
            </div>
            <div className="my-8">
              <button className="bg-blue-950 rounded-xl px-6 py-3">
                Start Now
              </button>
            </div>
          </div>
          <div className="absolute right-2 bottom-0 -z-10 max-h-[40vh] md:max-h-full">
            <Image
              src={"/class.png"}
              width={300}
              height={300}
              className="rounded-full"
              alt="ProfileImg"
            />
          </div>
        </div>

        <div className="p-4 sm:p-10 space-y-10 bg-white">
          {/* Class Description */}
          <Classdescription />

          {/* Assignments */}
          <Assignments />
        </div>
      </div>
    </SuperuserLayout>
  );
};

export default ClassPage;
