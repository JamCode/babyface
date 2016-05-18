var express = require('express');
var router = express.Router();




//登录
router.post('/login', function(req, res){
    res.send('router test ok');
});


//注销


//导出router对象
module.exports = router;
