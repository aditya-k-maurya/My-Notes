//modals give the structure of the db that will be stored, mongoose is one of the popular library to manipulate 

// Importing the 'mongoose' library to interact with MongoDB
import mongoose from "mongoose";

// Defining the structure of the 'User' schema using mongoose.Schema
const userSchema = new mongoose.Schema(
	{
		// Field for the username with validation rules
		username: {
			type: String,
			required: true, // The field is required
			unique: true, // The value of this field should be unique
			lowercase: true, // Convert the value to lowercase before saving
		},

		// Field for the email with validation rules
		email: {
			type: String,
			required: true, // The field is required
			unique: true, // The value of this field should be unique
			lowercase: true, // Convert the value to lowercase before saving
		},

		// Field for the password with a custom error message
		password: {
			type: String,
			required: [true, "password is required"], // The field is required with a custom error message
		},

		// Field for isActive, representing the user's activation status
		isActive: Boolean,
	},
	{
		timestamps: true, // Adding timestamps for user registration time
	}
);

// Creating a mongoose model named 'User' based on the defined schema
export const User = mongoose.model("User", userSchema);
