const express = require('express');
const routes = require('./routes');
const app = express();
const {connectToDB} = require('./utils/db');
const PORT = process.env.PORT || 4000;

app.use('/api',routes);
connectToDB().then(()=>{
    app.listen(PORT,()=>{
        console.log('asd');
    });
});


