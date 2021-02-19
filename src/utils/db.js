const mongoose = require('mongoose');

exports.connectToDB = ()=>{
    const connectionString = 'mongodb://localhost:27017/student';
    const db = mongoose.connection;
    db.on("connected",()=>{
        console.log("db connected");
    })
    return mongoose.connect(connectionString);
}
