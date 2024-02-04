import { NextResponse } from "next/server";
import UserModel from "../../../../../backend/models/User";
import connectDb from "../../../../../backend/middleware/db";

const addUserHandler = async (request) => {
  try {
    // Extract the field values from the request body
    const {
      firstName,
      lastName,
      email,
      password,
      teacher,
      teachers,
      hifzstudent,
      studentClass,
      status, // Updated 'shift' to 'studentClass'
    } = await request.json();

    console.log("Received data:", {
      firstName,
      lastName,
      email,
      password,
      teacher,
      teachers,
      hifzstudent,
      studentClass,
      status,
    });

    // Check if the email already exists in the database
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        {
          message: "User Already Exists",
        },
        {
          status: 400,
        }
      );
    }

    // Create a new instance of the 'User' model and assign the field values
    const newUser = new UserModel({
      firstName,
      lastName,
      email,
      password,
      teacher,
      teachers,
      hifzstudent,
      studentClass,
      status, // Updated 'shift' to 'studentClass'
    });

    // Save the new User to the database
    const savedUser = await newUser.save();

    console.log("New user:", savedUser);
    return NextResponse.json(
      {
        savedUser,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error saving User:", error);
    return NextResponse.json(
      {
        message: "Failed to add user",
      },
      {
        status: 500,
      }
    );
  }
};

export const POST = connectDb(addUserHandler);
