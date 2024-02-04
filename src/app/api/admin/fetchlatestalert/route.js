import { NextResponse } from "next/server";
import connectDb from "../../../../../backend/middleware/db";
import AlertModel from "../../../../../backend/models/Alert";

const fetchLatestAlertsHandler = async () => {
  try {
    // Fetch all alerts from the database
    const alerts = await AlertModel.find().sort({ createdAt: -1 });

    // Count occurrences of different statuses
    const statusCounts = {
      Success: 0,
      Info: 0,
      Warning: 0,
      Danger: 0,
    };

    alerts.forEach((alert) => {
      statusCounts[alert.status]++;
    });

    // Find the latest alert uploaded by a user if uploadedBy is available
    let latestUserAlert = null;
    const userWithLatestAlert = alerts.find((alert) => alert.uploadedBy);
    if (userWithLatestAlert) {
      const userId = userWithLatestAlert.uploadedBy;
      latestUserAlert = alerts.find((alert) => alert.uploadedBy.equals(userId));
    }

    return NextResponse.json(
      {
        latestAlert: alerts.length > 0 ? alerts[0] : null,
        statusCounts,
        latestUserAlert,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error fetching alerts:", error);
    return NextResponse.json(
      {
        message: "Failed to fetch alerts",
      },
      {
        status: 500,
      }
    );
  }
};

export const GET = connectDb(fetchLatestAlertsHandler);
