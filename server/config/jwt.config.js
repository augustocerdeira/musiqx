const jwt = require("jsonwebtoken");

// JWT_SECRET = "supersecretkey"

const secret = "secretkey";

module.exports.secret = secret;

module.exports = {
    authenticate(req, res, next) {
    console.log(req.cookies.usertoken);
    jwt.verify(
        req.cookies.usertoken,
        secret,
        // process.env.JWT_SECRET,
        (err, payload) => {
        if (err) {
            res.status(401).json({ verified: false });
        } else {
            next();
        }
        } 
    );
    },
};