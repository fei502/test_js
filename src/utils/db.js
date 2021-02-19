const mongoose = require('mongoose');

exports.connectToDB = ()=>{
    const connectionString = 'mongodb://root:123456@119.45.119.213:27017/student?authSource=admin';
    const db = mongoose.connection;
    db.on("connected",()=>{
        console.log("db connected");
    })
    return mongoose.connect(connectionString);
}
