import MainLayout from "../../components/layout/MainLayout";
import NutritionCard from "../../components/nutrition/NutritionCard";
import MacroProgress from "../../components/nutrition/MacroProgress";

function Nutrition() {
  return (
    <MainLayout>
      <div className="p-6">

        <h1 className="text-4xl font-bold text-white mb-8">
          Nutrition Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

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

        <div className="mt-10">

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