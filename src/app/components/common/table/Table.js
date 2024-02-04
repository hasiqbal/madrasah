import React from "react";

const Table = (props) => {
  console.log("top attendant", props.topAttendees.topAttendees);

  // Check if props.topAttendees is an array before mapping
  if (!Array.isArray(props.topAttendees.topAttendees)) {
    return <div>No data available Yet</div>; // Display a message when there's no data
  }

  return (
    <div>
      <div className="relative overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <tbody>
            {props.topAttendees.topAttendees.map((attendee, index) => (
              <tr key={index} className="bg-white border-b hover:bg-gray-50 ">
                <th
                  scope="row"
                  className="flex items-center px-1 py-4 text-gray-900 whitespace-nowrap "
                >
                  {/* Use attendee data */}
                  <div className="ps-3 flex gap-2 items-center">
                    <div className="text-xs text-gray-800 font-normal">
                      {attendee.firstName} {attendee.lastName}
                    </div>
                    <div className="p-1 bg-gray-100 rounded-lg">
                      {attendee.attendancePercentage}%{" "}
                      {/* Use attendancePercentage from the data */}
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">
                  <div className="">
                    <span className="font-bold">30</span> days
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
