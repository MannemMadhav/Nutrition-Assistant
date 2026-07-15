const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

const {
  addNutrition,
  getNutritionHistory,
} = require("../controllers/nutritionController");

router.post("/", protect, addNutrition);
router.get("/history", protect, getNutritionHistory);

module.exports = router;