const express = require('express');
var app = express();
var http = require('http').Server(app);

//middleware
app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/IM.html');
   

});

http.listen(80, function(){
    console.log('listening on *:80');
});
