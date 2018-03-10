const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();


//const config = require('./config/config');



const app = express();




app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

router.get('/webhook', function(req,res){
    res.send('ok');
});

module.exports = app;
