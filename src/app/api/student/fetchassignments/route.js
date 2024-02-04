// backend/pages/api/getStudentAssignments.js

import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import AssignmentModel from "../../../../../backend/models/Assignment";
import UserModel from "../../../../../backend/models/User";
import ClassModel from "../../../../../backend/models/Class";
import connectDb from "../../../../../backend/middleware/db";
require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY;

const getStudentAssignmentsHandler = async (request) => {
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

    // Find the user based on the userId
    const user = await UserModel.findById(userId);

    if (!user) {
      return NextResponse.json(
        {
          message: "User not found.",
        },
        {
          status: 404,
        }
      );
    }

    // Check if the user is a student
    if (!user.teacher) {
      const enrolledClasses = await ClassModel.find({ students: user.email });

      // Extract assignment ids from enrolled classes
      const assignmentIds = enrolledClasses.flatMap((cls) => cls.assignments);

      // Find assignments based on the retrieved ids
      const studentAssignments = await AssignmentModel.find({
        _id: { $in: assignmentIds },
      });

      // Calculate the percentage of assignments based on status for students
      const totalStudentAssignments = studentAssignments.length;
      const dueStudentAssignments = studentAssignments.filter(
        (assignment) => assignment.status === "due"
      ).length;
      const pendingStudentAssignments = studentAssignments.filter(
        (assignment) => assignment.status === "pending"
      ).length;
      const submittedStudentAssignments = studentAssignments.filter(
        (assignment) => assignment.status === "submitted"
      ).length;

      const duePercentage =
        (dueStudentAssignments / totalStudentAssignments) * 100;
      const pendingPercentage =
        (pendingStudentAssignments / totalStudentAssignments) * 100;
      const submittedPercentage =
        (submittedStudentAssignments / totalStudentAssignments) * 100;

      return NextResponse.json(
        {
          studentAssignments,
          duePercentage,
          pendingPercentage,
          submittedPercentage,
        },
        {
          status: 200,
        }
      );
    } else {
      return NextResponse.json(
        {
          message: "User is not a student.",
        },
        {
          status: 400,
        }
      );
    }
  } catch (error) {
    console.error("Error fetching student assignments:", error);
    return NextResponse.json(
      {
        message: "Failed to fetch student assignments",
      },
      {
        status: 500,
      }
    );
  }
};

export const GET = connectDb(getStudentAssignmentsHandler);
