import { NextResponse } from "next/server";
import connectDb from "../../../../../backend/middleware/db";
import UserModel from "../../../../../backend/models/User";

const fetchUsersHandler = async () => {
  try {
    // Fetch all users from the database
    const users = await UserModel.find();

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
