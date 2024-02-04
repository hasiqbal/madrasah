import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import UserModel from "../../../../../backend/models/User";
import connectDb from "../../../../../backend/middleware/db";

require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY;

const userLoginHandler = async (request) => {
  try {
    // Extract the login credentials from the request body
    const { email, password } = await request.json();

    // Check if the email exists in the user database
    const existingUser = await UserModel.findOne({ email });
    if (!existingUser) {
      return NextResponse.json(
        {
          message: "User not found",
        },
        {
          status: 404,
        }
      );
    }

    // Check if the password is correct (You might want to use bcrypt for secure password comparison)
    if (existingUser.password !== password) {
      return NextResponse.json(
        {
          message: "Invalid credentials",
        },
        {
          status: 401,
        }
      );
    }

    // Check if the user's status is 'approved'
    if (existingUser.status !== "approved") {
      return NextResponse.json(
        {
          message: "User has not been approved",
        },
        {
          status: 401,
        }
      );
    }

    // Create a payload for the JWT token (you can include additional data here)
    const payload = {
      userId: existingUser._id,
      userEmail: existingUser.email,
      isTeacher: existingUser.teacher,
      isHifzStudent: existingUser.hifzstudent,
      // Add other relevant user data to include in the token payload
    };

    // Generate and sign the JWT token
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "9h" }); // Token expires in 9 hours

    // Return the token in the response
    return NextResponse.json(
      {
        message: "User login successful",
        token: token,
        isTeacher: existingUser.teacher,
        // Include other necessary user data in the response
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error during user login:", error);
    return NextResponse.json(
      {
        message: "Failed to perform user login",
      },
      {
        status: 500,
      }
    );
  }
};

export const POST = connectDb(userLoginHandler);
