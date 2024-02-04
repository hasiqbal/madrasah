import { NextResponse } from "next/server";
import AttendanceModel from "../../../../../backend/models/Attendance";
import connectDb from "../../../../../backend/middleware/db";
import LeaveModel from "../../../../../backend/models/Leave";
import UserModel from "../../../../../backend/models/User";

const singleUserDetail = async (request) => {
  try {
    const { email } = await request.json();

    // Fetch user details based on the email
    const user = await UserModel.findOne(
      { email },
      "firstName lastName email teacher teachers hifzstudent studentClass"
    );

    if (!user) {
      return NextResponse.json(
        {
          message: "User not found",
        },
        {
          status: 404,
        }
      );
    }

    const userId = user._id;

    // Calculate attendance statistics
    const attendanceCount = await AttendanceModel.countDocuments({ userId });
    const totalCheckouts = await AttendanceModel.countDocuments({
      userId,
      checkOut: { $exists: true },
    });
    const totalPendingLeaves = await LeaveModel.countDocuments({
      userId,
      status: "Pending",
    });
    const totalApprovedLeaves = await LeaveModel.countDocuments({
      userId,
      status: "Approved",
    });
    const totalRejectedLeaves = await LeaveModel.countDocuments({
      userId,
      status: "Rejected",
    });

    // Fetch attendance history
    const attendanceHistory = await AttendanceModel.find({ userId });

    return NextResponse.json(
      {
        message: "User details retrieved successfully",
        user: {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          teacher: user.teacher,
          teachers: user.teachers,
          hifzstudent: user.hifzstudent,
          studentClass: user.studentClass,
        },
        attendanceCount,
        totalCheckouts,
        totalApprovedLeaves,
        totalPendingLeaves,
        totalRejectedLeaves,
        attendanceHistory,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error retrieving user details:", error);
    return NextResponse.json(
      {
        message: "Failed to retrieve user details",
      },
      {
        status: 500,
      }
    );
  }
};

export const POST = connectDb(singleUserDetail);
