var express = require('express');
var router = express.Router();
// var userController = require('./controller/userController.js');

router.get('/test', function(req, res){
    res.send('router test ok');
});

//导出router对象
module.exports = router;
