import express from "express";
import { addToCart, updateCart, getUserCart, removeFromCart } from "../controllers/cartController.js";
import userAuth from "../middleware/auth.js";

const cartRouter = express.Router();

cartRouter.get('/list', userAuth, getUserCart);
cartRouter.post('/add', userAuth, addToCart);
cartRouter.put('/update', userAuth, updateCart);
cartRouter.delete('/delete', userAuth, removeFromCart)

export default cartRouter;