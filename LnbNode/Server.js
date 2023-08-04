const express = require("express");
const app = express()
const PORT = 9091
const bodyParser = require("body-parser");
const routes = require("./Routes/Routes");
const db = require('./DB/db');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', routes);




app.listen(PORT , () =>{
    console.log(`Server is running on port : ${PORT}`);
})