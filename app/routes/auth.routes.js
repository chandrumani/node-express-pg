module.exports = app => {
    const auth = require("../controller/auth.controller.js");

    var router = require("express").Router();

    router.post("/", auth.login);
    app.use('/api/auth', router);
}
