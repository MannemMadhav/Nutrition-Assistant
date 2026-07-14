import MainLayout from "../../components/layout/MainLayout";
import ProfileCard from "../../components/profile/ProfileCard";
import ProfileForm from "../../components/profile/ProfileForm";
import StatCard from "../../components/profile/StatCard";

import useProfile from "../../hooks/useProfile";

function Profile() {
  const {
    loading,
    user,
    refreshProfile,
  } = useProfile();

  if (loading) {
    return (
      <MainLayout>
        <h1 className="text-white text-3xl">
          Loading Profile...
        </h1>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <h1 className="text-4xl font-bold text-white mb-8">
        Profile
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <ProfileCard user={user} />

        <div className="lg:col-span-2">
          <ProfileForm
            user={user}
            onUpdated={refreshProfile}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mt-8">
        <StatCard
          title="BMI"
          value={user?.bmi || "-"}
        />

        <StatCard
          title="BMR"
          value={user?.bmr || "-"}
        />

        <StatCard
          title="Goal"
          value={user?.goal || "-"}
        />

        <StatCard
          title="Weight"
          value={
            user?.weight ? `${user.weight} kg` : "-"
          }
        />
      </div>
    </MainLayout>
  );
}

export default Profile;