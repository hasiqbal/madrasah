import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
  assignmentName: { type: String, required: true },
  status: { type: String, default: "pending" },
  dueDate: { type: Date },
  submittedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  assignmentMarks: { type: Number },
  className: { type: String },
  assignmentDetail: { type: String },

  // Add other fields as needed
});

const AssignmentModel =
  mongoose.models.assignments ||
  mongoose.model("assignments", assignmentSchema);

export default AssignmentModel;
