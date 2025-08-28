import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
    try {
        const { token } = req.headers;
        
        if (!token) {
            return res.json({success: true, message: "Not authorized login Again !"})
        }

        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({success: true, message: "Not authorized login Again !"})
        }

        next();
    } catch (e) {
        res.json({success: false, message: e.message})
    }
}

export default adminAuth;