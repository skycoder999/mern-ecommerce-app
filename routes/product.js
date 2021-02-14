const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.send("Hello from Default Product");
});

router.get("/product", (req, res) => {
	res.send("Hello from Product");
});

module.exports = router;
