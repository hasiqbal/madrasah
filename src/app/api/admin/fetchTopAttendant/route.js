import { NextResponse } from "next/server";
import connectDb from "../../../../../backend/middleware/db";
import AttendanceModel from "../../../../../backend/models/Attendance";
import UserModel from "../../../../../backend/models/User";
import moment from "moment";

const fetchTopAttendeesHandler = async () => {
  try {
    // Calculate a broader date range for testing purposes (e.g., three months)
    const startDate = moment().subtract(3, "months").startOf("month").toDate();
    const endDate = moment().endOf("month").toDate();

    // Find total workdays in the broader date range
    const totalWorkdays = moment(endDate).diff(startDate, "days") + 1;

    // Aggregate attendance records within a broader date range for testing
    const userAttendanceData = await AttendanceModel.aggregate([
      {
        $match: {
          checkIn: { $gte: startDate, $lte: endDate },
        },
      },
      {
        $group: {
          _id: "$userId",
          totalCheckIns: { $sum: 1 },
        },
      },
    ]);

    // Fetch first and last names of the attendees from UserModel
    const userIds = userAttendanceData.map((attendant) => attendant._id);
    const attendeesInfo = await UserModel.find(
      { _id: { $in: userIds } },
      "firstName lastName"
    );

    // Calculate percentage of attendance for each user
    const topAttendeesWithPercentage = userAttendanceData.map((attendant) => {
      const userInfo = attendeesInfo.find((user) => user._id.equals(attendant._id));
      const attendancePercentage = Math.round((attendant.totalCheckIns / totalWorkdays) * 100);

      return {
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        attendancePercentage,
      };
    });

    // Sort attendees based on attendance percentage in descending order
    const sortedTopAttendees = topAttendeesWithPercentage.sort(
      (a, b) => b.attendancePercentage - a.attendancePercentage
    );

    // Select top 5 attendees with the highest attendance percentage
    const top5Attendees = sortedTopAttendees.slice(0, 5);

    return NextResponse.json(
      {
        topAttendees: top5Attendees,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error fetching top attendees:", error);
    return NextResponse.json(
      {
        message: "Failed to fetch top attendees",
      },
      {
        status: 500,
      }
    );
  }

  // Ensure a response is always returned
  return NextResponse.json(
    {
      message: "Unexpected error occurred",
    },
    {
      status: 500,
    }
  );
};

export const GET = connectDb(fetchTopAttendeesHandler);
