import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Function for Placing order with COD method
const placeOrder = async (req, res) => {
    try {
        const { items, amount, address } = req.body;
        const { userId } = req.user;
        console.log("Request Body:", req.body);

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId, {cartData: {}});

        res.json({success: true, message: "Order Placed"})
    } catch (e) {
        res.json({success: false, message: e.message});
    }
}


// Function for placing order for Stripe Method
const placeOrderStripe = async (req, res) => {

}

// Function for placing order using Razorpay method
const placeOrderRazorpay = async (req, res) => {

} 

// Get all orders for Admin Panel
const allOrders = async (req, res) => {
    try {
        const allOrders = await orderModel.find();
        res.json({success: true, allOrders})
    } catch (e) {
        console.log(e)
        res.json({success: false, message: e.message})
    }
}

// User order data for Client Frontend
const userOrders = async (req, res) => {
    try {
        const { userId } = req.user;
        
        const orders = await orderModel.find({ userId: userId });
        console.log(orders)
        res.json({success: true, orders})
    } catch (e) {
        res.json({success: false, message: e.message})
    }
}

// update order status for Admin Panel
const updateStatus = async (req, res) => {
    try {
        const { orderId, status } = req.body;
        
        const order = await orderModel.findById(orderId);
        
        if (order) {
            order.status = status;
            await order.save();

            res.json({success: true, message: "Order status updated"})
        } else {
            res.json({success: false, message: "Order not found"})
        }
        
    } catch (e) {
        console.log(e)
        res.json({success: false, message: e.message})
    }
}

export {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus};