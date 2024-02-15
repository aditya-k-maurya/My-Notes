import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({}, { timestams: true });

export const MedicalRecords = mongoose.model("MedicalRecords", medicalRecordSchema);
