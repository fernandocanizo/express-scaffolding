"use strict";


var express = require('express');
var router = express.Router();

router.get('/users', function(req, res, next) {
	// GET users listing

	res.send('Unimplemented.');
});

module.exports = router;
