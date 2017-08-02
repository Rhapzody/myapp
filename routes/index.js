var express = require('express');
var router = express.Router();
var indexControl = require('../controllers/index');
/* GET home page. */
router.get('/', indexControl);
module.exports = router;
