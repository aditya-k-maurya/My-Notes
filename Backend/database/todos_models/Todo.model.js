import mongoose from "mongoose";

// Defining the structure of the 'Todo' schema using mongoose.Schema
const todoSchema = new mongoose.Schema(
	{
		// Field for the content of the todo with validation rules
		content: {
			type: String,
			required: true, // The field is required
		},

		// Field for the completion status of the todo with a default value
		complete: {
			type: Boolean,
			default: false, // Default value is set to false
		},

		// Field for the creator of the todo, creating a relationship with the 'User' model
		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User", // Reference to the 'User' model
		},

		// Array of subTodos, creating a relationship with the 'SubTodo' model
		subTodos: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "SubTodo", // Reference to the 'SubTodo' model
			},
		],
	},
	{ timestamps: true } // Adding timestamps for todo creation and updates
);

// Creating a mongoose model named 'Todo' based on the defined schema
export const Todo = mongoose.model("Todo", todoSchema);
