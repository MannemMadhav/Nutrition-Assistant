const express = require("express");

const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

const {
  addWeight,
  getWeightHistory,
} = require("../controllers/weightController");

router.post("/", protect, addWeight);

router.get("/", protect, getWeightHistory);

module.exports = router;