const mongoose = require('mongoose');

exports.connectToDB = ()=>{
    const connectionString = 'mongodb://root:1234@localhost:27017/student?authSource=admin';
    const db = mongoose.connection;
    db.on("connected",()=>{
        console.log("db connected");
    })
    return mongoose.connect(connectionString);
}
