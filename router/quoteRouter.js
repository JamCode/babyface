var express = require('express');
var router = express.Router();
var quoteController = require('../controller/quoteController.js');
var authe = require('../utility/authe.js');
var constant = require('../utility/constant.js');

router.use(function validateToken(req, res, next){
    authe.autheToken(req.headers.token, function(err, code){
        if (err) {
            log.error(err, log.getFileNameAndLineNum(__filename));
            res.json({
                code: constant.returnCode.ERROR,
                msg: err
            });
        }else{
            if (code === constant.returnCode.TOKEN_INVALID) {
                res.status(401).json({
                    code: constant.returnCode.TOKEN_INVALID,
                    msg: 'token invalid'
                });
            }
            if (code === constant.returnCode.TOKEN_VALID) {
                log.info('token valid');
                next();
            }
        }
    });
});


router.route('/quote')
.get(function(req, res){
    //获取存量报价
    quoteController.getQuote(req, res);

}).put(function(req, res){
    //修改存量报价
    quoteController.putQuote(req, res);

}).post(function(req, res){
    //新增报价
    quoteController.postQuote(req, res);

}).delete(function(req, res){
    //删除报价
    quoteController.delQuote(req, res);

});





//导出router对象
module.exports = router;
