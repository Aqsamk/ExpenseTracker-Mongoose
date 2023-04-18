const express = require("express");
const userController = require("../controllers/user");
const expenseController = require("../controllers/expenseController");

const authenticatemiddleware = require("../middleware/auth");

const router = express.Router();

router.post("/signup", userController.signup);
router.post("/login", userController.login);



module.exports = router;