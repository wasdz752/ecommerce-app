import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}
// Route for user login
const loginUser = async (req, res) => {
    try {   
        const { email, password } = req.body;
        const user = await userModel.findOne({email});

        if (!validator.isEmail(email)) {
            return res.json({success: false, message: "Please enter a valid email"})
        }
        if (!password) {
            return res.json({success: false, message: "Please enter all fields"})
        }        

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.json({success: false, message: "Invalid credentials"}) 
        } else {
            const token = createToken(user._id)
            return res.json({success: true, token: token, name: user.name, message: "Logged In !"})
        }
    } catch (e) {
        res.json({success: false, message: e.messae})
    }
}

// Route for user Registration
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        
        const existingUser = await userModel.findOne({email});

        if (existingUser) {
            return res.json({success: false, message: "User already exists"})
        }

        if (!validator.isEmail(email)) {
            return res.json({success: false, message: "Inavlid Email format"})
        }

        if (!name || !password) {
            return res.json({success: false, message: "Please enter all required fields"})
        }

        if (password.length < 8) {
            return res.json({success: false, message: "Please enter a strong password"})
        }

        const hashedPassword = await bcrypt.hash(password, 0)

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })

        const user = await newUser.save();

        const token = createToken(user._id)

        return res.json({success: true, userData: user, token: token})

    } catch (e) {
        res.json({
            success: false,
            message: e.message
        })
    }
}   

// Route for admin Login
const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET);

            res.json({success: true, token: token})
        } else {
            return res.json({success: false, message: "Invalid Crendentials !"})
        }
    } catch (e) {
        res.json({success: false, message: e.message})
    }
} 

export { loginUser, registerUser, adminLogin }