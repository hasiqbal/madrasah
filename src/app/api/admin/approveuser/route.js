import { NextResponse } from "next/server";
import UserModel from "../../../../../backend/models/User";
import connectDb from "../../../../../backend/middleware/db";

const approveUserHandler = async (req) => {
  try {
    const { email } = await req.json();

    // Find the user by email
    const user = await UserModel.findOne({ email });

    if (!user) {
      return NextResponse.json(
        {
          message: "User not found",
        },
        {
          status: 404,
        }
      );
    }

    // Update the user status to "approved"
    user.status = "approved";
    await user.save();

    return NextResponse.json(
      {
        message: "User approved successfully",
        user,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error approving user:", error);
    return NextResponse.json(
      {
        message: "Failed to approve user",
      },
      {
        status: 500,
      }
    );
  }
};

export const POST = connectDb(approveUserHandler);
