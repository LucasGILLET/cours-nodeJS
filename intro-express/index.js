const express = require('express');
const app = express();

app.set('view engine', 'pug');

// app.get('/', (req, res) => {
// 	res.send('Hello World!');
// });

// app.get('/contact', (req, res) => {
// 	res.send('Contact');
// });

// app.get('/blog/:id(\\d+)', (req, res) => {
// 	res.send('Mon article de blog numéro ' + req.params.id);
// });

// // ne fonctionnera pas tant qu'on aura pas défini de default engine
// app.get('/profile/:id(\\d+)', (req, res) => {
// 	res.render('/profile', {user: req.params.id});
// });

const globalRouter = require('./routes/global.js');
const blogRouter = require('./routes/blog.js');

const logger = function(req, res, next) {
	const { method, url } = req;
	const date = new Date().toLocaleString();
	console.log(`${date}: ${method} ${url}`);
	next();
}

app.use('/', logger)

app.use('/', globalRouter);
app.use('/blog', blogRouter);

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

app.listen(port, hostname, () => {
	console.log(`Serveur demarré sur http://${hostname}:${port}`);
});