const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name:{
        type: String,
    },
    username:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    }
},{
    timestamps: true
})

const model = mongoose.model('Users',schema);
module.exports = model;