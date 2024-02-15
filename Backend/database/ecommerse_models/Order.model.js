import mongoose from "mongoose";

// orderItemsSchema stores order details
const orderItemSchema = new mongoose.Schema({

	// Field for the product id, creating a relationship with the 'Product' model
	productId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Product", // Reference to the 'Product' model
	},

	// Field for the quantity of the product in the order
	quantity: {
		type: Number,
		required: true, // The field is required
	},
});

// Defining the structure of the 'Order' schema using mongoose.Schema
const orderSchema = new mongoose.Schema(
	{
		// Field for the total price of the order
		orderPrice: {
			type: Number,
			required: true, // The field is required
		},

		// Field for the customer id, creating a relationship with the 'User' model
		customer: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User", 
		},

		// Field for the order items, which is an array of 'orderItem' schema
		orderItems: {
			type: [orderItemSchema], // Array of 'orderItem' schema
		},

		// Field for the delivery address of the order
		address: {
			type: String,
			required: true,
		},

		// Field for the status of the order with predefined values and a default value
		status: {
			type: String,
			enum: ["PENDING", "CANCELLED", "DELIVERED"], // Allowed values for the field
			default: "PENDING", // Default value is set to "PENDING"
		},
	},
	{ timestamps: true }
); 

const Order = mongoose.model("Order", orderSchema);

export default Order;
