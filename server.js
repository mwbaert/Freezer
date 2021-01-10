/*const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/test', function(req,res){
    res.sendFile(path.join(__dirname+'/JsQRScanner/docs/index.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
*/
var express = require('express')
var fs = require('fs')
var https = require('https')
var app = express()
const path = require('path');
//const router = express.Router();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/test', function(req,res){
    res.sendFile(path.join(__dirname+'/JsQRScanner/docs/index.html'));
});

https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, app)
    .listen(3000, function () {
        console.log('Example app listening on port 3000! Go to https://localhost:3000/')
    })