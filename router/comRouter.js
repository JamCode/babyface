var express = require('express');
var router = express.Router();
var md5 = require('MD5');
var fs = require('fs');
var path = require('path');
var log = require('../utility/log.js');
var async = require('async');
var util = require('util');


// // 检测静态资源是否更新
// {
//     url: '/diff',
//     method: 'GET',
//     return:{
//         code: 0,
//         msg: 'OK',
//         data:{
//             [
//                 {
//                     file_name:
//                     checksum:
//                     update_timestamp:
//                 }
//             ]
//         }
//     }
// }
//

function getAllFilePath(staticPathArray, endCallback){
    var filePaths = [];
    async.eachSeries(staticPathArray, function(path, callback){
        fs.readdir(path, function(err, files){
            if (err) {
                callback(err, null);
            }else{
                filePaths = filePaths.concat(files);
                callback(null);
            }
        });
    }, function(err){
        if (err) {
            endCallback(err, null);
        }else{
            endCallback(null, filePaths);
        }
    });
}

function checkSingleFile(filePath, endCallback){
    async.parallel([
        function(callback){
            fs.readFile(filePath, function(err, data){
                if(err){
                    callback(err, null);
                }else{
                    var result = {
                        file_name:filePath,
                        checksum:md5(data)
                    }
                    callback(null, result);
                }
            });

        },
        function(callback){
            fs.stat(filePath, function(err, stats){
                if (err) {
                    callback(err, null);
                }else{
                    var result = {
                        update_time:util.inspect(stats).mtime
                    }
                }
            });
        }
    ], function(err, results){
        if (err) {
            endCallback(err, null);
        }else{
            var ele = {
                file_name:results[0].file_name,
                checksum:results[0].checksum,
                update_time:results[1].update_time
            }
            endCallback(null, ele);
        }
    });
}


router.route('/diff')
.get(function(req, res){
    //计算所有js文件checksum
    log.info('diff');
    console.log(global.staticPath);
    var checksumArray = [];
    var filesPath = [];
    var returnData = {};
    getAllFilePath(global.staticPath, function(err, filesPath){
        if (err) {
            returnData.code = -1
            returnData.msg = err;
            res.send(returnData);
            return;
        }else{
            //diff all
            async.eachSeries(filesPath, function(filePath, callback){
                checkSingleFile(filePath, function(err, ele){
                    if (err) {
                        callback(err, null);
                    }else{
                        checksumArray.push(ele);
                        callback(null);
                    }
                });
            }, function(err, data){
                if (err) {
                    returnData.code = -1
                    returnData.msg = err;
                    res.send(returnData);
                }else {
                    returnData.code = 0;
                    returnData.data = checksumArray;
                    res.send(returnData);
                }
            });
        }
    });
});



//导出router对象
module.exports = router;
