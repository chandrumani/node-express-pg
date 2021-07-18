const db = require('../models');
const User = db.User;
const Op = db.Sequelize.Op;

var bcrypt = require("bcryptjs");

exports.create = (req, res) => {
    const user = {
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 8)
    };
    User.create(user).then(
        data => {
            res.send({
                status: "SUCCESS",
                message: "User created Successfully"
            })
        }
    ).catch(err => {
        res.status(500).send({
            status: "FAILURE",
            message: err.message + " Error while creating User"
        })
    })
};

exports.findAll = (req, res) => {
    User.findAll().then(
        data=> {
            res.send(data);
        }
    ).catch(err => {
        res.status(500).send({
            status: "FAILURE",
            message: err.message + " Error while fetching all Users"
        })
    })
};

exports.update = (req, res) => {
    const id = req.params.id;

    const user = {
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 8)
    };

    User.update(user, {
        where: { id : id }
    }).then( num => {
        if (num == 1){
            res.send({
                message: "User updated successfully"
            })
        } else {
            res.send({
                message: `Failed to updated user with id=${id}`
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: `Error while updating the user with id=${id}`
        });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    User.destroy({
        where: { id: id }
    }).then( num => {
        if (num == 1) {
            res.send({
                message: "User deleted successfully"
            })
        } else {
            res.send({
                message: `Failed to delete user with id=${id}`
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: `Error while deleting user with id=${id}`
        })
    })
}

exports.findOne = (req, res) => {
    const id = req.params.id;

    User.findByPk(id)
    .then(data => {
        if(data){
            res.send(data);
        } else {
            res.send({
                message: "No user found for ID provided"
            })
        }
        
    }).catch(err => {
        res.status(500).send({
            message: `Error while fetching `
        });
    });
}
