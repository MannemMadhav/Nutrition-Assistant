const express = require("express");

const router = express.Router();

const {
  addNutrition,
  getNutritionHistory,
} = require("../controllers/nutritionController");

const {
  protect,
} = require("../middleware/authMiddleware");

router.post(
  "/",
  protect,
  addNutrition
);

router.get(
  "/history",
  protect,
  getNutritionHistory
);

module.exports = router;