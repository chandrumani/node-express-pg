const express = require('express');
const bodyParser = require('body-parser');
const db = require("./app/models");

const app = express();
const port = 4500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
db.sequelize.sync();
app.get('/', (request, response) =>{
    response.json({info: "Successful API invocation"});
});

// Add all routes here
require("./app/routes/user.routes")(app);
require("./app/routes/waybill.routes")(app);
require("./app/routes/upload.routes")(app);

app.listen(port, () => {
    console.log(`App running on Port ${port}`);
})
