#!/usr/bin/env node

"use strict";


var app = require('../app');
var debug = require('debug')('myapp:server');
var http = require('http');

// Get port from environment and store in Express.
var port = process.env.PORT || '3000';
app.set('port', port);

var server = http.createServer(app);

// Listen on provided port, on all network interfaces.
server.listen(port);

server.on('error', onError);
server.on('listening', onListening);


function onError(error) {
	// Event listener for HTTP server "error" event.

	if (error.syscall !== 'listen') {
		throw error;
	}

	// handle specific listen errors with friendly messages
	switch (error.code) {
		case 'EACCES':
			console.error("Port " + port + ' requires elevated privileges.');
			process.exit(1);
			break;

		case 'EADDRINUSE':
			console.error("Port " + port + ' is already in use.');
			process.exit(1);
			break;

		default:
			throw error;
	}
}


function onListening() {
	// Event listener for HTTP server "listening" event.

	debug('Listening on http://localhost:' + server.address().port + '/');
}
