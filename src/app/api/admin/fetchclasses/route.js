// Import necessary modules and models
import { NextResponse } from "next/server";
import connectDb from "../../../../../backend/middleware/db";
import ClassModel from "../../../../../backend/models/Class";
// Define your handler function to fetch classes
const fetchClassesHandler = async () => {
  try {
    // Fetch all classes from the database
    const classes = await ClassModel.find();

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

// Export the handler function for the GET request
export const GET = connectDb(fetchClassesHandler);
