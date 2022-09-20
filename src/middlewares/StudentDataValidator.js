const { validateEmail, checkGender } = require("../utils/utilities");

exports.StudentDataValidate = (req, res, next) => {
    let email = validateEmail(req.body.email);

    if (email != null) {
        next();
    } else {
        res.status(401).json({
            message: "Invalid Email Address",
        });
    }
};
