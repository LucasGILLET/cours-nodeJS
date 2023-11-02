const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

const monModule = require('./my_modules/module1'); // Local module
const { random } = require('./my_modules/random'); // Local module

const server = http.createServer((req, res) => {
	const currentUrl = url.parse(req.url);
		
	let page = '';
	switch (currentUrl.pathname) {
		case '/':
			page = fs.readFileSync('index.html', 'utf8', (err, data) => {
				if (err) throw err;
				return data;
			});
			break;
		case '/contact':
			page = fs.readFileSync('contact.html', 'utf8', (err, data) => {
				if (err) throw err;
				return data;
			});
			break;
		default:
			page = '<h1>Sorry, this is not a good URL</h1><p>Try the links bellow</p>'
			break;
	}

	const nav = fs.readFileSync('nav.html', 'utf8', (err, data) => {
		if (err) throw err;
		return data;
	});


	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.end(page + nav);



	// const parsedUrl = url.parse(currentUrl)
	// const parsedQuery = querystring.parse(parsedUrl.query);


	// const myUrl = 'https://example.com/path/demo?foo=toto&bar=titi';
	// const parsedUrl = url.parse(myUrl);
	// const parsedQuery = querystring.parse(parsedUrl.query);
	// console.log(parsedUrl);
	// console.log(parsedQuery);

});

const hostname = '127.0.0.1';
const port = 3000;

const personnes = ['Lucas', 'Paul', 'Gautier']

server.listen(port, hostname, () => {
	console.log(`Serveur demarré sur http://${hostname}:${port}`);
	console.log(monModule.helloWorld());
	console.log(random(personnes));
});