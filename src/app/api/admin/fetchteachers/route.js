// backend/pages/api/fetchTeachers.js
import { NextResponse } from "next/server";
import connectDb from "../../../../../backend/middleware/db";
import UserModel from "../../../../../backend/models/User";

const fetchTeachersHandler = async () => {
  try {
    // Fetch all teachers from the database
    const teachers = await UserModel.find({ teacher: true });

    return NextResponse.json(
      {
        teachers,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error fetching teachers:", error);
    return NextResponse.json(
      {
        message: "Failed to fetch teachers",
      },
      {
        status: 500,
      }
    );
  }
};

export const GET = connectDb(fetchTeachersHandler);
