const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 8000;

const router = require("./routers/racer");
require('./db/conn');
                                                       
const Racers = require("./models/racers");

app.use(express.json());
                                                        
// app.use(router) must me inside of bottom                       
                                                       
                                                        
app.use(router);                                        



app.listen(port, (req, res) => {
    console.log(`server is running on ${port}`);       
})