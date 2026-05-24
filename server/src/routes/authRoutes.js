const express = require("express");

const router = express.Router();

// POST - create user's jwt token and send it to the client
router.post("/login", (req, res) => {});

// POST - create a new user and add to the database
router.post("/register", (req, res) => {});

// POST - remove jwt token and logout the user
router.post("/logout", (req, res) => {});

module.exports = router;
