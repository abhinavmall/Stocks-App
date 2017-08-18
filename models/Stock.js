const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const urlSchema = new mongoose.Schema({
    code: {
        type: String,
        trim: true,
        required: 'Stock code is required'
    },
    name:{
        type: String,
        trim: true,
        required: 'Stock name is required'
    }
});

module.exports = mongoose.model('Stock', urlSchema);
