// Import necessary modules and models
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connectDb from "../../../../../backend/middleware/db";
import AssignmentModel from "../../../../../backend/models/Assignment";
import UserModel from "../../../../../backend/models/User";
import AlertModel from "../../../../../backend/models/Alert";

const getStudentPersonalStatsHandler = async (request) => {
  try {
    // Obtain the token from the request headers
    const token = request.headers.get("Authorization");
    if (!token) {
      return NextResponse.json(
        {
          message: "Authentication failed. Token not provided.",
        },
        {
          status: 401,
        }
      );
    }

    // Verify the token
    let decodedToken;
    try {
      decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    } catch (error) {
      return NextResponse.json(
        {
          message: "Invalid token.",
        },
        {
          status: 401,
        }
      );
    }

    // Extract userId from the decoded token
    const { userId } = decodedToken;

    // Fetch total number of student assignments for the specific user
    const totalStudentAssignments = await AssignmentModel.countDocuments({
      submittedUsers: userId,
    });

    // Fetch total number of assignments with status "due" for the specific user
    const dueStudentAssignments = await AssignmentModel.countDocuments({
      submittedUsers: userId,
      status: "due",
    });

    // Fetch total number of assignments with status "pending" for the specific user
    const pendingStudentAssignments = await AssignmentModel.countDocuments({
      submittedUsers: userId,
      status: "pending",
    });

    // Fetch total number of assignments with status "submitted" for the specific user
    const submittedStudentAssignments = await AssignmentModel.countDocuments({
      submittedUsers: userId,
      status: "submitted",
    });

    // Fetch total number of alerts for the specific user
    const totalAlerts = await AlertModel.countDocuments({});

    return NextResponse.json(
      {
        totalStudentAssignments,
        dueStudentAssignments,
        pendingStudentAssignments,
        submittedStudentAssignments,
        totalAlerts,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error fetching student personal stats:", error);
    return NextResponse.json(
      {
        message: "Failed to fetch student personal stats",
      },
      {
        status: 500,
      }
    );
  }
};

export const GET = connectDb(getStudentPersonalStatsHandler);
