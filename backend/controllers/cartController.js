import userModel from "../models/userModel.js";

// Function for add item to Cart
const addToCart = async (req, res) => {
    try {   
        const { itemId, size, price } = req.body;
        const { userId } = req.user;

        const userCart = await userModel.findById(userId);

        const cartData = await userCart.cartData;

        if (cartData[itemId] && cartData[itemId].size === size) {
            cartData[itemId].quantity++;
        } else {
            cartData[itemId] = {
                size,
                price,
                quantity: 1
            };
        }
        
        await userModel.findByIdAndUpdate(userId, {cartData});
        res.json({success: true, message: "Cart Updated Successfully", cartData});
    } catch (e) {
        console.log(e.message);
        res.json({success: false, message: "From Controller"});
    }
}

// Function for update cart
const updateCart = async (req, res) => {
    const { itemId, quantity } = req.body;
    const { userId } = req.user;
    
    console.log(userId)
    try {
        const userCart = await userModel.findById(userId);
        const cartData = await userCart.cartData;

        cartData[itemId].quantity = quantity;

        await userModel.findByIdAndUpdate(userId, {cartData});

        res.json({success: true, message: "Cart Updated Successfully", cartData})
    } catch (e) {
        console.log(e.message)
        res.json({success: false, message: e.message})
    }
}

// Function for get user cart
const getUserCart = async (req, res) => {
    try {
        const { userId } = req.user;
        
        const userCart = await userModel.findById(userId);
        let cartData = userCart.cartData;

        res.json({success: true, cartData})
    } catch (e) {
        console.log(e.message + "from controller");
        res.json({success: false, message: e.message})
    }
}

// Function for remove user cart item
const removeFromCart = async (req, res) => {
    const { itemId } = req.body;
    const { userId } = req.user;
    
    try {
        const userCart = await userModel.findById(userId);
        const cartData = await userCart.cartData;

        if (!cartData[itemId]) {
            return res.json({success: false, message: "Item not found in cart !"})
        };

        delete cartData[itemId];
        
        await userModel.findByIdAndUpdate(userId, {cartData});
        res.json({success: true, message: "Item removed from cart", cartData});

    } catch (e) {
        res.json({success: false, message: e.message})
    }
}

export { getUserCart, updateCart, addToCart, removeFromCart }