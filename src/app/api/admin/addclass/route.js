import { NextResponse } from "next/server";
import ClassModel from "../../../../../backend/models/Class"; // Import your ClassModel
import connectDb from "../../../../../backend/middleware/db";

const addClassHandler = async (request) => {
  try {
    // Extract the field values from the request body
    const {
      name,
      teacher,
      students,
    } = await request.json();

    console.log("Received data:", {
      name,
      teacher,
      students,
    });

    // Check if the class already exists in the database by name
    const existingClass = await ClassModel.findOne({ name });
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

    // Create a new instance of the 'ClassModel' and assign the field values
    const newClass = new ClassModel({
      name,
      teacher,
      students,
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

export const POST = connectDb(addClassHandler);
