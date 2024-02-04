import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import AssignmentModel from "../../../../../backend/models/Assignment";
import connectDb from "../../../../../backend/middleware/db";
require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY;

const getTeacherLatestAssignmentHandler = async (request) => {
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

    // Find the latest assignment uploaded by the teacher
    const latestAssignment = await AssignmentModel.findOne({ teacher: userId })
      .sort({ createdAt: -1 }) // Sort by createdAt field in descending order to get the latest
      .limit(1); // Limit to 1 result

    return NextResponse.json(
      {
        latestAssignment,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error fetching latest teacher assignment:", error);
    return NextResponse.json(
      {
        message: "Failed to fetch latest teacher assignment",
      },
      {
        status: 500,
      }
    );
  }
};

export const GET = connectDb(getTeacherLatestAssignmentHandler);
