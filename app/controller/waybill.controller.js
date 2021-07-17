const db = require('../models');
const Waybill = db.Waybill;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    const waybill = {
        shipperName: req.body.shipperName,
        shipperAddress: req.body.shipperAddress,
        shipperCity: req.body.shipperCity,
        consigneeName: req.body.consigneeName,
        consigneeAddress: req.body.consigneeAddress,
        consigneeCity: req.body.consigneeCity,
        shipmentStatus: req.body.shipmentStatus,
    };
    Waybill.create(waybill).then(
        data => {
            res.send({
                status: "SUCCESS",
                message: "Waybill created Successfully"
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
    Waybill.findAll().then(
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

    Waybill.update(req.body, {
        where: { id : id }
    }).then( num => {
        if (num == 1){
            res.send({
                message: "Waybill updated successfully"
            })
        } else {
            res.send({
                message: `Failed to updated waybill with id=${id}`
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: `Error while updating the waybill with id=${id}`
        });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Waybill.destroy({
        where: { id: id }
    }).then( num => {
        if (num == 1) {
            res.send({
                message: "Waybill deleted successfully"
            })
        } else {
            res.send({
                message: `Failed to delete waybill with id=${id}`
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: `Error while deleting waybill with id=${id}`
        })
    })
}

exports.findOne = (req, res) => {
    const id = req.params.id;

    Waybill.findByPk(id)
    .then(data => {
        if(data){
            res.send(data);
        } else {
            res.send({
                message: "No waybill found for ID provided"
            })
        }
        
    }).catch(err => {
        res.status(500).send({
            message: `Error while fetching `
        });
    });
}
