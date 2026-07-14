const express = require("express");

const router = express.Router();

const {
  addWeight,
  getProgress,
} = require("../controllers/progressController");

const {
  protect,
} = require("../middleware/authMiddleware");

router.post(
  "/",
  protect,
  addWeight
);

router.get(
  "/",
  protect,
  getProgress
);

module.exports = router;