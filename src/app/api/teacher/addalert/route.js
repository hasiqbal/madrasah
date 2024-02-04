import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import AlertModel from "../../../../../backend/models/Alert";
import connectDb from "../../../../../backend/middleware/db";
import UserModel from "../../../../../backend/models/User";

const addAlertHandler = async (request) => {
  try {
    // Extract the field values from the request body
    const { title, message, status } = await request.json();

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

    // Verify the token and get the user's ID
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

    const { userId } = decodedToken;

    // Fetch the user to get the ID
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

    // Create a new instance of the 'AlertModel' and assign the field values
    const newAlert = new AlertModel({
      uploadedBy: user._id, // Assigning the user's ID to 'uploadedBy'
      title,
      message,
      status,
    });

    // Save the new alert to the database
    const savedAlert = await newAlert.save();

    return NextResponse.json(
      {
        savedAlert,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error adding Alert:", error);
    return NextResponse.json(
      {
        message: "Failed to add alert",
      },
      {
        status: 500,
      }
    );
  }
};

export const POST = connectDb(addAlertHandler);
