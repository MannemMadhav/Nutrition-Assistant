const generateMealPlan = (user) => {
  const {
    gender,
    age,
    height,
    weight,
    activityLevel,
    goal,
  } = user;

  // ---------- BMR ----------
  let bmr;

  if (gender === "Male") {
    bmr =
      10 * weight +
      6.25 * height -
      5 * age +
      5;
  } else {
    bmr =
      10 * weight +
      6.25 * height -
      5 * age -
      161;
  }

  // ---------- Activity ----------
  let multiplier = 1.2;

  switch (activityLevel) {
    case "Sedentary":
      multiplier = 1.2;
      break;

    case "Lightly Active":
      multiplier = 1.375;
      break;

    case "Moderately Active":
      multiplier = 1.55;
      break;

    case "Very Active":
      multiplier = 1.725;
      break;

    case "Extra Active":
      multiplier = 1.9;
      break;

    default:
      multiplier = 1.2;
  }

  let calories = Math.round(bmr * multiplier);

  // ---------- Goal ----------
  if (goal === "Muscle Gain") {
    calories += 400;
  }

  if (goal === "Weight Loss") {
    calories -= 500;
  }

  // ---------- Macros ----------
  const protein = Math.round((calories * 0.30) / 4);
  const carbs = Math.round((calories * 0.45) / 4);
  const fats = Math.round((calories * 0.25) / 9);

  let breakfast = "";
  let lunch = "";
  let dinner = "";
  let snacks = "";

  if (goal === "Muscle Gain") {
    breakfast =
      "Oats + Milk + Banana + Peanut Butter";

    lunch =
      "Rice + Chicken + Vegetables";

    dinner =
      "Paneer + Chapati + Salad";

    snacks =
      "Protein Shake + Almonds";
  } else if (goal === "Weight Loss") {
    breakfast =
      "Oats + Apple";

    lunch =
      "Brown Rice + Grilled Chicken";

    dinner =
      "Vegetable Soup";

    snacks =
      "Boiled Eggs";
  } else {
    breakfast =
      "Idli + Sambar";

    lunch =
      "Rice + Dal";

    dinner =
      "Chapati + Curry";

    snacks =
      "Fruits";
  }

  return {
    breakfast,
    lunch,
    dinner,
    snacks,
    calories,
    protein,
    carbs,
    fats,
  };
};

module.exports = {
  generateMealPlan,
};