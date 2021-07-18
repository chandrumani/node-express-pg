var multer = require('multer');
var upload = multer({dest:'uploads/'});
const { verifyToken } = require('../middleware/auth.middleware.js');
const uploadController = require("../controller/upload.controller.js");

module.exports = app => {
    var router = require("express").Router();
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });

    router.post("/", upload.single('document'), [verifyToken], uploadController.create);
    app.use('/api/upload', router);
}
