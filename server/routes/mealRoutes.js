const express = require("express");

const router = express.Router();

const {
  generateMeal,
  getMeals,
} = require("../controllers/mealController");

const {
  protect,
} = require("../middleware/authMiddleware");

router.post(
  "/generate",
  protect,
  generateMeal
);

router.get(
  "/history",
  protect,
  getMeals
);

module.exports = router;