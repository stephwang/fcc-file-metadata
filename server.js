var express = require('express');
var app = express();
var path = require('path');
var multer = require('multer');
var upload = multer();

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/get-file-size', upload.single('upload'), function(req,res){
    res.send(JSON.stringify({size: req.file.size}));
});

app.listen(process.env.PORT || 8080);