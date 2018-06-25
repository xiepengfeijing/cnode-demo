// 程序入口

var express = require('express')
var router = require('./router')
// var art = require('express-art-template')
var app = express()
var bodyParser = require('body-parser');
app.engine('html',require('express-art-template'));
app.use(bodyParser.urlencoded({extend:false}));
app.use(bodyParser.json());


app.use('/public',express.static('./public'))
// app.use(express.static('./views'))
app.use('/node_modules',express.static('./node_modules'))

app.use(router)
app.listen(3000, () => {
    console.log('haobang');

})