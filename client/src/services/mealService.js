import api from "./api";

export const getMeals = async () => {
  const response = await api.get("/meals/history");
  return response.data;
};

export const generateMeal = async () => {
  const response = await api.post("/meals/generate");
  return response.data;
};