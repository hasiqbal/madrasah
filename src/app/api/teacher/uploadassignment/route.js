// backend/pages/api/uploadAssignment.js

import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connectDb from "../../../../../backend/middleware/db";
import AssignmentModel from "../../../../../backend/models/Assignment";
import ClassModel from "../../../../../backend/models/Class";
require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY;

const uploadAssignmentHandler = async (request) => {
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

    // Extract necessary data from the request body
    const {
      assignmentName,
      dueDate,
      assignmentDetail,
      assignmentMarks,
      className,
    } = await request.json();

    // Extract userId from the decoded token
    const { userId } = decodedToken;

    // Create a new assignment instance
    const newAssignment = new AssignmentModel({
      assignmentName,
      dueDate,
      assignmentDetail,
      assignmentMarks,
      teacher: userId,
      className,
      // Add other fields as needed
    });

    // Save the assignment to the database
    const savedAssignment = await newAssignment.save();

    await ClassModel.updateOne(
      { name: className },
      { $addToSet: { assignments: savedAssignment._id } }
    );

    return NextResponse.json(
      {
        message: "Assignment uploaded successfully",
        assignment: savedAssignment,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error during assignment upload:", error);
    return NextResponse.json(
      {
        message: "Failed to upload assignment",
      },
      {
        status: 500,
      }
    );
  }
};

export const POST = connectDb(uploadAssignmentHandler);
