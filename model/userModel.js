var conn = require('./utility');

exports.getUserCount = function(callback){
	var sql = 'select count(*) as count from user_base_info';
	conn.executeSql(sql, [], callback);
}


exports.getUserCache = function(req ,callback){
    conn.redisHget(req.hash, req.key, callback);
}
