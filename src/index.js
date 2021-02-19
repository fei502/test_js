const express = require('express');
const routes = require('./routes');
const app = express();
const {connectToDB} = require('./utils/db');
const PORT = process.env.PORT || 4000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/api',routes);
connectToDB().then(()=>{
    app.listen(PORT,()=>{
        console.log('asd');
    });
});


