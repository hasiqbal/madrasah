import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import ClassModel from "../../../../../backend/models/Class";
import UserModel from "../../../../../backend/models/User";
import connectDb from "../../../../../backend/middleware/db";
require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY;

const fetchClassesHandler = async (request) => {
  try {
    let token;

    // Check if running in server-side rendering (SSR) context
    if (typeof window === "undefined") {
      token = request.headers.get("Authorization");
    } else {
   
      return NextResponse.redirect("/");
    }

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

    // Extract user information from the decoded token
    const { userId } = decodedToken;

    // Fetch the user details of the authenticated user
    const authenticatedUser = await UserModel.findById(userId);

    if (!authenticatedUser) {
      return NextResponse.json(
        {
          message: "Authenticated user not found.",
        },
        {
          status: 404,
        }
      );
    }

    if (!authenticatedUser.teacher) {
      return NextResponse.json(
        {
          message: "Access denied. You are not a teacher.",
        },
        {
          status: 403,
        }
      );
    }

    // Fetch classes where the teacher's email matches
    const classes = await ClassModel.find({ teacher: authenticatedUser.email });

    return NextResponse.json(
      {
        classes,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error fetching classes:", error);
    return NextResponse.json(
      {
        message: "Failed to fetch classes",
      },
      {
        status: 500,
      }
    );
  }
};

export const GET = connectDb(fetchClassesHandler);
