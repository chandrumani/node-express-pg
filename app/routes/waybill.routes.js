module.exports = app => {
    const waybill = require("../controller/waybill.controller.js");

    var router = require("express").Router();

    router.post("/", waybill.create);
    router.get("/", waybill.findAll);
    router.get("/:id", waybill.findOne);
    router.put("/:id", waybill.update);
    router.delete("/:id", waybill.delete);
    app.use('/api/waybill', router);
}
