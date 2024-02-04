import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
  name: { type: String, required: true },
  students: [{ type: String }],
  teacher: { type: String },
  assignments: [{ type: mongoose.Schema.Types.ObjectId, ref: "assignments" }],
});

const ClassModel =
  mongoose.models.classes || mongoose.model("classes", classSchema);

export default ClassModel;
