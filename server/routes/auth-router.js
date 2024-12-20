const express = require("express");
const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
const Feedback=require("../models/contact-model")

const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).send("Reached Root Node");
});

router.route("/signup").post(async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash the password
    const saltRound = 10;
    const hashPassword = await bcrypt.hash(password, saltRound);

    // Create the user
    const UserCreated = await User.create({
      username,
      email,
      password: hashPassword,
    });
    res
      .status(201)
      .json({ message: "User created successfully", user: UserCreated });
  } catch (error) {
    console.error("Error occurred: ", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

router.route("/login").post(async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the user exists
    const userExists = await User.findOne({ email: email });
    if (!userExists) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, userExists.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid Email or Password" });
    }

    // Successful login
    return res.status(200).json({ message: "Login Successful" });
  } catch (error) {
    console.error("Error occurred: ", error);
    return res
      .status(500)
      .json({ message: "Server Error", error: error.message });
  }
});

router.route("/contact").post(async(req, res) => {
    try {
        const { name, email, feedback } = req.body;
        if (!name || !email || !feedback) {
            return res.status(400).json({ message: "All Fields are Required" });
        }
        const response = await Feedback.create({ name: name, email: email, feedback: feedback });
        return res.status(201).json({ message: "Thanks For Your Feedback" });

    } catch (error) {
        console.log("Error Occurred: ", error);
        return res.status(500).json({ message: "Error Occurred", error: error.message });
    }
})

module.exports = router;
