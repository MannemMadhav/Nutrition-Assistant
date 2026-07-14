const { askNutritionAI } = require("../services/aiService");
const Chat = require("../models/Chat");

const askAI = async (req, res) => {
  try {
    const { question } = req.body;

    // Check question
    if (!question) {
      return res.status(400).json({
        success: false,
        message: "Question is required",
      });
    }

    // Generate AI response
    const answer = await askNutritionAI(question);

    // Save chat history
    const chat = await Chat.create({
      user: req.user._id,
      question,
      answer,
    });

    // Return response
    res.status(200).json({
      success: true,
      message: "AI response generated successfully",
      chat,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  askAI,
};  