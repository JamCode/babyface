var quoteModel = require('../model/quoteModel.js');
var log = require('../utility/log.js');

var quoteController = {};



quoteController.getQuote = function(req, res){
    //获取存量报价
    quoteModel.getQuote(req.params, function(err, data){
        var returnData = {};
        if (err) {
            log.error(err, log.getFileNameAndLineNum(__filename));
            returnData.code = -1;
            returnData.msg = err;
        }else{
            returnData.code = 0;
            returnData.data = data;
        }
        res.send(returnData);
    });
}



quoteController.postQuote = function(req, res){
    //新增报价
    quoteModel.newQuote(req.body, function(err, data){
        var returnData = {};
        if (err) {
            log.error(err, log.getFileNameAndLineNum(__filename));
            returnData.code = -1;
            returnData.msg = err;
        }else{
            returnData.code = 0;
            returnData.data = data;
        }
        res.send(returnData);
    });
}




quoteController.putQuote = function(req, res){
    //修改报价
    quoteModel.modifyQuote(req.body, function(err, data){
        var returnData = {};
        if(err){
            log.error(err, log.getFileNameAndLineNum(__filename));
            returnData.code = -1;
            returnData.msg = err;
        }else{
            returnData.code = 0;
            returnData.data = data;
        }
        res.send(returnData);
    });
}


quoteController.delQuote = function(req, res){
    //删除报价
    quoteModel.delQuote(req.body, function(err, data){
        var returnData = {};
        if(err){
            log.error(err, log.getFileNameAndLineNum(__filename));
            returnData.code = -1;
            returnData.msg = err;
        }else{
            returnData.code = 0;
            returnData.data = data;
        }
        res.send(returnData);
    });
}


module.exports = quoteController;
