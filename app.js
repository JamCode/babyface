
var appConfig = require('./config/appConfig.js');

var log = require('./utility/log.js');
var logger = log.createLog(appConfig.logConfig.logFileName);
log.setLevel(logger, appConfig.logConfig.level);//设置打印级别
log.setDefaultLogger(logger);


var express = require('express');
var app = express();


//初始化http服务
var server = InitHTTPServer(app);

//初始化长连接
initSocketIO(server);

//初始化路由模块
initRouter(app);



app.get('/', function(req, res) {
    res.send('hello babyface');
});

process.on('uncaughtException', function(err) {
    log.error(err.stack);
    //处理全局异常
});







////////////////////////////////////////////////////////////////////////////////
function InitHTTPServer(app){

    log.info('InitHTTPServer......');

    var bodyParser = require('body-parser');
    app.use(bodyParser.json()); // parse application/json
    app.use(bodyParser.urlencoded({
        extended: false // parse application/x-www-form-urlencoded
    }));

    var server = app.listen(appConfig.port, function(){
        var host = server.address().address;
        var port = server.address().port;
        log.info('app listening at '+host+':'+port);
    });

    return server;
}


function initSocketIO(server){
    //socket.io 建立长连接
    log.info('initSocketIO......');

    var io = require('./io/io.js');//长连接模块
    var socketio = require('socket.io')(server);
    socketio.on('connection', function(socket){
        io.connectionEntry(socket);
    });
}


function initRouter(app){
    log.info('initRouter......');

    var userRouter = require('./router/userRouter.js'); //示例路由模块
    //加载路由模块
    app.use('/user', userRouter);
}
