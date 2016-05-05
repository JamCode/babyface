var appConfig = require('./config/appConfig.js');
var express = require('express');
var bodyParser = require('body-parser');
var log = require('./utility/log.js');
var app = express();

app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.urlencoded({
    extended: false // parse application/x-www-form-urlencoded
}));


var server = app.listen(appConfig.port, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('app listening at %s:%s', host, port);
});

//socket.io
var io = require('socket.io')(server);
io.on('connection', function(socket){
    socket.emit('an event', { some: 'data' });
});



process.on('uncaughtException', function(err) {
    console.log(err.stack);
    //处理全局异常
});
