function WelcomeCard({ user }) {
  return (
    <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-8 shadow-lg text-white">
      <h1 className="text-4xl font-bold">
        Welcome, {user?.fullName || "User"} 👋
      </h1>

      <p className="mt-3 text-lg">
        Goal: {user?.goal || "Not Set"}
      </p>

      <p className="mt-2">
        Activity: {user?.activityLevel || "-"}
      </p>
    </div>
  );
}

export default WelcomeCard;