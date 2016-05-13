var conn = require('./utility');
var md5 = require('MD5');
var log = require('../utility/log.js');
var quoteHash = 'quoteHash';

// //新增
// {
//     url: '/data',
//     method: 'POST',
//     parameter: {
//         code:
//         name:
//         price:
//         amount:
//         direct:
//         enty:
//         user:
//     }
//     return:{
//         code:
//         msg:
//         data:{
//             quote_srno:
//             code:
//             name:
//             price:
//             amount:
//             direct:
//             enty:
//             user:
//             timestamp:
//         }
//     }
// }
exports.newQuote = function(quotebody, callback){
    quotebody.quote_srno = md5(quotebody.enty+quotebody.user+quotebody.code+Date.now()+Math.random());
    quotebody.timestamp = Date.now();
    conn.redisHset(quoteHash, quotebody.quote_srno, quotebody, callback);
}



// //修改
// {
//     url: '/data',
//     method: 'PUT',
//     parameter: {
//         quote_srno:
//         price:
//         amount:
//         enty:
//         user:
//     },
//     return:{
//         code:
//         msg:
//         data:{
//             quote_srno:
//             code:
//             name:
//             price:
//             amount:
//             direct:
//             enty:
//             user:
//             timestamp:
//         }
//     }
// }
exports.modifyQuote = function(quotebody ,callback){
    conn.redisHget(quoteHash, quotebody.quote_srno, function(err, reply){
        if (err) {

        }
    });
}

// //删除
// {
//     url: '/data',
//     method: 'DELETE',
//     parameter: {
//         quote_srno:
//         enty:
//         user:
//     },
//     return:{
//         code:
//         msg:
//     }
// }
exports.delQuote = function(quotebody, callback){

}


// // 获取存量数据
// {
//     url: '/data',
//     method: 'GET',
//     parameter: 'code=101010&quote_srno=111111',
//     return:{
//         code:
//         msg:
//         data:[
//             {
//                 quote_srno:
//                 code:
//                 name:
//                 price:
//                 amount:
//                 direct:
//                 enty:
//                 user:
//                 timestamp:
//             },
//         ]
//     }
// }
exports.getQuote = function(quoteParams, callback){

}
