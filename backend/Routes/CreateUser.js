const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
//using bcrypt js fot hashing
const bcrypt = require("bcryptjs");
// using jsonwebtoken
const jwt = require("jsonwebtoken");
// creating secret key
const secretKey = "PratipChandraLekhevVardishnuVand";

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
    // genrating salt value for hashing
    let salt = await bcrypt.genSalt(10);

    // getinng salt and generating hash for password
    let bcryptPassword = await bcrypt.hash(req.body.password, salt);

    try {
      await User.create({
        name: req.body.name,
        password: bcryptPassword,
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

      // bcrypt password validation
      const validpassword = await bcrypt.compare(
        req.body.password,
        userdata.password
      );
      if (!validpassword) {
        return res.status(400).json({ errors: "enter valid password" });
      } else {
        // using jwt to logged in the user
        const data = {
          user: {
            id: userdata.id,
          },
        };

        const authToken = jwt.sign(data, secretKey); // jwt sign in user until it clear cache
        res.json({ success: true, authToken: authToken });
      }
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);
module.exports = router;
