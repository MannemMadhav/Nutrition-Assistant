const client = require("../config/ai");

const askNutritionAI = async (question) => {
  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: `You are an expert nutrition assistant. Answer clearly and safely.

Question:
${question}`,
  });

  return response.output_text;
};

module.exports = {
  askNutritionAI,
};