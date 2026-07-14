import MainLayout from "../../components/layout/MainLayout";

import WelcomeCard from "../../components/dashboard/WelcomeCard";
import DashboardCard from "../../components/dashboard/DashboardCard";
import CaloriesChart from "../../components/dashboard/CaloriesChart";
import RecentMeals from "../../components/dashboard/RecentMeals";
import AIRecommendation from "../../components/dashboard/AIRecommendation";
import GoalCard from "../../components/dashboard/GoalCard";
import WaterCard from "../../components/dashboard/WaterCard";
import QuickActions from "../../components/dashboard/QuickActions";
import useDashboard from "../../hooks/useDashboard";

function Dashboard() {
  const {
    loading,
    user,
    meals,
  } = useDashboard();

  if (loading) {
    return (
      <MainLayout>
        <h1 className="text-white text-3xl">
          Loading Dashboard...
        </h1>
      </MainLayout>
    );
  }

  const latestMeal = meals[0];

  return (
    <MainLayout>
      <WelcomeCard user={user} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

        <DashboardCard
          title="Calories"
          value={latestMeal?.calories || 0}
          unit="kcal"
        />

        <DashboardCard
          title="Meals"
          value={meals.length}
        />

        <DashboardCard
          title="Weight"
          value={user?.weight || "-"}
          unit="kg"
        />

        <DashboardCard
          title="Protein"
          value={latestMeal?.protein || 0}
          unit="g"
        />

      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-8">
        <CaloriesChart />
        <RecentMeals meals={meals} />
      </div>
      <div className="grid lg:grid-cols-3 gap-6 mt-8">

    <GoalCard
        user={user}
    />

    <WaterCard />

    <QuickActions />

</div>

      <div className="mt-8">
        <AIRecommendation user={user} />
      </div>
    </MainLayout>
  );
}

export default Dashboard;