const jwt = require('jsonwebtoken');
const authSchema = require('../model/user'); // Import your user schema/model

const isAuth = async (req, res, next) => {
    try {
        // Retrieve token from Authorization header
        const token = req.header('Authorization');

        if (!token) {
            return res.status(401).json({ msg: "No token provided, authorization denied" });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.privateKey);

        if (!decoded) {
            return res.status(401).json({ msg: "Token verification failed" });
        }

        // Find user by ID and attach to request object
        const user = await authSchema.findById(decoded.id);
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        req.user = user;
        next(); // Proceed to the next middleware or route handler
    } catch (err) {
        console.error(err);
        res.status(401).json({ msg: "Invalid or expired token" });
    }
};

module.exports = { isAuth };
