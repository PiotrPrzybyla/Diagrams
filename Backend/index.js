const express = require("express");
const app = express();
const port = 3001;
const mysql = require("mysql");
require("dotenv").config();

const conn = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
});

app.get("/connect", (req, res) => {
	conn.connect(function (err) {
		if (err) throw err;
		console.log("Connected!");
		res.send("Connected");
	});
});

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});