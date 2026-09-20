import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    promotion: { type: String }, // ex: "IFSI 2026-2029"
    semester: { type: Number, min: 1, max: 6, default: 1 },
    role: { type: String, enum: ['student', 'formateur', 'admin'], default: 'student' },
  },
  { timestamps: true },
);

export const User = mongoose.model('User', UserSchema);
