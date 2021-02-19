const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    _id:{
        type: String,
        uppercase: true
    },
    name:{
        type:String,
        required: true
    }
});

const Model = mongoose.model('Student',schema);

module.exports = Model;