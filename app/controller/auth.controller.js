const db = require('../models');
const config = require('../config/auth.config');
const User = db.User;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.login = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if (!user) {
            return res.status(401).send({
                message: "User ID or password is invalid"
            })
        }

        var isPasswordValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if (!isPasswordValid){
            return res.status(410).send({
                message: "User ID or password is invalid"
            })
        };

        var token = jwt.sign({ id: user.id}, config.secret, {
            expiresIn: config.expiration
        })

        res.status(200).send({
            message: "Login Successful",
            token: token
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message
        })
    })
}