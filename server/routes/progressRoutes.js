const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

const {
  addWeight,
  getProgress,
} = require("../controllers/progressController");

router.post("/", protect, addWeight);
router.get("/", protect, getProgress);

module.exports = router;