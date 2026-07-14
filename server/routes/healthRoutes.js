const express = require("express");

const router = express.Router();

const {
  calculateBMI,
  calculateBMR,
  calculateCalories,
} = require("../controllers/healthController");

const { protect } = require("../middleware/authMiddleware");

router.get("/bmi", protect, calculateBMI);

router.get("/bmr", protect, calculateBMR);

router.get("/calories", protect, calculateCalories);

module.exports = router;