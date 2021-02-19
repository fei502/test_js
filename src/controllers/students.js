const studentModel = require('../models/student');


async function addStudent(req,res){
    const student = new studentModel({_id:"ss",name:"frank"});
    await student.save();
    return res.status(201).json(student);
}

module.exports = {
    addStudent
}