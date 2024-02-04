import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import AdminModel from "../../../../../backend/models/Admin";
import connectDb from "../../../../../backend/middleware/db";
require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY;

const adminRegisterHandler = async (request) => {
  try {
    // Extract the registration details from the request body
    const { firstName, lastName, email, password } = await request.json();

    // Check if an admin with the same email already exists
    const existingAdmin = await AdminModel.findOne({ email });
    if (existingAdmin) {
      return NextResponse.json(
        {
          message: "Admin with this email is already exists",
        },
        {
          status: 400,
        }
      );
    }

    // Create a new admin
    const newAdmin = new AdminModel({
      firstName,
      lastName,
      email,
      password,
    });

    // Save the new admin to the database
    await newAdmin.save();

    // Create a payload for the JWT token
    const payload = {
      adminId: newAdmin._id,
      adminEmail: newAdmin.email,
      isAdmin: newAdmin.isAdmin,
    };

    // Generate and sign the JWT token
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "9h" }); // Token expires in 9 hours

    // Return the token in the response
    return NextResponse.json(
      {
        message: "Admin is  registered successfully",
        token: token,
        isAdmin: newAdmin.isAdmin,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Error during admin registration:", error);
    return NextResponse.json(
      {
        message: "Failed to register admin",
      },
      {
        status: 500,
      }
    );
  }
};

export const POST = connectDb(adminRegisterHandler);
