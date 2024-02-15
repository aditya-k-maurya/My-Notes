import mongoose from "mongoose";

// Defining the structure of the 'SubTodo' schema using mongoose.Schema
const subTodoSchema = new mongoose.Schema(
	{
		// Field for the content of the subTodo with validation rules
		content: {
			type: String,
			required: true, // The field is required
		},

		complete: {
			type: Boolean,
			default: false, // Default value is set to false
		},

		// Field for the creator of the subTodo, creating a relationship with the 'User' model
		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User", // Reference to the 'User' model
		},
	},
	{ timestamps: true }
); // Adding timestamps for subTodo creation and updates

// Creating a mongoose model named 'SubTodo' based on the defined schema
export const SubTodo = mongoose.model("SubTodo", subTodoSchema);
