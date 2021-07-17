var multer = require('multer');
var upload = multer({dest:'uploads/'});

module.exports = app => {
    const uploadController = require("../controller/upload.controller.js");

    var router = require("express").Router();

    router.post("/", upload.single('document'), uploadController.create);
    app.use('/api/upload', router);
}
