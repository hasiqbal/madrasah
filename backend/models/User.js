import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  // User image URL or base64 data
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  teacher: { type: Boolean, default: false }, // Whether the user is a team lead or not
  teachers: [{ type: String }], // Array of emails of the teachers who are teaching that student
  hifzstudent: { type: Boolean, default: false }, // Department the user belongs to
  studentClass: { type: String }, // Shift the user is assigned to
  status: { type: String, default: "pending" },
  // Add other fields as needed
});

const UserModel = mongoose.models.users || mongoose.model("users", userSchema);

export default UserModel;
