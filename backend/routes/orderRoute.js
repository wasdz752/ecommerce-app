import express from "express";
import { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import auth from "../middleware/auth.js";
const orderRouter = express.Router();

// Admin Features
orderRouter.get("/list", adminAuth, allOrders);
orderRouter.put("/status", adminAuth, updateStatus);

// Payment Features
orderRouter.post("/place", auth, placeOrder);
orderRouter.post("/stripe", auth, placeOrderStripe);
orderRouter.post("/razorpay", auth, placeOrderRazorpay);

// User Features
orderRouter.get("/userorders", auth, userOrders);


export default orderRouter;
 