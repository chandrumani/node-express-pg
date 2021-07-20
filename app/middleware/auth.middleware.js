const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");

exports.verifyToken = (req, res, next) => {
    if(config.authEnabled) {
            let token = req.headers["x-access-token"];

        if(!token){
            return res.status(403).send({
                message: "Please provide token"
            });
        }

        jwt.verify(token, config.secret, (err,decoded) => {
            console.log(err);
            if (err){
                return res.status(401).send({
                    message: "Not authorized"
                });
            } else {
                next();
            }
            req.userId = decoded.id;
            console.log("Decoded id is ", decoded.id);
        });
    } else{
        next();
    }
};
