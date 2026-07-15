const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

const {
  generateMeal,
  getMeals,
} = require("../controllers/mealController");

router.post("/generate", protect, generateMeal);
router.get("/history", protect, getMeals);

module.exports = router;