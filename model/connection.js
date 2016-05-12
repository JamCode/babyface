var config = require('../config/appConfig.js');
var mysql = require('mysql');
var redis = require("redis");
var redisClient = null;
var pool = null;
var log = require('../utility/log.js');


exports.connectRedis = function(){

    if (config.redisConnection === undefined) {
        log.info('redisConnection is undefined', log.getFileNameAndLineNum(__filename));
        return null;
    }

    redisClient = redis.createClient({auth_pass:config.redisConnection.auth_pass});

    redisClient.on("error", function (err) {
        log.error(err, log.getFileNameAndLineNum(__filename));
    });

    return redisClient;
}

exports.createMysqlConnectionPool = function(){

    if(config.mysqlConnection === undefined){
        log.info('mysqlConnection is undefined', log.getFileNameAndLineNum(__filename));
        return null;
    }

    pool = mysql.createPool({
    	host: config.mysqlConnection.host,
    	user: config.mysqlConnection.user,
      	password: config.mysqlConnection.password,
    	database: config.mysqlConnection.database,
    	port: config.mysqlConnection.port,
    	acquireTimeout: 80000
    });

    pool.getConnection(function(err, connection){
        if(err){
            log.error(err, log.getFileNameAndLineNum(__filename));
            return null;
        }else{
            connection.release();
            return pool;
        }
    });
}
