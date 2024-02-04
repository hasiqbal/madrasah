import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import UserModel from "../../../../../backend/models/User";
import connectDb from "../../../../../backend/middleware/db";
require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY;

const fetchUsersHandler = async (request) => {
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

    // Fetch users where the authenticated user's email is in the teachers array
    const users = await UserModel.find({ teachers: authenticatedUser.email });

    return NextResponse.json(
      {
        users,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      {
        message: "Failed to fetch users",
      },
      {
        status: 500,
      }
    );
  }
};

export const GET = connectDb(fetchUsersHandler);
