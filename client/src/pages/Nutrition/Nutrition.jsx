import MainLayout from "../../components/layout/MainLayout";

import NutritionCard from "../../components/nutrition/NutritionCard";
import MacroProgress from "../../components/nutrition/MacroProgress";

function Nutrition() {
  return (
    <MainLayout>

      <h1 className="text-5xl text-white font-bold mb-8">
        Nutrition Dashboard
      </h1>

      <div className="grid lg:grid-cols-4 gap-6">

        <NutritionCard
          title="Calories"
          value="2200"
          unit="kcal"
        />

        <NutritionCard
          title="Protein"
          value="150"
          unit="g"
        />

        <NutritionCard
          title="Carbs"
          value="250"
          unit="g"
        />

        <NutritionCard
          title="Fats"
          value="65"
          unit="g"
        />

      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-8">

        <div className="space-y-6">

          <MacroProgress
            title="Protein Goal"
            value={80}
          />

          <MacroProgress
            title="Carbs Goal"
            value={65}
          />

          <MacroProgress
            title="Fat Goal"
            value={72}
          />

        </div>

        

      </div>

    </MainLayout>
  );
}

export default Nutrition;