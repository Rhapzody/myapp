var express = require('express');
var router = express.Router();
var loginControl = require('../controllers/login');
var usersControl = require('../controllers/users');
var userInfoControl = require('../controllers/users-info');
var submitControl = require('../controllers/submit');
var logoutControl = require('../controllers/logout');
/* GET users listing. */
router.get('/',usersControl);
router.get('/login',loginControl);
router.post('/submit',submitControl);
router.get('/info',userInfoControl);
router.get('/logout',logoutControl);
//export this router
module.exports = router;