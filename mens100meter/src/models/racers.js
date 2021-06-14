const mongoose = require('mongoose');

const racerSchema = new mongoose.Schema({
    ranking: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    dob: {
        type: Date,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    event: {
        type: String,
        default: "100m"
    },
    score: {
        type: Number,


    }


})



const Racers = new mongoose.model("Racer", racerSchema);
module.exports = Racers;