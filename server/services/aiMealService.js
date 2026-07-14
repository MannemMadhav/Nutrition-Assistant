const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const generateAIMealPlan = async (user) => {
  const prompt = `
You are a certified nutritionist.

Generate a one-day meal plan.

User Details

Name: ${user.fullName}
Age: ${user.age}
Gender: ${user.gender}
Height: ${user.height} cm
Weight: ${user.weight} kg
Goal: ${user.goal}
Activity Level: ${user.activityLevel}

Return ONLY JSON in this format:

{
  "breakfast":"",
  "lunch":"",
  "dinner":"",
  "snacks":"",
  "calories":0,
  "protein":0,
  "carbs":0,
  "fats":0
}
`;

  const response = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      {
        role: "system",
        content: "You are an expert nutritionist.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.7,
  });

  return JSON.parse(
    response.choices[0].message.content
  );
};

module.exports = {
  generateAIMealPlan,
};