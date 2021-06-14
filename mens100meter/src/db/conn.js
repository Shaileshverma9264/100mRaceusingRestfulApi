const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/race-data", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then((req, res) => {
    console.log("connection is successful......")
}).catch((e) => {
    console.log("connection fail ");
})