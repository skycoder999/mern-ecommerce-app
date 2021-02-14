const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

//import routes
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");
const categoryRoutes = require("./routes/category");

// app
const app = express();

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

// routes middleware

app.use("/api", userRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
