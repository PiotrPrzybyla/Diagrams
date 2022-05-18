const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;
const mysql = require("mysql");
const cors = require("cors");
app.use(cors());
require("dotenv").config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const conn = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
});

app.get("/", (req, res) => {
	conn.connect(function (err) {
		if (err) throw err;
		console.log("Connected!");
		res.send("Connected");
	});
});

app.post("/add", (req, res) => {
	const value = req.body.value;
	conn.query("INSERT INTO `Data` (Value) VALUES (" + value + ")"),
		(err) => {
			if (err) throw err;
		};
	res.send(`Added ${value}`);
});
app.get("/all", (req, res) => {
	conn.query("SELECT * FROM Data", (err, values) => {
		if (err) throw err;
		res.send(values);
	});
});
app.get("/deleteAll", (req, res) => {
	conn.query("DELETE FROM Data", (err, values) => {
		if (err) throw err;
		res.send(values);
	});
});
app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
