import { NextResponse } from "next/server";
import AlertModel from "../../../../../backend/models/Alert";
import connectDb from "../../../../../backend/middleware/db";

const addAlertHandler = async (request) => {
  try {
    // Extract the field values from the request body
    const { title, message, status } = await request.json();

    console.log("Received data:", {
      title,
      message,
      status,
    });

    // Check if the class already exists in the database by title
    const existingClass = await AlertModel.findOne({ title });
    if (existingClass) {
      return NextResponse.json(
        {
          message: "Class Already Exists",
        },
        {
          status: 400,
        }
      );
    }

    // Create a new instance of the 'AlertModel' and assign the field values
    const newClass = new AlertModel({
      title,
      message,
      status,
      uploadedByAdmin: true,
    });

    // Save the new Class to the database
    const savedClass = await newClass.save();

    console.log("New class:", savedClass);
    return NextResponse.json(
      {
        savedClass,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error adding Class:", error);
    return NextResponse.json(
      {
        message: "Failed to add class",
      },
      {
        status: 500,
      }
    );
  }
};

export const POST = connectDb(addAlertHandler);
