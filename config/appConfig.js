var path = require('path');

exports.port = 3001;

exports.mysqlConnection = {
    host: process.env.dbhost,
    user: process.env.dbuser,
    password: process.env.dbpassword,
    database: process.env.database,
    port: process.env.dbport
};

exports.redisConnection = {
    auth_pass: process.env.redis_auth_pass
};

exports.logConfig = {
    logFileName: path.join(process.env.HOME, 'logs/babyface_'),
    level: 'DEBUG'
};
