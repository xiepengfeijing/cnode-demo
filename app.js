// 程序入口

var express = require('express')
var router = require('./router')


var app = express()

app.use(router)
app.listen(3000, () => {
    console.log('haobang');

})