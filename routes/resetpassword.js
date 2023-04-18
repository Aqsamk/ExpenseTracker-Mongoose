const express = require("express");

const resetpasswordController = require("../controllers/resetpassword");

const router = express.Router();

router.get(
  "/updatepassword/:resetpasswordid",
  resetpasswordController.updatepassword
);
router.use("/resetpassword/:id", resetpasswordController.resetpassword);
router.use("/forgotpassword", resetpasswordController.forgotpassword);

module.exports = router;