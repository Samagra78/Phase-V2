import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { Users } from "../models/model.js";
import { generateToken } from "../utils/jwtUtils.js";
import auth from "../middlewares/authMiddleware.js";

const router = express.Router();

// POST - create user's jwt token and send it to the client
router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await Users.findOne({ username, password });
    
    if (!user) {
        res.status(401).json({ message: "Invalid username or password" });
        return;
    }

    const payload = { userId: user._id.toString() };
    console.log("payload", payload);
    const token = await generateToken(payload);

    res.json({
        token,
        message: "Successfully logged in"
    })

}); 

// POST - create a new user and add to the database
router.post("/register", async (req, res) => {
    const { username, password } = req.body;
    const existingUser = await Users.findOne({ username });

    if (existingUser) {
        res.status(400).json({ message: "Username already exists" });
        return;
    }

    const user = new Users({ username, password });
    await user.save();
    
    const payload = { userId: user._id.toString() };
    const token = await generateToken(payload);

    res.json({
        token,
        message: "Successfully registered"
    });
});

export default router;
