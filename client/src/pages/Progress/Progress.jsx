import MainLayout from "../../components/layout/MainLayout";

import ProgressCard from "../../components/progress/ProgressCard";
import GoalProgress from "../../components/progress/GoalProgress";
import WeightHistory from "../../components/progress/WeightHistory";

function Progress() {
  return (
    <MainLayout>

      <h1 className="text-5xl text-white font-bold mb-8">
        Progress Dashboard
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <ProgressCard
          title="Current Weight"
          value="68"
          unit="kg"
        />

        <ProgressCard
          title="BMI"
          value="22.4"
        />

        <ProgressCard
          title="BMR"
          value="1780"
          unit="kcal"
        />

        <ProgressCard
          title="Goal"
          value="Muscle Gain"
        />

      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-8">

        <GoalProgress />

        <WeightHistory />

      </div>

    </MainLayout>
  );
}

export default Progress;