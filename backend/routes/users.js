var express = require('express');
var router = express.Router();
var mockUsers = require('../model/user').mockUsers;
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({users:mockUsers(req.query.page)});
});

module.exports = router;
