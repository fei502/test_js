const studentModel = require('../models/student');


async function addStudent(req,res){
    console.log(req.body);
    const {_id,name} = req.body;
    console.log(req.body);
    const student = new studentModel({name});
    // const student = new studentModel({_id:"ssssss123123",name:"frankYST"});
    await student.save();
    return res.status(201).json(student);
}

module.exports = {
    addStudent
}