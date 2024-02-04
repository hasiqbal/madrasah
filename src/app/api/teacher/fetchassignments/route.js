// backend/pages/api/getTeacherAssignments.js

import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import AssignmentModel from "../../../../../backend/models/Assignment";
import connectDb from "../../../../../backend/middleware/db";
require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY;

const getTeacherAssignmentsHandler = async (request) => {
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

    // Extract userId from the decoded token
    const { userId } = decodedToken;

    // Find assignments uploaded by the teacher
    const teacherAssignments = await AssignmentModel.find({ teacher: userId });

    // Calculate the percentage of assignments based on status
    const totalAssignments = teacherAssignments.length;
    const dueAssignments = teacherAssignments.filter(
      (assignment) => assignment.status === "due"
    ).length;
    const pendingAssignments = teacherAssignments.filter(
      (assignment) => assignment.status === "pending"
    ).length;
    const submittedAssignments = teacherAssignments.filter(
      (assignment) => assignment.status === "submitted"
    ).length;

    const duePercentage = (dueAssignments / totalAssignments) * 100;
    const pendingPercentage = (pendingAssignments / totalAssignments) * 100;
    const submittedPercentage = (submittedAssignments / totalAssignments) * 100;

    return NextResponse.json(
      {
        teacherAssignments,
        duePercentage,
        pendingPercentage,
        submittedPercentage,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error fetching teacher assignments:", error);
    return NextResponse.json(
      {
        message: "Failed to fetch teacher assignments",
      },
      {
        status: 500,
      }
    );
  }
};

export const GET = connectDb(getTeacherAssignmentsHandler);
