import React from "react";
import InfoCard from "../infocard/page";

const Jumbotron = (props) => {
  return (
    <div className="bg-slate-800 text-white lg:relative">
      <div className="md:flex md:justify-between md:items-center p-5 md:p-[45px]">
        <div className="flex gap-2 items-center">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYuyukp1DVQ8tzy235UyRQAj48wZ4h7Vs3m38HgRkU9CVtC-iPqrjXdjPpedTzmsHUOxs&usqp=CAU"
              className="rounded-full w-10 h-10"
            />
          </div>
          <div className="">
            <div className="flex gap-2 items-center mb-1">
              <div>Hello !</div>
              <div>
                {" "}
                <img src="/images/svg/handshake.svg" className="w-8 h-8" />
              </div>
            </div>
            <div className="text-gray-400 text-xs">
              We Hope you're having a good day
            </div>
          </div>
        </div>
        <div className="my-3 md:flex gap-2">
          {/* select boxes  */}

          <select
            id="classes"
            class="my-3 bg-slate-700 border border-slate-600 text-white text-sm rounded-lg focus:outline-none block w-full px-4 py-2.5 "
          >
            <option selected>All Classes</option>
            <option value="US">United States</option>
            <option value="CA">Morning</option>
            <option value="FR">Evening</option>
            <option value="DE">Night</option>
          </select>
          <div class="w-full">
            <input
              type="date"
              id="simple-search"
              class="my-3 bg-slate-700 border border-slate-600 text-white text-sm rounded-lg focus:outline-none block w-full px-4 py-2.5"
              placeholder="Last 30 days"
              required
            />
          </div>
          <div className="w-full">
            <button className="my-3 flex items-center gap-2 bg-greenColor text-white rounded-md px-4 py-2 w-full">
              <img src="/images/svg/filter.svg" className="w-6 h-6" />
              Filter
            </button>
          </div>
        </div>
      </div>
      <div className="relative my-4">
        <div className="p-5 lg:p-[35px] bg-transparent w-full lg:absolute lg:bottom-[-75px] flex flex-wrap gap-2 justify-between ">
          {props.stats && props.isAdmin ? (
            <>
              <InfoCard
                bgColor="white"
                textColor="gray-950"
                content="Total Students"
                stats={props.stats.approvedStudentsCount}
              />
              <InfoCard
                bgColor="white"
                textColor="gray-950"
                content="Total Teachers"
                stats={props.stats.teachersCount}
              />
              <InfoCard
                bgColor="white"
                textColor="gray-950"
                content="Pending Students"
                stats={props.stats.pendingStudentsCount}
              />
              <InfoCard
                bgColor="white"
                textColor="gray-950"
                content="No. Of Incidents"
                stats={props.stats.alertsCount}
              />
            </>
          ) : props.stats && !props.isAdmin ? (
            <>
              <InfoCard
                bgColor="white"
                textColor="gray-950"
                content="Total Assignments"
                stats={props.stats.totalStudentAssignments}
              />
              <InfoCard
                bgColor="white"
                textColor="gray-950"
                content="Pending Assignments"
                stats={props.stats.pendingStudentAssignments}
              />
              <InfoCard
                bgColor="white"
                textColor="gray-950"
                content="Due Assignments"
                stats={props.stats.dueStudentAssignments}
              />
              <InfoCard
                bgColor="white"
                textColor="gray-950"
                content="Total Alerts"
                stats={props.stats.totalAlerts}
              />
            </>
          ) : (
            <>
              <InfoCard
                bgColor="white"
                textColor="gray-950"
                content="Total Students"
                stats="..."
              />
              <InfoCard
                bgColor="white"
                textColor="gray-950"
                content="Total Teachers"
                stats="..."
              />
              <InfoCard
                bgColor="white"
                textColor="gray-950"
                content="Pending Students"
                stats="..."
              />
              <InfoCard
                bgColor="white"
                textColor="gray-950"
                content="No. Of Incidents"
                stats="..."
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
