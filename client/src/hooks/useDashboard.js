import { useEffect, useState } from "react";
import { getDashboard } from "../services/dashboardService";

function useDashboard() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [meals, setMeals] = useState([]);

  const fetchDashboard = async () => {
    try {
      const data = await getDashboard();

      setUser(data.user);
      setMeals(data.meals);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  return {
    loading,
    user,
    meals,
    refreshDashboard: fetchDashboard,
  };
}

export default useDashboard;