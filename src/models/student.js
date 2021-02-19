const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        unique:true
    }
});

const Model = mongoose.model('Student',schema);

module.exports = Model;