var express = require('express');
var router = express.Router();
var mockUsers = require('../model/user').mockUsers;
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index.html',{data:JSON.stringify(mockUsers(req.query.page))});
});

module.exports = router;
