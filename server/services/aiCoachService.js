const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const generateCoachResponse = async (user, question) => {
  const prompt = `
You are an expert nutrition coach.

User Profile

Name: ${user.fullName}
Age: ${user.age}
Gender: ${user.gender}
Height: ${user.height} cm
Weight: ${user.weight} kg
Goal: ${user.goal}
Activity Level: ${user.activityLevel}

User Question

${question}

Provide a practical, personalized nutrition answer.
`;

  const response = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      {
        role: "system",
        content: "You are an expert nutrition coach.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.7,
  });

  return response.choices[0].message.content;
};

module.exports = {
  generateCoachResponse,
};