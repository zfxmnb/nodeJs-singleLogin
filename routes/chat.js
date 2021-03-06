var express = require('express');
var router = express.Router();
var app=express();
var sign = require('singleLogin');

router.get('/', function(req, res, next) {
	sign.verification(req,res,"/login","/chat",function(collection,userinfo){
		res.render("chat",userinfo);
	})
});
router.post('/', function(req, res, next) {
	sign.resetUserInfo(req,res);
});

module.exports = router;
