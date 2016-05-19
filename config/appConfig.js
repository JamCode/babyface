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

exports.redisHashTable = {
    userAccountHash: 'userAccountHash',
    userTokenHash :'userTokenHash',
    quoteHash: 'quoteHash'
};

//api 认证加密密钥
exports.secretKey = {
    secret: 'babyface'
};

exports.logConfig = {
    logFileName: path.join(process.env.HOME, 'logs/babyface_'),
    level: 'DEBUG'
};

exports.unitTestConfig = {
    hostname: '127.0.0.1',
    port: 3001
}
