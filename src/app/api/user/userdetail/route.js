// backend/pages/api/userdetails.js

import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import UserModel from "../../../../../backend/models/User";
import AttendanceModel from "../../../../../backend/models/Attendance";
import ClassModel from "../../../../../backend/models/Class";
import AssignmentModel from "../../../../../backend/models/Assignment";
import connectDb from "../../../../../backend/middleware/db";
require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY;

const userDetailsHandler = async (request) => {
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
      decodedToken = jwt.verify(token, SECRET_KEY);
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

    // Extract the userId from the decoded token
    const { userId } = decodedToken;

    // Fetch user details
    const user = await UserModel.findById(userId);

    // Check if user exists
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

    // Fetch classes the user is part of
    const userClasses = await ClassModel.find({ students: user.email });

    // Fetch assignments for each class the user is part of
    const assignments = [];
    for (const userClass of userClasses) {
      const classAssignments = await AssignmentModel.find({
        className: userClass.name,
      });
      assignments.push(...classAssignments);
    }

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
        userClasses,
        assignments,
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

export const GET = connectDb(userDetailsHandler);
