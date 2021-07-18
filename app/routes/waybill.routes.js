const { verifyToken } = require('../middleware/auth.middleware.js');

module.exports = app => {
    const waybill = require("../controller/waybill.controller.js");

    var router = require("express").Router();

    router.post("/", [verifyToken], waybill.create);
    router.get("/", [verifyToken], waybill.findAll);
    router.get("/:id", [verifyToken], waybill.findOne);
    router.put("/:id", [verifyToken], waybill.update);
    router.delete("/:id", [verifyToken], waybill.delete);
    app.use('/api/waybill', router);
}
