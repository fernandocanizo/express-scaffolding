"use strict";


var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
	// home page

	// pass request URL to template
	res.render('index', {
		title: 'Blog Template',
		url: req.url
	});
});

// menu routes to show different active menu, but providing same content
// (this is just a demo after all)

router.get("/new-features", function (req, res, next) {
	res.render('index', {
		title: 'Blog Template',
		url: req.url
	});
});

router.get("/press", function (req, res, next) {
	res.render('index', {
		title: 'Blog Template',
		url: req.url
	});
});

router.get("/new-hires", function (req, res, next) {
	res.render('index', {
		title: 'Blog Template',
		url: req.url
	});
});

router.get("/about", function (req, res, next) {
	res.render('index', {
		title: 'Blog Template',
		url: req.url
	});
});


module.exports = router;
