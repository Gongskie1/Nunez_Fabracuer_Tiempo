require('dotenv').config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const weather = require("./src/weatherapi/routes/weather");
const cors = require("cors");
const {check} = require("./src/common/db/db_utils");
const register = require("./src/user_register/routes/register_routes");

app.use(bodyParser.json());
app.use(cors());
app.use(weather);
app.use(register);

check();


app.listen(process.env.SERVER_PORT,()=>{
    console.log(`Hello Port ${process.env.SERVER_PORT}`);
});