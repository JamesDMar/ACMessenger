var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/IM.html');

});

http.listen(8443, function(){
    console.log('listening on *:80');
});
