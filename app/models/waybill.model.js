module.exports = (sequelize, Sequelize) => {
    const Waybill = sequelize.define("waybill", {
        shipperName: {
            type: Sequelize.STRING
        },
        shipperAddress: {
            type: Sequelize.STRING
        },
        shipperCity: {
            type: Sequelize.STRING
        },
        consigneeName: {
            type: Sequelize.STRING
        },
        consigneeAddress: {
            type: Sequelize.STRING
        },
        consigneeCity: {
            type: Sequelize.STRING
        },
        shipmentStatus: {
            type: Sequelize.STRING
        }
    })
    return Waybill;
};
