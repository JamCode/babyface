var conn = require('../model/utility.js');
var jwt = require('jwt-simple');
var log = require('./log.js')
var appConfig = require('../config/appConfig.js');
var constant = require('./constant.js');

exports.autheToken = function(token, callback){
    var payload = jwt.decode(token, 'babyface');
    conn.redisHget(appConfig.redisHashTable.userAccountHash, payload.user, function(err, reply){
        if (err) {
            log.error(err, log.getFileNameAndLineNum(__filename));
            callback(err, null);
        }else{
            if (token === reply) {
                callback(null, constant.returnCode.TOKEN_VALID);
            }else{
                //token失效
                callback(null, constant.returnCode.TOKEN_INVALID);
            }
        }
    });
}
