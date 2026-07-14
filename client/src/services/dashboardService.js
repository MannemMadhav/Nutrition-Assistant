import api from "./api";

export const getDashboard = async () => {
  const [profileResponse, mealsResponse] = await Promise.all([
    api.get("/users/profile"),
    api.get("/meals/history"),
  ]);

  return {
    user: profileResponse.data.user,
    meals: mealsResponse.data.meals || [],
  };
};