const { body, validationResult } = require('express-validator');

// Registration Validation Rules
const registerValidation = [
    body('name', 'Name is required').notEmpty(),
    body('email', 'Invalid email format').isEmail(),
    body('password', 'Password must be at least 6 characters long').isLength({ min: 6 }),
];

// Login Validation Rules
const loginValidation = [
    body('email', 'Invalid email format').isEmail(),
    body('password', 'Password is required').notEmpty(),
];

// Middleware to Check for Validation Errors
const validation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = { registerValidation, loginValidation, validation };
