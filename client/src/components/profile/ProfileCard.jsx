function ProfileCard({ user }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-8 shadow-lg flex flex-col items-center">

      <img
        src="https://ui-avatars.com/api/?name=Madhav&background=22c55e&color=fff&size=180"
        alt="avatar"
        className="rounded-full w-36 h-36"
      />

      <h2 className="text-white text-3xl font-bold mt-5">
        {user?.fullName}
      </h2>

      <p className="text-gray-400 mt-2">
        {user?.email}
      </p>

    </div>
  );
}

export default ProfileCard;