(function() {
	'use strict';

	var express = require('express'); // charge ExpressJS
	var serveIndex = require('serve-index');

	var app = express();
	
	app.use(function(req, res, next) {
		console.log('url: ', req.url);
		next();
	});

	app.use(express.static('.'));
	app.use(serveIndex('.', {icons: true}));
	
	app.get('/ws/herve', function(req, res) {
		setTimeout(function() {
			res.json({prenom: 'Hervé'});
		}, 1000);
	});
	
	app.get('/ws/philippe', function(req, res) {
		setTimeout(function() {
			res.json({prenom: 'Philippe'});
		}, 2000);
	});
	
	app.get('/ws/fabien', function(req, res) {
		setTimeout(function() {
			res.json({prenom: 'Fabien'});
			//res.sendStatus(500);
		}, 3000);
		
	});
	
	app.get('/ws/marcel', function(req, res) {
		setTimeout(function() {
			res.json({prenom: 'Marcel'});
		}, 2000);
		
	});

	app.use(function(req, res, next) {
		console.log('404: Page not Found', req.url);
		next();
	});

	app.listen(8000, function() {
		console.log('server started on port 8000');
	});
})();
