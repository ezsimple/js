#!/usr/bin/env node
var mysql = require('mysql');

var conn = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'nodejs',
	password: 'node1234',
	database: 'nodejs'
});

conn.connect(function(err) {
	if(err) {
		console.log('mysql connection error');
		console.log(err);
	} else {
		console.log('연결성공');
	}
});

conn.query('select now()', function(err,rows, cols) {
	if (err) throw err;
	console.log(rows);
});
