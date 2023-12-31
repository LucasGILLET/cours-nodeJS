const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
	res.render('home');
});

router.get('/about', function(req, res) {
	res.send('About page');
});

router.get('/contact', function(req, res) {
	res.send('Contact page');
});

module.exports = router;