const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

router.post(
  "/createuser",
  [
    // conditions using express validatior
    (body("email", "invalid email").isEmail(),
    body("name").isLength({ min: 5 }),
    body("password", "incorrect password").isLength({ min: 5 })),
  ],
  async (req, res) => {
    // checking validation using express validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

// to check login user endpoint
router.post(
  "/loginuser",
  [
    // conditions using express validatior
    (body("email", "invalid email").isEmail(),
    body("password", "incorrect password").isLength({ min: 5 })),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;

    try {
      let userdata = await User.findOne({ email });
      if (!userdata) {
        return res.status(400).json({ errors: "enter correct email " });
      }

      if (req.body.password !== userdata.password) {
        return res.status(400).json({ errors: "enter valid password" });
      } else {
        res.json({ success: true });
      }
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);
module.exports = router;
