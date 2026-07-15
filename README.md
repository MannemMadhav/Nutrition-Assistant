# 🥗 Nutrition Assistant

An AI-powered Nutrition Assistant that helps users generate personalized meal plans, track nutrition, monitor health progress, and receive AI-based dietary recommendations.

---

## 🚀 Features

### 👤 User Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes

### 🍽️ Meal Planning
- AI-based Meal Generation
- Breakfast, Lunch, Dinner & Snacks
- Daily Calorie Calculation
- Protein, Carbs & Fat Tracking
- Meal History

### 📊 Dashboard
- Personalized Dashboard
- Recent Meals
- Weekly Calories Chart
- Water Intake Tracker
- Daily Goals
- Quick Actions

### 🥦 Nutrition Tracking
- Daily Nutrition Log
- Calories
- Protein
- Carbohydrates
- Fats
- Water Intake

### 📈 Progress Tracking
- Weight Tracking
- Progress History
- Weight Change Analysis

### 🤖 AI Coach
- Nutrition Recommendations
- Healthy Lifestyle Tips
- Meal Suggestions

### 👤 Profile
- Update User Details
- Fitness Goals
- Activity Level
- Height & Weight

---

# 🛠 Tech Stack

## Frontend
- React.js
- Vite
- React Router DOM
- Tailwind CSS
- Axios
- Recharts
- React Hot Toast

## Backend
- Node.js
- Express.js
- JWT Authentication
- Bcrypt
- Express Rate Limit
- Helmet
- Morgan
- Compression

## Database
- MongoDB Atlas
- Mongoose

---

# 📂 Project Structure

```
Nutrition-Assistant/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── index.js
│
├── README.md
└── package.json
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/MannemMadhav/Nutrition-Assistant.git

cd Nutrition-Assistant
```

---

## Backend Setup

```bash
cd server

npm install
```

Create a `.env` file inside the **server** folder.

PORT=5000

MONGODB_URI=mongodb+srv://jaidb:jaideep123@cluster0.ctpdw2h.mongodb.net/?appName=Cluster0

JWT_SECRET=NutritionAssistant@2026#MadhavSecure123
OPENAI_API_KEY=open api key
##backend setup
```bash
npm run dev
```

---

## Frontend Setup

```bash
cd client

npm install
```

Create `.env`

```env
VITE_API_URL=http://localhost:5000/api
```

Start Frontend

```bash
npm run dev
```

---

# 🌐 Deployment

## Frontend

Deploy using

- Vercel

Environment Variable

```env
VITE_API_URL=https://your-render-backend.onrender.com/api
```

---

## Backend

Deploy using

- Render

Environment Variables



# 🔒 Security

- JWT Authentication
- Password Hashing using Bcrypt
- Helmet Security
- Rate Limiting
- Environment Variables
- Protected Routes

---

# 🔮 Future Improvements

- Barcode Food Scanner
- Food Image Recognition
- Personalized AI Nutrition Coach
- Wearable Device Integration
- Weekly Reports
- Email Notifications
- Admin Dashboard
- Multi-language Support

---

# 👨‍💻 Author

**Madhav Mannem**

GitHub:
https://github.com/MannemMadhav



---

# 📜 License

This project is developed for educational purposes and portfolio demonstration.
