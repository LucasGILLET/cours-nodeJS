const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
	res.send('List articles');
});

router.post('/', function(req, res) {
	res.send('Create article');
});

router.get('/:id', function(req, res) {
	res.send('Read article');
});

router.put('/:id', function(req, res) {
	res.send('Update article');
});

router.delete('/:id', function(req, res) {
	res.send('Delete article');
});

module.exports = router;