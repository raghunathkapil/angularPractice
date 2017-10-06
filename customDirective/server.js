var express = require("express");
var app = express();

app.listen('8090', function(){
    console.log('Server Runing on port 8090');
});

app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html');
});


app.use('/', express.static(__dirname + '/'));
