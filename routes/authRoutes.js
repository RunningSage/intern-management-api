const express = require("express");
const router = express.Router();
const { login, signup } = require("../controllers/authController");
const { check } = require("express-validator");
const validate = require("../middleware/validationMiddleware");

router.post(
  "/signup",
  [
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").isLength({ min: 6 }),
    check("role", "Role is required")
      .optional()
      .isIn(["admin", "manager", "intern"]),
  ],
  validate,
  signup
);

router.post(
  "/login",
  [
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").exists(),
  ],
  validate,
  login
);

module.exports = router;
