import mongoose from "mongoose";
const { Schema } = mongoose;

const alertSchema = new mongoose.Schema(
  {
    uploadedBy: { type: Schema.Types.ObjectId, ref: "users" },
    title: { type: String, required: true },
    message: { type: String, required: true },
    status: { type: String, required: true },
    uploadedByAdmin: { type: Boolean, default: false },
    // Add other fields as needed
  },
  { timestamps: true }
);

const AlertModel =
  mongoose.models.alerts || mongoose.model("alerts", alertSchema);

export default AlertModel;
