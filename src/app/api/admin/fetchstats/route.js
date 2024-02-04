// Import necessary modules and models
import { NextResponse } from "next/server";
import connectDb from "../../../../../backend/middleware/db";
import AlertModel from "../../../../../backend/models/Alert";
import UserModel from "../../../../../backend/models/User";

const getDashboardStatsHandler = async () => {
  try {
    // Fetch total number of students whose status is approved
    const approvedStudentsCount = await UserModel.countDocuments({
      status: "approved",
      teacher: false,
    });

    // Fetch total number of students whose status is pending
    const pendingStudentsCount = await UserModel.countDocuments({
      status: "pending",
    });

    // Fetch total number of teachers
    const teachersCount = await UserModel.countDocuments({ teacher: true });

    // Fetch total number of alerts
    const alertsCount = await AlertModel.countDocuments();

    return NextResponse.json(
      {
        approvedStudentsCount,
        pendingStudentsCount,
        teachersCount,
        alertsCount,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    return NextResponse.json(
      {
        message: "Failed to fetch dashboard stats",
      },
      {
        status: 500,
      }
    );
  }
};

export const GET = connectDb(getDashboardStatsHandler);
