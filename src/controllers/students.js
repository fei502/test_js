const studentModel = require('../models/student');


async function addStudent(req,res){
    const student = new studentModel({_id:"ssssss123123",name:"frankYST"});
    await student.save();
    return res.status(201).json(student);
}

module.exports = {
    addStudent
}