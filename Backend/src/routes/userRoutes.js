require('dotenv').config();
const express = require('express');
const user = require('../models/userModels');
const bcrypt = require('bcrypt');
const router = express.Router();

router.get("/login", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

router.get("/sign-in", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

router.post('/sign-in', async (req, res) => {
    try {
        const { email, userName, password } = req.query;

        const existingUser = user.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({
                message: "Already exist"
            })
        }
        const salt = await bcrypt.genSalt(10);

        const hashPass = await bcrypt.hash(password, salt);

        const userLoginData = new user({
            email: email,
            userName: userName,
            password: hashPass
        });

        await userLoginData.save();
        console.log('Data is saved');

        res.json({
            message: 'Successfully created',
            user: userLoginData
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Internal Server Error'
        });
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.query;
    try {
        const User = await user.findOne({ email });
        if (!User) {
            res.status(400).json({
                message: "Not found"
            })
        }
        const match = await bcrypt.compare(password, User.password)

        if (match) {
            console.log("Password is correct");
            res.json(User);
        } else {
            console.log("Password is incorrect");
            res.status(401).json({
                message: "Incorrect password"
            });
        }

    } catch (err) {
        console.error(err);
    }
})

module.exports = router;