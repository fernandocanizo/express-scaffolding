"use strict";


var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	// home page

	res.render('index', { title: 'Express' });
});


module.exports = router;
