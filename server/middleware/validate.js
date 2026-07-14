const { body, validationResult } = require("express-validator");

exports.profileValidation = [
    body("fullName").notEmpty(),
    body("age").isNumeric(),
    body("height").isNumeric(),
    body("weight").isNumeric(),
];

exports.validate = (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {

        return res.status(400).json({
            success: false,
            errors: errors.array(),
        });

    }

    next();

};