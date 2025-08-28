import jwt from "jsonwebtoken";

const userAuth = (req, res, next) => {
    const { token } = req.headers;

    if (!token) {
        console.log(token)
        return res.json({success: false, message: "Please Login First"})
    }

    try {

        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = {userId: token_decode.id};
        
        next()
    } catch (e) {
        console.log(e.message, "From route")
        res.json({success: false, message: "From Auth"})
    }
}

export default userAuth;