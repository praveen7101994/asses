const mongoose = require('mongoose');
const { Schema } = mongoose;

const Task = new Schema({
    Title: {
        type: String
    },
    Description: {
        type: String
    },
    Status: {
        type: String,
        default: 'open'
    },
    Datetime: {
        type: Date,
        default: new Date
    }
});

module.exports = mongoose.model("Task", Task);