const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

// app

const app = express();

app.get("/", (req, res) => {
	res.send("hello from amreen");
});

// db
mongoose
	.connect(process.env.DATABASE, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Database connected successfully");
	})
	.catch((e) => {
		console.log(e);
	});

const port = process.env.PORT || 8000;

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
