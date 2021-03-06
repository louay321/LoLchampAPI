const express       = require('express');
const MongoClient   = require('mongodb').MongoClient;
const bodyParser    = require('body-parser');
const db            = require('./config/db');
const app           = express();

const port = 3000;
app.use(bodyParser.urlencoded({extended:true}))

MongoClient.connect(db.url, (err, client) =>{
    if (err) return console.log(err);
    const db = client.db('namesDB');
    require('./app/routes')(app, db);
    app.listen(port, ()=>{
        console.log('server open on port ' + port);
    });
});
