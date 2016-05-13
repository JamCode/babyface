var express = require('express');
var router = express.Router();
var quoteController = require('../controller/quoteController.js');

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
