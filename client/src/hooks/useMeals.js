import { useEffect, useState } from "react";
import { getMeals } from "../services/mealService";

function useMeals() {
  const [loading, setLoading] = useState(true);
  const [meals, setMeals] = useState([]);

  const fetchMeals = async () => {
    try {
      const data = await getMeals();
      setMeals(data.meals || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  return {
    loading,
    meals,
    refreshMeals: fetchMeals,
  };
}

export default useMeals;